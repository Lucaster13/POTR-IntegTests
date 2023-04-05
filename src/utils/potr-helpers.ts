import { Algodv2, Indexer } from "algosdk";
import axios from "axios";
import { PotrMetadata } from "../types";
import { ACCOUNTS, ASSET_METADATA_URL, ASSET_TRANSACTION_URL, IPFS_URL_PREFIX } from "../constants";
import { makeReach } from "./stdlib";

function cleanPotrs() {
    return cy.getAsaIds().then(async (asaIds) => {
        cy.log("cleaning potrs...");

        try {
            const { reach, user, admin } = await makeReach();

            // get algo client
            const { algodClient } = await reach
                .getProvider()
                .then((p) => ({ algodClient: p.algodClient as Algodv2, indexer: p.indexer as Indexer }));

            // fetch user account info
            const accountInfo = await algodClient.accountInformation(ACCOUNTS.TestNet.user.addr).do();

            // filter owned potr ids
            const ownedPotrIds = accountInfo.assets
                .filter(({ amount }) => reach.bigNumberToNumber(amount) > 0)
                .map((md) => md["asset-id"])
                .map((asaId) => reach.bigNumberToNumber(asaId))
                .filter((potrId) => asaIds.TestNet.potr.includes(potrId));

            if (!ownedPotrIds.length) cy.log("no potrs to clean.");

            // transfer all owned potrs back to admin
            await Promise.all(
                ownedPotrIds.map(async (potrId) => {
                    cy.log("transferring potr id", potrId, "to admin");
                    await reach.transfer(user, admin, 1, potrId);
                    cy.log("succesfully transferred potr id", potrId, "to admin");
                }),
            );
        } catch (e) {
            cy.log("cleaning potrs failed", e);
        }
    });
}

const RESPONSE_LIMIT = 30000;

function getProtectorAssets() {
    return cy
        .log("Getting POTRS in user wallet")
        .getAsaIds()
        .then(async (asaIds) => {
            const { reach } = await makeReach();
            const { algodClient } = await reach
                .getProvider()
                .then((p) => ({ algodClient: p.algodClient as Algodv2, indexer: p.indexer as Indexer }));

            try {
                const accountInfo = await algodClient.accountInformation(ACCOUNTS.TestNet.user.addr).do();
                // filter only potrs with balance > 0 and extract asa Id
                const ownedPotrIds = accountInfo.assets
                    .filter(({ amount }) => amount > 0)
                    .map((md) => getAsaIdFromMd(md))
                    .map((asaId) => reach.bigNumberToNumber(asaId))
                    .filter((asaId) => asaIds.TestNet.potr.includes(asaId));
                const assetMetadata = await getAssetMetadata(ownedPotrIds);
                return assetMetadata;
            } catch (error) {
                cy.log("Error getting Protector assets:", error.message);
            }
        });
}

async function getAssetMetadata(ids): Promise<PotrMetadata[]> {
    let nextToken = null;

    let assetInfo = [];
    const assetInfoParams = { creator: ACCOUNTS.TestNet.admin.addr, limit: RESPONSE_LIMIT };

    // paginate retrieving asset metadata
    do {
        // make request url based on nextToken
        const { data } = await axios.get(ASSET_METADATA_URL, { params: { ...assetInfoParams, next: nextToken } });

        // retrieve next token if available
        nextToken = getNextTokenFromRes(data);
        // concatenate assets results
        assetInfo = [...assetInfo, ...data.assets];
    } while (nextToken);

    // filter only necessary asset info
    const infoByAsaId = assetInfo.reduce((infoById, md) => {
        infoById[md.index] = getAsaInfoFromMd(md);
        return infoById;
    }, {});

    let assetConfigTxns = [];
    const assetConfigTxnsParams = {
        address: ACCOUNTS.TestNet.admin.addr,
        "address-role": "sender",
        limit: RESPONSE_LIMIT,
        sortBy: "round:desc",
    };

    // paginate retrieving asset config transactions
    do {
        // make request url based on nextToken
        const { data } = await axios.get(ASSET_TRANSACTION_URL, {
            params: { ...assetConfigTxnsParams, next: nextToken },
        });

        // retrieve next token if available
        nextToken = getNextTokenFromRes(data);

        // concatenate assets results
        assetConfigTxns = [...assetConfigTxns, ...data.transactions];
    } while (nextToken);

    const txnsByAsaId = assetConfigTxns
        // filter only transactions for potrs owned by this wallet
        .filter((txn) => ids.includes(getAsaIdFromTxn(txn)))
        // convert to object, where (key -> value) is (asaId -> [transactions])
        .reduce((txnsById, txn) => {
            const asaId = getAsaIdFromTxn(txn);

            // if asaId not in object yet, add it
            if (!txnsById[asaId]) txnsById[asaId] = [];

            txnsById[asaId].push(txn);

            // sort array of transactions in descending order by block time
            sortTxnsByDescendingTime(txnsById[asaId]);

            // set array to only the most recent transaction
            txnsById[asaId] = [txnsById[asaId][0]];

            return txnsById;
        }, {});

    // extract notes for each transaction and convert to json
    const traitsByAsaId = Object.entries(txnsByAsaId).reduce((traitsById, [asaId, txn]) => {
        const { note } = txn[0];

        // convert note to json
        const traits = getJsonFromNote(note);

        // add asset traits to object
        traitsById[asaId] = traits;

        return traitsById;
    }, {});

    // combine traits and metadata
    const metadataByAsaId = ids.reduce((metadataById, asaId) => {
        const info = infoByAsaId[asaId];
        const { description, properties } = traitsByAsaId[asaId];
        metadataById[asaId] = { ...info, description, id: asaId, balance: 1, traits: properties };
        return metadataById;
    }, {});

    return Object.values(metadataByAsaId);
}

function getAsaIdFromTxn(txn) {
    return txn["created-asset-index"];
}
function getAsaIdFromMd(md) {
    return md["asset-id"];
}
function getNextTokenFromRes(res) {
    return res["next-token"];
}
function getTimeFromTxn(txn) {
    return txn["round-time"];
}
function sortTxnsByDescendingTime(txns) {
    txns.sort((a, b) => getTimeFromTxn(b) - getTimeFromTxn(a));
}
function getJsonFromNote(noteBase64) {
    const noteString = atob(noteBase64)
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
}
function getAsaInfoFromMd(md) {
    const { index, params } = md;
    const { name, url } = params;
    const unitName = params["unit-name"];
    return { id: index, name, url: url.replace("ipfs://", IPFS_URL_PREFIX), unitName };
}

export { cleanPotrs, getProtectorAssets };

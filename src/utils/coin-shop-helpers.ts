import { ACCOUNTS, COIN_TYPES, Coin, ContractName, Participants, REACH_NETWORK, TestIds } from "../constants";
import CONTRACT_BACKENDS from "../contracts";
import { CoinShopDeployerInterface, CoinShopHandle } from "../types";
import { attachContract, deployContract } from "./contract";
import { makeReach } from "./stdlib";

const backend = CONTRACT_BACKENDS.coin_shop;

function restockCoinShop(supply: [number, number, number]) {
    return cy
        .log("restocking coin shop", { supply })
        .getContractId(ContractName.COIN_SHOP)
        .then(async (contractId) => {
            try {
                const { reach, admin } = await makeReach();

                // connect to contract
                const contract = await admin.contract<CoinShopHandle>(backend, contractId);
                // deposit coins to contract
                await contract.a.controller_api.restock(supply.map((amt) => reach.bigNumberify(amt)));
                cy.log("successfully restocked coin shop", { supply });
            } catch (e) {
                cy.log("coin shop restock failed", e);
            }
        });
}

function priceChangeCoinShop(prices: [number, number, number]) {
    return cy
        .log("changing coin shop prices", { prices })
        .getContractId(ContractName.COIN_SHOP)
        .then(async (contractId) => {
            try {
                const { reach, admin } = await makeReach();

                // connect to contract
                const contract = await admin.contract<CoinShopHandle>(backend, contractId);
                // change prices
                await contract.a.controller_api.set_prices(prices.map((price) => reach.parseCurrency(price)));
                cy.log("successfully changed coin shop prices", { prices });
            } catch (e) {
                cy.log("coin shop price change failed", e);
            }
        });
}

function withdrawCoinShop() {
    return cy
        .log("withdrawing from coin shop")
        .getContractId(ContractName.COIN_SHOP)
        .then(async (contractId) => {
            try {
                const { admin } = await makeReach();

                // connect to contract
                const contract = await admin.contract<CoinShopHandle>(backend, contractId);
                // change prices
                await contract.a.controller_api.withdraw();
                cy.log("successfully withdrew coin shop");
            } catch (e) {
                cy.log("coin shop withdraw failed", e);
            }
        });
}

function toggleCoinShopPause() {
    return cy
        .log("toggling coin shop pause")
        .getContractId(ContractName.COIN_SHOP)
        .then(async (contractId) => {
            try {
                const { admin } = await makeReach();

                // connect to contract
                const contract = await admin.contract<CoinShopHandle>(backend, contractId);
                // extract isPaused value from maybe and return it
                return contract.a.controller_api.toggle_pause().then((isPaused) => {
                    cy.log("successfully toggled coin shop pause", isPaused ? "on" : "off");
                    return isPaused;
                });
            } catch (e) {
                cy.log("coin shop pause toggle failed", e);
            }
        });
}

function cleanCoinShop() {
    return cy
        .log("cleaning coin shop")
        .getContractId(ContractName.COIN_SHOP)
        .then((contractId) =>
            cy.getAsaIds().then(async (asaIds) => {
                try {
                    const { reach, admin, user } = await makeReach();

                    // connect to contract
                    const contract = await admin.contract<CoinShopHandle>(backend, contractId);

                    const coinIds = asaIds.TestNet.coin;
                    const coinBals = await user.balancesOf(asaIds.TestNet.coin);

                    // send coins back to admin account
                    await Promise.all(
                        coinBals.map(async (bal, idx) => {
                            if (bal.isZero()) {
                                cy.log("skipping user coin transfer - 0 bal");
                                return;
                            }
                            cy.log(`transferring ${bal} ${COIN_TYPES[idx]} coin(s) to admin`);
                            await reach.transfer(user, admin, bal, coinIds[idx]);
                            cy.log(`successfully transferred ${bal} ${COIN_TYPES[idx]} coin(s) to admin`);
                        }),
                    );

                    // withdraw coins from contract
                    await contract.a.controller_api.withdraw();

                    const [_, isPaused] = await contract.v.is_paused();

                    if (isPaused) cy.toggleCoinShopPause();

                    // check prices
                    const prices = await contract.v
                        .coin_prices()
                        .then(([__, prices]) => prices.map((price) => Number(reach.formatCurrency(price, 2))));

                    // if price changed change prices back to defaults
                    if (prices[0] !== 10 || prices[1] !== 20 || prices[2] !== 30) cy.priceChangeCoinShop([10, 20, 30]);

                    cy.log("finished cleaning coin shop");
                } catch (e) {
                    cy.log("coin shop clean failed", e);
                }
            }),
        );
}

function deployCoinShopContract() {
    return cy
        .destroyCoinShopContract()
        .log(`Running coin shop deploy on: algo-${REACH_NETWORK.toUpperCase()}`)
        .getAsaIds()
        .then(async (asaIds) => {
            try {
                const { reach, admin } = await makeReach();

                const deployerInterface: Partial<CoinShopDeployerInterface> = {
                    coin_asa_ids: asaIds.TestNet.coin,
                };

                const [id] = await deployContract(
                    admin,
                    CONTRACT_BACKENDS.coin_shop,
                    Participants.DEPLOYER,
                    deployerInterface,
                ).then(async (res) => {
                    cy.log("finishing deployment");

                    // add wait so contract can fully deploy before ending the script
                    await reach.wait(reach.bigNumberify(3));
                    return res;
                });

                return reach.bigNumberToNumber(id);
            } catch (e) {
                cy.log("deployment failed", e);
            }
        })
        .then((id) => {
            cy.log(`CONTRACT ID`, id);
            cy.updateContractId(id, ContractName.COIN_SHOP);
        });
}

function destroyCoinShopContract() {
    return cy
        .getContractId(ContractName.COIN_SHOP)
        .then(async (contractId) => {
            if (!contractId) {
                cy.log("no contract skipping cleanup");
                return;
            }

            // attach to contract as admin
            const { admin } = await makeReach();

            const contractHandle = await admin.contract<CoinShopHandle>(CONTRACT_BACKENDS.coin_shop, contractId);
            const contractExecution = attachContract(
                admin,
                CONTRACT_BACKENDS.coin_shop,
                contractId,
                Participants.ADMIN,
                {
                    log: () => {},
                },
            );

            cy.log("Terminating contract", contractId);

            // terminate contract
            try {
                await contractHandle.a.controller_api.terminate();
                // wait for contract execution to finish
                cy.log("Termination suceeded waiting for contract execution to finish");

                await contractExecution;
            } catch (e) {
                cy.log("contract termination error", e.message);
            } finally {
                cy.log("Coin Shop contract destruction complete");
            }
        })
        .updateContractId(null, ContractName.COIN_SHOP); // nullify coin shop contract
}

function purchaseCoin(coin: Coin) {
    const { purchaseButton } = TestIds.Ruins.interface;
    // stub prompt to give user mnemonic
    cy.stubPrompt(ACCOUNTS.TestNet.user.traveller.mnemonic);
    // get purchase container
    const { container } = TestIds.Ruins.interface[`${coin}Purchase`];
    return cy.byTestId(container).should("be.visible").byTestId(purchaseButton).click();
}

export {
    restockCoinShop,
    purchaseCoin,
    toggleCoinShopPause,
    cleanCoinShop,
    withdrawCoinShop,
    deployCoinShopContract,
    priceChangeCoinShop,
    destroyCoinShopContract,
};

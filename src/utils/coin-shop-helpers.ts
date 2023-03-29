import { ASA_IDS, CONTRACT_IDS } from "data";
import { ACCOUNTS, COIN_TYPES } from "../constants";
import CONTRACT_BACKENDS from "../contracts";
import { AsaId, CoinShopHandle, ReachAccount } from "../types";
import { createReachApi } from "./index";

const backend = CONTRACT_BACKENDS.coin_shop;

async function fundUser(algo: number, coins: [number, number, number]) {
    console.log("funding user", { algo, coins });
    const reach = createReachApi();
    // connect to admin + user accounts
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);
    // send algo to user
    await reach.transfer(admin, user, algo);
    console.log("succesfully transferred algo to user", algo);

    // opt into coin assets using user account
    await Promise.all(ASA_IDS.TestNet.coin.map((coinId) => user.acceptToken(coinId)));
    // send coins to user with admin account
    await Promise.all(ASA_IDS.TestNet.coin.map((coinId, idx) => reach.transfer(admin, user, coins[idx], coinId)));
    console.log("succesfully transferred coins to user", coins);
}

async function cleanCoinShopAssets() {
    console.log("cleaning coin shop assets");
    const reach = createReachApi();
    // connect to user and admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);

    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(backend, CONTRACT_IDS.TestNet.coin_shop);

    // withdraw coins from contract
    await contract.a.controller_api.withdraw();

    // send coins back to admin account
    await Promise.all(
        ASA_IDS.TestNet.coin.map(async (coinId, idx) => {
            const coinBal = await user.balanceOf(coinId);
            if (coinBal.isZero()) {
                console.log("skipping coin with zero bal");
                return;
            }
            console.log(`transferring ${coinBal} ${COIN_TYPES[idx]} coin(s) to admin`);
            await reach.transfer(user, admin, coinBal, coinId);
            console.log(`successfully transferred ${coinBal} ${COIN_TYPES[idx]} coin(s) to admin`);
        }),
    );
}

async function cleanAlgo() {
    console.log("cleaning algo");
    const reach = createReachApi();
    // connect to user and admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);

    // send user balance back to admin
    const bal = await user.balanceOf();
    const transferAmt = bal.sub(1000).sub(await reach.minimumBalanceOf(user));

    if (transferAmt.lte(0)) {
        console.log("skipping algo transfer");
        return;
    }

    console.log(`transferring ${transferAmt} algo to admin`);

    // subtract 1000 from the balance in order to have enough money for the transfer
    await reach.transfer(user, admin, transferAmt);
    console.log(`successfully transferred ${bal} algo to admin`);
}

async function restockCoinShop(supply: [number, number, number]) {
    console.log("restocking coin shop", { supply });
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(backend, CONTRACT_IDS.TestNet.coin_shop);
    // deposit coins to contract
    await contract.a.controller_api.restock(supply.map((amt) => reach.bigNumberify(amt)));
    console.log("successfully restocked coin shop", { supply });
}

async function toggleCoinShopPause() {
    console.log("toggling coin shop pause");
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(backend, CONTRACT_IDS.TestNet.coin_shop);
    // extract isPaused value from maybe and return it
    return contract.safeApis.controller_api.toggle_pause().then((maybePause) => {
        const [_, isPaused] = maybePause;
        console.log("successfully toggled coin shop pause", isPaused ? "on" : "off");
        return isPaused;
    });
}

async function cleanCoinShop() {
    await cleanCoinShopAssets();

    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(backend, CONTRACT_IDS.TestNet.coin_shop);

    const [_, isPaused] = await contract.v.is_paused();

    if (isPaused) await toggleCoinShopPause();
}

export { cleanAlgo, fundUser, cleanCoinShopAssets, restockCoinShop, toggleCoinShopPause, cleanCoinShop };

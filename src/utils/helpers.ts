import { ACCOUNTS, ASA_IDS, COIN_TYPES, CONTRACT_IDS } from "../constants";
import { CoinShopBackend } from "../contracts";
import { AsaId, CoinShopHandle, ReachAccount } from "../types";
import { createReachApi } from "./index";

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

async function cleanupCoinShopAssets(potrs: AsaId[]) {
    console.log("cleaning coin shop assets", { potrs });
    const reach = createReachApi();
    // connect to user and admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);

    // send coins back to admin account
    await Promise.all(
        ASA_IDS.TestNet.coin.map(async (coinId, idx) => {
            const coinBal = await user.balanceOf(coinId);
            console.log(`transferring ${coinBal} ${COIN_TYPES[idx]} coin(s) to admin`);
            await reach.transfer(user, admin, coinBal, coinId);
            console.log(`successfully transferred ${coinBal} ${COIN_TYPES[idx]} coin(s) to admin`);
        }),
    );

    // send any POTRs in user account back to admin
    await Promise.all(
        potrs.map(async (potrId) => {
            console.log(`transferring 1 ${potrId} to admiin`);
            await reach.transfer(user, admin, 1, potrId);
            console.log(`successfully transferred  1 ${potrId} to admin`);
        }),
    );
}

async function cleanupAlgo() {
    console.log("cleaning algo");
    const reach = createReachApi();
    // connect to user and admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);

    // send user balance back to admin
    const bal = await user.balanceOf();
    console.log(`transferring ${bal} algo to admin`);

    await reach.transfer(user, admin, await user.balanceOf());
    console.log(`successfully transferred ${bal} algo to admin`);
}

async function restockCoinShop(supply: [number, number, number]) {
    console.log("restocking coin shop", { supply });
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(CoinShopBackend, CONTRACT_IDS.TestNet.coin_shop);
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
    const contract = await admin.contract<CoinShopHandle>(CoinShopBackend, CONTRACT_IDS.TestNet.coin_shop);
    // extract isPaused value from maybe and return it
    return contract.safeApis.controller_api.toggle_pause().then((maybePause) => {
        const [_, isPaused] = maybePause;
        console.log("successfully toggled coin shop pause", isPaused ? "on" : "off");
        return isPaused;
    });
}

export { cleanupAlgo, fundUser, cleanupCoinShopAssets, restockCoinShop, toggleCoinShopPause };

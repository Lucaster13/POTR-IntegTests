import { ASA_IDS, CONTRACT_IDS } from "../constants";
import { CoinShopBackend } from "../contracts";
import { AsaId, Coins, CoinShopHandle, ReachAccount } from "../types";
import { ACCOUNTS, createReachApi, TestIds } from "./index";
import { HOME_PAGE } from "./urls";

function dismissLandingPage() {
    cy.visit(HOME_PAGE);
    cy.byTestId(TestIds.LandingPage.dismissButton).scrollIntoView().click();
    cy.byTestId(TestIds.LandingPage.container).should("not.exist");
}

async function giveCoinsToUser(bals: [number, number, number]) {
    const reach = createReachApi();
    // connect to admin + user accounts
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);
    // opt into coin assets using user account
    await Promise.all(ASA_IDS.TestNet.coin.map((coinId) => user.acceptToken(coinId)));
    // send coins to user with admin account
    await Promise.all(ASA_IDS.TestNet.coin.map((coinId, idx) => reach.transfer(admin, user, bals[idx], coinId)));
}

async function cleanupCoinShopAssets(algoSpent: number = 0, coinBals = [0, 0, 0], potrs: AsaId[]) {
    const reach = createReachApi();
    // connect to user and admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    const user: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.user.mnemonic);

    // send coins back to admin account
    await Promise.all(ASA_IDS.TestNet.coin.map((coinId, idx) => reach.transfer(user, admin, coinBals[idx], coinId)));

    // send any POTRs in user account back to admin
    await Promise.all(potrs.map((potrId) => reach.transfer(user, admin, 1, potrId)));

    // if algo spent, connect to admin and send balance back to user
    await reach.transfer(admin, user, algoSpent);
}

async function restockCoinShop(bals: [number, number, number]) {
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract: CoinShopHandle = await admin.contract(CoinShopBackend, CONTRACT_IDS.TestNet.coin_shop);
    // deposit coins to contract
    await contract.a.controller_api.restock(bals.map((bal) => reach.bigNumberify(bal)));
}

async function toggleCoinShopPause() {
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(CoinShopBackend, CONTRACT_IDS.TestNet.coin_shop);
    // deposit coins to contract
    await contract.a.controller_api.toggle_pause();
}

export { dismissLandingPage, giveCoinsToUser, cleanupCoinShopAssets, restockCoinShop, toggleCoinShopPause };

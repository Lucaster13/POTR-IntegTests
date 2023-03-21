import { CONTRACT_IDS } from "../constants";
import { CoinShopBackend } from "../contracts";
import { AsaId, Coins, CoinShopHandle, ReachAccount } from "../types";
import {
    ACCOUNTS,
    cleanupCoinShopAssets,
    createReachApi,
    giveCoinsToUser,
    restockCoinShop,
    TestIds,
    toggleCoinShopPause,
} from "../utils/index";
import { HOME_PAGE } from "../utils/urls";
import "./commands";

// HELPER TO SEARCH FOR ELEMENTS BY TEST-ID
Cypress.Commands.add("byTestId", { prevSubject: "optional" }, (subject, id) => {
    if (subject) {
        return cy.wrap(subject).find(`[data-testid="${id}"]`);
    }
    return cy.get(`[data-testid="${id}"]`);
});

// CONNECT WALLET
Cypress.Commands.add("connectWallet", () => {
    // stub window alert prompt to submit integ test acc credentials to sign in
    cy.window().then((win) => {
        cy.stub(win, "prompt").returns(ACCOUNTS.TestNet.user.addr);
    });

    cy.visit(HOME_PAGE);

    // find wallet connect button
    cy.byTestId(TestIds.HomePage.dashboard.signIn).find("button").click();

    // click mnemonic signer and then modal wallet connect button
    cy.byTestId(TestIds.WalletConnectModal.providerButton.mnemonic).click();
    cy.byTestId(TestIds.WalletConnectModal.connectButton).click();
});

// COIN SHOP COMMANDS
Cypress.Commands.add("toggleCoinShopPause", async () => {
    const reach = createReachApi();
    // connect admin account
    const admin: ReachAccount = await reach.newAccountFromMnemonic(ACCOUNTS.TestNet.admin.mnemonic);
    // connect to contract
    const contract = await admin.contract<CoinShopHandle>(CoinShopBackend, CONTRACT_IDS.TestNet.coin_shop);
    // deposit coins to contract
    await contract.a.controller_api.toggle_pause();
});
Cypress.Commands.add("restockCoinShop", restockCoinShop);
Cypress.Commands.add("giveCoinsToUser", giveCoinsToUser);
Cypress.Commands.add("cleanupCoinShopAssets", cleanupCoinShopAssets);

declare global {
    namespace Cypress {
        interface Chainable {
            byTestId: (value: string) => Chainable<JQuery<HTMLElement>>;
            connectWallet: () => void;
            toggleCoinShopPause: () => Promise<void>;
            restockCoinShop: (bals: [number, number, number]) => Promise<void>;
            giveCoinsToUser: (bals: [number, number, number]) => Promise<void>;
            cleanupCoinShopAssets: (
                algoSpent: number,
                coinBals: [number, number, number],
                potrs: AsaId[],
            ) => Promise<void>;
        }
    }
}

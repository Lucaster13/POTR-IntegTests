import { ACCOUNTS, TestIds, HOME_PAGE, FULL_SERVER_ENDPOINTS } from "../../constants";
import {
    cleanAlgo,
    cleanCoinShop,
    cleanCoinShopAssets,
    fundUser,
    restockCoinShop,
    toggleCoinShopPause,
} from "../../utils";
import "./commands";
import axios from "axios";

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
    return cy.byTestId(TestIds.WalletConnectModal.connectButton).click();
});

// COIN SHOP COMMANDS
Cypress.Commands.add("dismissLandingPage", () => {
    cy.visit(HOME_PAGE);
    cy.byTestId(TestIds.LandingPage.dismissButton).scrollIntoView().click();
    return cy.byTestId(TestIds.LandingPage.container).should("not.exist");
});

Cypress.Commands.add("toggleCoinShopPause", toggleCoinShopPause);
Cypress.Commands.add("fundUser", fundUser);
Cypress.Commands.add("cleanCoinShopAssets", cleanCoinShopAssets);
Cypress.Commands.add("restockCoinShop", restockCoinShop);
Cypress.Commands.add("cleanAlgo", cleanAlgo);
Cypress.Commands.add("cleanCoinShop", cleanCoinShop);

declare global {
    namespace Cypress {
        interface Chainable {
            byTestId: (value: string) => Chainable<JQuery<HTMLElement>>;
            connectWallet: () => Chainable<JQuery<HTMLElement>>;
            dismissLandingPage: () => Chainable<JQuery<HTMLElement>>;
            toggleCoinShopPause: typeof toggleCoinShopPause;
            restockCoinShop: typeof restockCoinShop;
            fundUser: typeof fundUser;
            cleanCoinShopAssets: typeof cleanCoinShopAssets;
            cleanAlgo: typeof cleanAlgo;
            cleanCoinShop: typeof cleanCoinShop;
        }
    }
}

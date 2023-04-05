import type Sinon from "cypress/types/sinon";
import { PAGES, TestIds } from "../../constants";
import {
    cleanAlgo,
    cleanCoinShop,
    cleanPotrs,
    connectWallet,
    deployCoinShopContract,
    destroyCoinShopContract,
    fundUser,
    getAsaIds,
    getContractId,
    getContractIds,
    getProtectorAssets,
    getTestUserBalance,
    priceChangeCoinShop,
    purchaseCoin,
    readFromJson,
    restockCoinShop,
    toggleCoinShopPause,
    updateContractId,
    withdrawCoinShop,
    writeToJson,
} from "../../utils";
import "./commands";

// HELPER TO SEARCH FOR ELEMENTS BY TEST-ID
Cypress.Commands.add("byTestId", { prevSubject: "optional" }, (subject, id) => {
    if (subject) {
        return cy.wrap(subject).find(`[data-testid="${id}"]`);
    }
    return cy.get(`[data-testid="${id}"]`);
});

// STUB PROMPT FOR CONNECTING WALLET
let promptStub: Sinon.SinonStub<any[], any> = null;

Cypress.Commands.add("stubPrompt", (retval) => {
    // stub window alert prompt to submit integ test acc credentials to sign in
    cy.window().then((win) => {
        if (promptStub) promptStub.restore();

        promptStub = cy.stub(win, "prompt").returns(retval);
        cy.log("stub retval", retval);
    });
});

// RESIZE TO DEFAULT
Cypress.Commands.add("resizeToDefault", () => cy.viewport("macbook-16"));

// COIN SHOP COMMANDS
Cypress.Commands.add("dismissLandingPage", () => {
    cy.visit(PAGES.Home);
    cy.reload();
    cy.visit(PAGES.Home);
    return cy.byTestId(TestIds.LandingPage.container).should("not.exist");
});

Cypress.Commands.add("connectWallet", connectWallet);

Cypress.Commands.add("toggleCoinShopPause", toggleCoinShopPause);
Cypress.Commands.add("fundUser", fundUser);
Cypress.Commands.add("restockCoinShop", restockCoinShop);
Cypress.Commands.add("withdrawCoinShop", withdrawCoinShop);
Cypress.Commands.add("priceChangeCoinShop", priceChangeCoinShop);
Cypress.Commands.add("cleanAlgo", cleanAlgo);
Cypress.Commands.add("cleanPotrs", cleanPotrs);
Cypress.Commands.add("cleanCoinShop", cleanCoinShop);
Cypress.Commands.add("getTestUserBalance", getTestUserBalance);
Cypress.Commands.add("getProtectorAssets", getProtectorAssets);
Cypress.Commands.add("deployCoinShopContract", deployCoinShopContract);
Cypress.Commands.add("destroyCoinShopContract", destroyCoinShopContract);
Cypress.Commands.add("updateContractId", updateContractId);
Cypress.Commands.add("getContractId", getContractId);
Cypress.Commands.add("getContractIds", getContractIds);
Cypress.Commands.add("getAsaIds", getAsaIds);
Cypress.Commands.add("readFromJson", readFromJson);
Cypress.Commands.add("writeToJson", writeToJson);
Cypress.Commands.add("purchaseCoin", purchaseCoin);

// silence http logs
before(() => {
    cy.intercept("/v2/**/*", { log: false });
    // deploy contract
    cy.destroyCoinShopContract();
    cy.deployCoinShopContract();
});
declare global {
    namespace Cypress {
        interface Chainable {
            silence: () => Chainable<JQuery<HTMLElement>>;
            stubPrompt: (retval: string) => Chainable<JQuery<HTMLElement>>;
            resizeToDefault: () => Chainable<JQuery<HTMLElement>>;
            byTestId: (value: string) => Chainable<JQuery<HTMLElement>>;
            connectWallet: typeof connectWallet;
            dismissLandingPage: () => Chainable<JQuery<HTMLElement>>;
            toggleCoinShopPause: typeof toggleCoinShopPause;
            restockCoinShop: typeof restockCoinShop;
            withdrawCoinShop: typeof withdrawCoinShop;
            priceChangeCoinShop: typeof priceChangeCoinShop;
            fundUser: typeof fundUser;
            cleanPotrs: typeof cleanPotrs;
            cleanAlgo: typeof cleanAlgo;
            cleanCoinShop: typeof cleanCoinShop;
            getTestUserBalance: typeof getTestUserBalance;
            getProtectorAssets: typeof getProtectorAssets;
            deployCoinShopContract: typeof deployCoinShopContract;
            destroyCoinShopContract: typeof destroyCoinShopContract;
            updateContractId: typeof updateContractId;
            getContractId: typeof getContractId;
            getContractIds: typeof getContractIds;
            getAsaIds: typeof getAsaIds;
            readFromJson: typeof readFromJson;
            writeToJson: typeof writeToJson;
            purchaseCoin: typeof purchaseCoin;
        }
    }
}

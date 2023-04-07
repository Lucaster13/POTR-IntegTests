import { ACCOUNTS } from "../constants";
import {
    byTestId,
    cleanAlgo,
    cleanCoinShop,
    cleanPotrs,
    connectWallet,
    deployCoinShopContract,
    destroyCoinShopContract,
    dismissLandingPage,
    fundUser,
    getAsaIds,
    getContractId,
    getContractIds,
    getProtectorAssets,
    getTestUserBalance,
    priceChangeCoinShop,
    purchaseCoin,
    readFromJson,
    resizeToDefault,
    restockCoinShop,
    silenceXhr,
    stubPrompt,
    toggleCoinShopPause,
    updateContractId,
    withdrawCoinShop,
    writeToJson,
    cleanUserCoins,
} from "../utils";

Cypress.Commands.add("byTestId", { prevSubject: "optional" }, byTestId);
Cypress.Commands.addAll({
    stubPrompt,
    resizeToDefault,
    dismissLandingPage,
    connectWallet,
    toggleCoinShopPause,
    fundUser,
    restockCoinShop,
    withdrawCoinShop,
    priceChangeCoinShop,
    cleanAlgo,
    cleanPotrs,
    cleanCoinShop,
    getTestUserBalance,
    getProtectorAssets,
    deployCoinShopContract,
    destroyCoinShopContract,
    updateContractId,
    getContractId,
    getContractIds,
    getAsaIds,
    readFromJson,
    writeToJson,
    purchaseCoin,
    cleanUserCoins,
    silenceXhr,
});

declare global {
    namespace Cypress {
        interface Chainable {
            byTestId: (ids: string | string[]) => ReturnType<typeof byTestId>;
            stubPrompt: typeof stubPrompt;
            resizeToDefault: typeof resizeToDefault;
            dismissLandingPage: typeof dismissLandingPage;
            connectWallet: typeof connectWallet;
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
            silenceXhr: typeof silenceXhr;
            cleanUserCoins: typeof cleanUserCoins;
        }
    }
}

// silence http logs
before(() => {
    cy.silenceXhr();
    // stub prompt to return traveller address
    cy.stubPrompt(ACCOUNTS.TestNet.user.traveller.addr);
    // fund user to help with any cleanup for what may have been left over from previous tests
    cy.fundUser(200, [0, 0, 0], []);
});

beforeEach(() => {
    cy.resizeToDefault();
});

after(() => {
    cy.silenceXhr();
    cy.cleanAlgo();
    cy.destroyCoinShopContract();
});

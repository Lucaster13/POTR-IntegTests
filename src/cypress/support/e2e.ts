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
    stubPrompt,
    toggleCoinShopPause,
    updateContractId,
    withdrawCoinShop,
    writeToJson,
} from "../../utils";
import "./commands";

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
});

declare global {
    namespace Cypress {
        interface Chainable {
            byTestId: (id: string) => ReturnType<typeof byTestId>;
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
        }
    }
}

// silence http logs
before(() => {
    cy.intercept("/v2/**/*", { log: false });
    // deploy contract
    cy.destroyCoinShopContract();
    cy.deployCoinShopContract();
});

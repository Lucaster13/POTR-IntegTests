import { ACCOUNTS, Coin, PAGES, RERENDER_TIMEOUT, TestIds } from "../constants";

describe("Page - Ruins", () => {
    const getRuinsInterfaceIds = () => TestIds.Ruins.interface;
    before(() => {
        // deploy contract
        cy.deployCoinShopContract();
    });

    beforeEach(() => {
        cy.silenceXhr();
        cy.dismissLandingPage();
        cy.visit(PAGES.Ruins);
    });

    it("should show wallet not connected screen if wallet isn't connected", () => {
        cy.byTestId(TestIds.Ruins.noWallet).should("be.visible");
    });
    it("should navigate to home page if home button clicked on no wallet screen", () => {
        cy.byTestId(TestIds.Ruins.noWallet).should("be.visible");
        cy.byTestId(TestIds.Ruins.noWallet).find(".btn-tertiary").should("be.visible").contains("go home").click();
        cy.url().should("contain", PAGES.Home);
    });
    it("should show proper loading screens and ruins page if user connects wallet on no wallet page", () => {
        cy.stubPrompt(ACCOUNTS.TestNet.user.traveller.addr);
        cy.byTestId(TestIds.Ruins.noWallet)
            .should("be.visible")
            .find(".btn-primary")
            .should("be.visible")
            .contains("Connect Wallet")
            .click();
        cy.byTestId(TestIds.WalletConnectModal.container).should("be.visible");
        cy.byTestId(TestIds.WalletConnectModal.providerButton.mnemonic).should("be.visible").click();
        cy.byTestId(TestIds.WalletConnectModal.connectButton).should("be.visible").click();
        cy.byTestId(TestIds.Ruins.arrivingAtTheRuins).should("be.visible");
        cy.byTestId(TestIds.Ruins.container).should("be.visible");
    });
    it("should show correct user balance in ruins status", () => {
        cy.connectWallet();
        cy.getTestUserBalance().then((bal) => {
            cy.byTestId(getRuinsInterfaceIds().status).contains(bal, { timeout: RERENDER_TIMEOUT });
        });
    });
    it("should show purchase containers with proper prices + supplies", () => {
        const { bronzePurchase, silverPurchase, goldPurchase, purchaseButton } = getRuinsInterfaceIds();

        // connect wallet and make sure purchase buttons are visible but disabled because supply is 0
        cy.connectWallet();
        cy.byTestId(bronzePurchase.price).should("be.visible").contains("10");
        cy.byTestId(silverPurchase.price).should("be.visible").contains("20");
        cy.byTestId(goldPurchase.price).should("be.visible").contains("30");

        cy.byTestId(bronzePurchase.supply).should("be.visible").contains("0");
        cy.byTestId(silverPurchase.supply).should("be.visible").contains("0");
        cy.byTestId(goldPurchase.supply).should("be.visible").contains("0");

        cy.byTestId(bronzePurchase.container).byTestId(purchaseButton).should("have.attr", "disabled");
        cy.byTestId(silverPurchase.container).byTestId(purchaseButton).should("have.attr", "disabled");
        cy.byTestId(goldPurchase.container).byTestId(purchaseButton).should("have.attr", "disabled");
    });

    it("should show price update properly", () => {
        const { bronzePurchase, silverPurchase, goldPurchase } = getRuinsInterfaceIds();

        // change coin shop prices and load ruins
        cy.connectWallet();
        cy.priceChangeCoinShop([1, 2, 3]);

        // check that prices are updated for coin purchase containers
        cy.byTestId(bronzePurchase.price).should("be.visible").contains("1", { timeout: RERENDER_TIMEOUT });
        cy.byTestId(silverPurchase.price).should("be.visible").contains("2");
        cy.byTestId(goldPurchase.price).should("be.visible").contains("3");

        cy.byTestId(TestIds.Ruins.history.event.container).contains("Price change", { timeout: RERENDER_TIMEOUT });
        cy.byTestId(TestIds.Ruins.history.event.container).then(($events) => {
            // check most recent event is price change event
            const newestEvent = $events.eq(0);
            cy.wrap(newestEvent).contains("Price change");
            cy.wrap(newestEvent).contains("Bronze: 1");
            cy.wrap(newestEvent).contains("Silver: 2");
            cy.wrap(newestEvent).contains("Gold: 3");
        });
    });
    it("should let user purchase all coins and show updates properly", () => {
        const { bronzePurchase, silverPurchase, goldPurchase } = getRuinsInterfaceIds();
        const { event } = TestIds.Ruins.history;
        // fund user, restock coin shop and connect wallet
        cy.connectWallet();
        cy.restockCoinShop([1, 1, 1]);

        // check containers exist and have correct supplies
        [bronzePurchase, silverPurchase, goldPurchase].forEach(({ container, supply }) => {
            cy.byTestId(container).should("be.visible");
            cy.byTestId(supply).contains("1");
        });

        // purchase each coin and wait for events to update
        cy.byTestId(event.container)
            .then(($events) => $events.length)
            // expected number of events is 1 + current number of events
            .then((numEvents) => {
                // purchase coin
                cy.purchaseCoin(Coin.BRONZE);

                // wait until expeectedNumberOfEvents is reached
                const newNumEvents = numEvents + 1;
                return cy
                    .byTestId(event.container)
                    .should("have.length", newNumEvents)
                    .then(() => newNumEvents);
            })
            .then((numEvents) => {
                // purchase coin
                cy.purchaseCoin(Coin.SILVER);

                // wait until expeectedNumberOfEvents is reached
                const newNumEvents = numEvents + 1;
                return cy
                    .byTestId(event.container)
                    .should("have.length", newNumEvents)
                    .then(() => newNumEvents);
            })
            .then((numEvents) => {
                // purchase coin
                cy.purchaseCoin(Coin.GOLD);

                // wait until expeectedNumberOfEvents is reached
                const newNumEvents = numEvents + 1;
                cy.byTestId(event.container).should("have.length", newNumEvents);
            });

        cy.byTestId(event.container).then(($events) => {
            // assert that all purchase events are properly shown
            cy.wrap($events.eq(0)).contains("Purchase");
            cy.wrap($events.eq(0)).contains("Gold");
            cy.wrap($events.eq(1)).contains("Purchase");
            cy.wrap($events.eq(1)).contains("Silver");
            cy.wrap($events.eq(2)).contains("Purchase");
            cy.wrap($events.eq(2)).contains("Bronze");
        });
    });

    it("should show isPaused toggle properly", () => {
        // pause coin shop and open ruins
        // cy.connectWallet();
        // cy.toggleCoinShopPause();
        // TODO
    });
    it("should show supply withdrawal properly", () => {
        const { bronzePurchase, silverPurchase, goldPurchase } = getRuinsInterfaceIds();

        // restock and then withdraw from coin shop
        cy.connectWallet();
        cy.withdrawCoinShop();

        cy.byTestId(bronzePurchase.supply).should("be.visible").contains("0", { timeout: RERENDER_TIMEOUT });
        cy.byTestId(silverPurchase.supply).should("be.visible").contains("0");
        cy.byTestId(goldPurchase.supply).should("be.visible").contains("0");

        // check fror withdrawal event
        cy.byTestId(TestIds.Ruins.history.event.container).contains("Withdraw");
        cy.byTestId(TestIds.Ruins.history.event.container).then(($events) => {
            // check most recent event is price change event
            cy.wrap($events.eq(0)).contains("Withdraw");
        });
    });
    it("should show restock properly", () => {
        const { bronzePurchase, silverPurchase, goldPurchase, purchaseButton } = getRuinsInterfaceIds();

        // restock the coin shop and make sure the supplies are updated
        cy.connectWallet();
        cy.restockCoinShop([1, 2, 3]);

        // check coin purchase containers
        cy.byTestId(bronzePurchase.supply).should("be.visible").contains("1");
        cy.byTestId(silverPurchase.supply).should("be.visible").contains("2");
        cy.byTestId(goldPurchase.supply).should("be.visible").contains("3");
        cy.byTestId(bronzePurchase.container).byTestId(purchaseButton).should("not.have.attr", "disabled");
        cy.byTestId(silverPurchase.container).byTestId(purchaseButton).should("not.have.attr", "disabled");
        cy.byTestId(goldPurchase.container).byTestId(purchaseButton).should("not.have.attr", "disabled");

        // check event emitted
        cy.byTestId(TestIds.Ruins.history.event.container).contains("Restock");
        // check fror withdrawal event
        cy.byTestId(TestIds.Ruins.history.event.container).then(($events) => {
            // check most recent event is restock event
            const newestEvent = $events.eq(0);
            cy.wrap(newestEvent).contains("Restock");
            cy.wrap(newestEvent).contains("Bronze: 1");
            cy.wrap(newestEvent).contains("Silver: 2");
            cy.wrap(newestEvent).contains("Gold: 3");
        });
    });
});

import { PAGES, TestIds } from "../constants";

describe("Page - Home", () => {
    beforeEach(() => {
        cy.silenceXhr();
        cy.dismissLandingPage();
    });

    describe("Feature - Dashboard", () => {
        before(() => {
            // deploy contract
            cy.deployCoinShopContract();
        });
        it("should show sign in page when user wallet is not connected", () => {
            cy.byTestId(TestIds.Home.dashboard.signIn).should("be.visible");
            cy.byTestId(TestIds.Home.dashboard.profile.container).should("not.exist");
        });
        it("should go to profile page when avatar is clicked", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.Home.dashboard.profile.avatar).should("be.visible").click();
            cy.url().should("contain", PAGES.Profile);
        });
        it("should show the correct ruins status based on coin shop isPaused flag", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.Home.dashboard.ruins.status).contains(/^active$/);
            cy.toggleCoinShopPause();
            cy.byTestId(TestIds.Home.dashboard.ruins.status).contains(/^inactive$/, { timeout: 6000 });
            cy.toggleCoinShopPause();
            cy.byTestId(TestIds.Home.dashboard.ruins.status).contains(/^active$/, { timeout: 6000 });
        });
        it("should display correct balances when restocking ruins", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.Home.dashboard.ruins.ruinsCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .contains("0x", { timeout: 5000 });
            cy.byTestId(TestIds.Home.dashboard.ruins.ruinsCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .then(($bals) => {
                    expect($bals.length).equal(3);
                    cy.wrap($bals.eq(0)).contains("0x");
                    cy.wrap($bals.eq(1)).contains("0x");
                    cy.wrap($bals.eq(2)).contains("0x");
                });

            cy.restockCoinShop([10, 20, 30]);
            cy.byTestId(TestIds.Home.dashboard.ruins.ruinsCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .then(($bals) => {
                    expect($bals.length).equal(3);
                    cy.wrap($bals.eq(0)).contains("10x");
                    cy.wrap($bals.eq(1)).contains("20x");
                    cy.wrap($bals.eq(2)).contains("30x");
                });

            // cleanup
            cy.withdrawCoinShop();
        });
        it("should display correct balances when user has coins in wallet", () => {
            // give user coins
            cy.fundUser(0, [1, 2, 3], []);
            cy.connectWallet();
            // check to ensure the correct balances are shown
            cy.byTestId(TestIds.Home.dashboard.ruins.userCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .then(($bals) => {
                    expect($bals.length).equal(3);
                    cy.wrap($bals.eq(0)).contains("1x");
                    cy.wrap($bals.eq(1)).contains("2x");
                    cy.wrap($bals.eq(2)).contains("3x");
                });

            // cleanup
            cy.cleanUserCoins();
        });
    });
    describe("Feature - ExploreContainers", () => {
        it("should render all containers properly", () => {
            Object.keys(TestIds.Home.exploreContainer).forEach((ec) => {
                cy.byTestId(TestIds.Home.exploreContainer[ec]).should("be.visible");
            });
            cy.byTestId(TestIds.Home.exploreContainer.battle).should("have.class", "cursor-not-allowed");
            cy.byTestId(TestIds.Home.exploreContainer.shop).should("have.class", "cursor-not-allowed");
        });
        it("should locked containers when wallet is not connected", () => {
            cy.byTestId(TestIds.Home.exploreContainer.ruins).should("have.class", "disabled");
            cy.byTestId(TestIds.Home.exploreContainer.summon).should("have.class", "disabled");
            cy.byTestId(TestIds.Home.exploreContainer.castle).should("not.have.class", "disabled");
        });
        it("should show all containers unlocked when wallet is connected", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.Home.dashboard.profile.container).should("be.visible");
            cy.byTestId(TestIds.Home.dashboard.ruins.container).should("be.visible");
            Object.keys(TestIds.Home.exploreContainer).forEach((ec) => {
                cy.byTestId(TestIds.Home.exploreContainer[ec]).should("be.visible");
                cy.byTestId(TestIds.Home.exploreContainer[ec]).should("not.have.class", "disabled");
            });
        });
        it("should each navigate to proper pages when clicked", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.Home.exploreContainer.ruins).click();
            cy.url().should("contain", PAGES.Ruins);
            cy.visit(PAGES.Home);
            cy.byTestId(TestIds.Home.exploreContainer.summon).click();
            cy.url().should("contain", PAGES.Summon);
            cy.visit(PAGES.Home);
            cy.byTestId(TestIds.Home.exploreContainer.castle).click();
            cy.url().should("contain", PAGES.Castle);
        });
    });
});

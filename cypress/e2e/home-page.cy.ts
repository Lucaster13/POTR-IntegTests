import { dismissLandingPage, TestIds, toggleCoinShopPause } from "../utils/index";
import { HOME_PAGE, PROFILE_PAGE } from "../utils/urls";

describe("Page - Home", () => {
    beforeEach(() => {
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.viewport("macbook-16");
        dismissLandingPage();
        cy.visit(HOME_PAGE);
    });

    describe("Feature - Dashboard", () => {
        it("should show sign in page when user wallet is not connected", () => {
            cy.byTestId(TestIds.HomePage.dashboard.signIn).should("be.visible");
            cy.byTestId(TestIds.HomePage.dashboard.profile.container).should("not.exist");
        });
        it("should go to profile page when avatar is clicked", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.HomePage.dashboard.profile.button).click();
            cy.url().should("equal", PROFILE_PAGE);
        });
        it.only("should show the correct ruins status based on coin shop isPaused flag", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.HomePage.dashboard.ruins.status).contains("active");
            cy.toggleCoinShopPause()
                .then(() => {
                    cy.byTestId(TestIds.HomePage.dashboard.ruins.status).contains("inactive");
                })
                .then(cy.toggleCoinShopPause)
                .then(() => {
                    cy.byTestId(TestIds.HomePage.dashboard.ruins.status).contains("active");
                });
        });
        it("should display correct balances when restocking ruins", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.HomePage.dashboard.ruins.ruinsCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .contains("0x", { timeout: 5000 });
            cy.byTestId(TestIds.HomePage.dashboard.ruins.ruinsCoinSupply)
                .byTestId(TestIds.CoinDisplay.coinBal)
                .then((bals) => {
                    expect(bals.length).equal(3);
                    cy.wrap(bals.eq(0)).contains("0x");
                    cy.wrap(bals.eq(1)).contains("0x");
                    cy.wrap(bals.eq(2)).contains("0x");
                });
        });
        it("should display correct balances when user has coins in wallet", () => {});
    });

    describe("Feature - ExploreContainers", () => {
        it("should render all containers properly", () => {
            Object.keys(TestIds.HomePage.exploreContainer).forEach((ec) => {
                cy.byTestId(TestIds.HomePage.exploreContainer[ec]).should("be.visible");
            });
            cy.byTestId(TestIds.HomePage.exploreContainer.battle).should("have.class", "cursor-not-allowed");
            cy.byTestId(TestIds.HomePage.exploreContainer.shop).should("have.class", "cursor-not-allowed");
        });
        it("should show proper containers, and locked ones when wallet is not connected", () => {
            cy.byTestId(TestIds.HomePage.exploreContainer.ruins).should("have.class", "disabled");
            cy.byTestId(TestIds.HomePage.exploreContainer.summon).should("have.class", "disabled");
        });
        it("should show all containers unlocked when wallet is connected", () => {
            cy.connectWallet();
            cy.byTestId(TestIds.HomePage.dashboard.profile.container).should("be.visible");
            cy.byTestId(TestIds.HomePage.dashboard.ruins.container).should("be.visible");
            Object.keys(TestIds.HomePage.exploreContainer).forEach((ec) => {
                cy.byTestId(TestIds.HomePage.exploreContainer[ec]).should("be.visible");
                cy.byTestId(TestIds.HomePage.exploreContainer[ec]).should("not.have.class", "disabled");
            });
        });
    });
});

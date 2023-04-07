import { PAGES, SOCIAL_MEDIA_URLS, Social, TestIds } from "../constants";
import { capitalize } from "../utils";

describe("Component - Nav", () => {
    beforeEach(() => {
        cy.silenceXhr();
        cy.byTestId(TestIds.Nav.container).should("not.exist");
        cy.dismissLandingPage();
    });
    it("should render properly when wallet is not connected and nav is closed (default)", () => {
        cy.byTestId(TestIds.Nav.container).should("be.visible");
        // make sure every button renders w/o text
        // should show title and toggle
        cy.byTestId(TestIds.Nav.title).should("not.be.visible");
        cy.byTestId(TestIds.Nav.toggle).should("be.visible");
        // should show wallet conenct button
        cy.byTestId(TestIds.Nav.walletButton).should("be.visible").should("not.have.text");
        cy.byTestId(TestIds.Nav.disconnectButton).should("not.exist");
        // should show all nav + social links
        Object.keys(TestIds.Nav.link).forEach((to) => {
            cy.byTestId(TestIds.Nav.link[to]).should("be.visible").should("not.have.text");
        });
        // should show locked nav links
        cy.byTestId(TestIds.Nav.link.ruins).should("have.class", "locked");
        cy.byTestId(TestIds.Nav.link.summon).should("have.class", "locked");
    });
    it("should render properly when wallet is not connected and nav is open", () => {
        cy.byTestId(TestIds.Nav.container).should("be.visible");
        // click toggle
        cy.byTestId(TestIds.Nav.toggle).click();
        // should show title and toggle
        cy.byTestId(TestIds.Nav.title).should("be.visible").contains("Protector");
        cy.byTestId(TestIds.Nav.toggle).should("be.visible");
        // should show wallet conenct button
        cy.byTestId(TestIds.Nav.walletButton).should("be.visible").contains("Connect Wallet");
        cy.byTestId(TestIds.Nav.disconnectButton).should("not.exist");
        // should show all nav + social links with text
        Object.keys(TestIds.Nav.link).forEach((to) => {
            cy.byTestId(TestIds.Nav.link[to]).contains(capitalize(to));
        });
        // should show locked nav links
        cy.byTestId(TestIds.Nav.link.ruins).should("have.class", "locked");
        cy.byTestId(TestIds.Nav.link.summon).should("have.class", "locked");
    });
    it("should connect w/ nav & render properly when wallet is connected and nav is closed (default)", () => {
        // connect walelt thru nav
        cy.connectWallet();
        // make sure every button renders w/o text
        // should show title and toggle
        cy.byTestId(TestIds.Nav.title).should("not.be.visible");
        cy.byTestId(TestIds.Nav.toggle).should("be.visible");
        // should show wallet conenct button
        cy.byTestId(TestIds.Nav.walletButton).should("not.exist");
        cy.byTestId(TestIds.Nav.disconnectButton).should("be.visible").should("not.have.text");
        // should show all nav + social links unlocked without text
        Object.keys(TestIds.Nav.link).forEach((to) => {
            cy.byTestId(TestIds.Nav.link[to])
                .should("be.visible")
                .should("not.have.text")
                .should("not.have.class", "locked");
        });
    });
    it("should connect thru nav & render properly when wallet is connected and nav is open", () => {
        // connect walelt thru nav
        cy.connectWallet();
        // click toggle
        cy.byTestId(TestIds.Nav.toggle).click();
        // should show title and toggle
        cy.byTestId(TestIds.Nav.title).should("be.visible").contains("Protector");
        cy.byTestId(TestIds.Nav.toggle).should("be.visible");
        // should show disconnect wallet button
        cy.byTestId(TestIds.Nav.disconnectButton).should("be.visible").contains("Disconnect");
        cy.byTestId(TestIds.Nav.walletButton).should("not.exist");
        // should show all nav + social links with text
        Object.keys(TestIds.Nav.link).forEach((to) => {
            cy.byTestId(TestIds.Nav.link[to]).contains(capitalize(to));
        });
        // should show all nav + social links unlocked with text
        Object.keys(TestIds.Nav.link).forEach((to) => {
            cy.byTestId(TestIds.Nav.link[to])
                .should("be.visible")
                .contains(capitalize(to))
                .should("not.have.class", "locked");
        });
    });
    it("should navigate to the proper pages when each link is clicked", () => {
        // test clicking nav links
        cy.connectWallet();
        cy.byTestId(TestIds.Nav.link.home).click();
        cy.url().should("contain", PAGES.Home);
        cy.byTestId(TestIds.Nav.link.ruins).click();
        cy.url().should("contain", PAGES.Ruins);
        cy.byTestId(TestIds.Nav.link.summon).click();
        cy.url().should("contain", PAGES.Summon);
        cy.byTestId(TestIds.Nav.link.castle).click();
        cy.url().should("contain", PAGES.Castle);

        // dont click socials
        cy.byTestId(TestIds.Nav.link.twitter)
            .should("have.attr", "target", "_blank")
            .should("have.attr", "href", SOCIAL_MEDIA_URLS[Social.TWITTER]);
        cy.byTestId(TestIds.Nav.link.discord)
            .should("have.attr", "target", "_blank")
            .should("have.attr", "href", SOCIAL_MEDIA_URLS[Social.DISCORD]);
    });
    it("should open the landing page when nav title is clicked", () => {
        // click toggle
        cy.byTestId(TestIds.Nav.toggle).click();
        // click nav title
        cy.byTestId(TestIds.Nav.title).click();
        // ensure landing page is visible
        cy.byTestId(TestIds.LandingPage.container).should("be.visible");
    });
});

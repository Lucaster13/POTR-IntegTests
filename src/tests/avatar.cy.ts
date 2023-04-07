import { ACCOUNTS, RERENDER_TIMEOUT, TestIds } from "../constants";

describe("Component - Avatar", () => {
    beforeEach(() => {
        cy.silenceXhr();
        cy.dismissLandingPage().then(() => cy.get(".avatar").should("not.exist"));
    });
    it("should only exist once wallet is connected", () => {
        cy.connectWallet();
        cy.byTestId(TestIds.Home.dashboard.profile.avatar).should("exist");
        cy.byTestId(TestIds.Nav.avatar).should("exist");
    });
    it("should show random potr in user wallet or show not owner avatar when connected", () => {
        const noviceAddr = ACCOUNTS.TestNet.user.novice.addr;

        cy.connectWallet(noviceAddr)
            .then(() => cy.getProtectorAssets(noviceAddr))
            .then((md) => {
                // get potr's url
                const potrUrls = md.map(({ url }) => url);
                cy.byTestId(TestIds.Home.dashboard.profile.avatar).should("exist").should("have.class", "novice");
                cy.byTestId(potrUrls).should("exist"); // test id is set to the url of the nft
            });
    });
    it("should show balance in wallet when connected", () => {
        cy.connectWallet();
        cy.getTestUserBalance().then((bal) => {
            cy.byTestId(TestIds.Home.dashboard.profile.avatar).contains(bal, { timeout: RERENDER_TIMEOUT });
        });
    });

    it("should show traveller avatar if user has no potrs", () => {
        cy.connectWallet();
        // traveller rank - 0 potrs;
        cy.get(".traveller", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
    it("should show novice avatar if user has 1-2 potrs", () => {
        const noviceAddr = ACCOUNTS.TestNet.user.novice.addr;
        cy.connectWallet(noviceAddr);

        // novice rank - [1-2] potrs
        cy.get(".novice", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
    it("should show experienced avatar if user has 3-6 potrs", () => {
        const experiencedAddr = ACCOUNTS.TestNet.user.experienced.addr;
        cy.connectWallet(experiencedAddr);

        // experienced rank - [3-6] potrs
        cy.get(".experienced", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
    it("should show elite avatar if user has 7-12 potrs", () => {
        const eliteAddr = ACCOUNTS.TestNet.user.elite.addr;
        cy.connectWallet(eliteAddr);

        // elite rank - [7-12] potrs
        cy.get(".elite", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
    it("should show legendary avatar if user has 13+ potrs", () => {
        const legendaryAddr = ACCOUNTS.TestNet.user.legendary.addr;
        cy.connectWallet(legendaryAddr);

        // legendary rank - 13+ potrs
        cy.get(".legendary", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
});

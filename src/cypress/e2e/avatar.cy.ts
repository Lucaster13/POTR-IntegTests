import { RERENDER_TIMEOUT, TestIds } from "../../constants";

describe("Component - Avatar", () => {
    beforeEach(() => {
        cy.fundUser(10, [0, 0, 0], [])
            .then(cy.cleanPotrs)
            .then(cy.resizeToDefault)
            .then(cy.dismissLandingPage)
            .then(() => cy.get(".avatar").should("not.exist"))
            .then(() => cy.connectWallet());
    });

    after(() => {
        cy.cleanPotrs().then(cy.cleanAlgo);
    });

    it("should only exist once wallet is connected", () => {
        cy.byTestId(TestIds.Home.dashboard.profile.avatar).should("exist");
        cy.byTestId(TestIds.Nav.avatar).should("exist");
    });
    it("should show random potr in user wallet or show not owner avatar when connected", () => {
        // give user potr
        cy.getAsaIds()
            .then((asaIds) => cy.fundUser(0, [0, 0, 0], asaIds.TestNet.potr.slice(0, 1)))
            .then(() => cy.reload())
            .then(cy.getProtectorAssets)
            .then((md) => {
                // get potr's url
                const potrUrl = md[0].url;
                cy.byTestId(TestIds.Home.dashboard.profile.avatar)
                    .should("exist")
                    .should("have.class", "novice")
                    .byTestId(potrUrl)
                    .should("exist"); // test id is set to the url of the nft
            });
    });
    it("should show balance in wallet when connected", () => {
        cy.getTestUserBalance().then((bal) => {
            cy.byTestId(TestIds.Home.dashboard.profile.avatar).contains(bal, { timeout: RERENDER_TIMEOUT });
        });
    });

    it("should show traveller avatar if user has no potrs", () => {
        // traveller rank - 0 potrs;
        cy.get(".traveller", { timeout: RERENDER_TIMEOUT }).should("exist");
    });
    it("should show novice avatar if user has no potrs", () => {
        // novice rank - [1-2] potrs
        cy.getAsaIds()
            .then((asaIds) => asaIds.TestNet.potr.slice(0, 2))
            .then((potrIds) => cy.fundUser(0, [0, 0, 0], potrIds))
            .then(cy.reload)
            .then(() => cy.get(".novice", { timeout: RERENDER_TIMEOUT }).should("exist"));
    });
    it("should show experienced avatar if user has no potrs", () => {
        // experienced rank - [3-6] potrs
        cy.getAsaIds()
            .then((asaIds) => asaIds.TestNet.potr.slice(0, 6))
            .then((potrIds) => cy.fundUser(0, [0, 0, 0], potrIds))
            .then(cy.reload)
            .then(() => cy.get(".experienced", { timeout: RERENDER_TIMEOUT }).should("exist"));
    });
    it("should show elite avatar if user has no potrs", () => {
        // elite rank - [7-12] potrs
        cy.getAsaIds()
            .then((asaIds) => asaIds.TestNet.potr.slice(0, 12))
            .then((potrIds) => cy.fundUser(0, [0, 0, 0], potrIds))
            .then(cy.reload)
            .then(() => cy.get(".elite", { timeout: RERENDER_TIMEOUT }).should("exist"));
    });
    it("should show legendary avatar if user has no potrs", () => {
        // legendary rank - 13+ potrs
        cy.getAsaIds()
            .then((asaIds) => asaIds.TestNet.potr.slice(0, 13))
            .then((potrIds) => cy.fundUser(0, [0, 0, 0], potrIds))
            .then(cy.reload)
            .then(() => cy.get(".legendary", { timeout: RERENDER_TIMEOUT }).should("exist"));
    });
});

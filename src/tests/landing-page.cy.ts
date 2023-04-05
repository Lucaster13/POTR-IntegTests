import { PAGES, TestIds } from "../constants";

describe("Page - Landing", () => {
    beforeEach(() => {
        cy.viewport("macbook-16");
    });
    it("should show landing page when is first time visitor", () => {
        cy.visit(PAGES.Home);
        cy.byTestId(TestIds.LandingPage.container).should("be.visible");
    });

    it("should dismiss landing page when user clicks enter kingdom", () => {
        cy.dismissLandingPage();
    });

    it("should not show landing page on reload after user has already clicked enter kingdom", () => {
        cy.dismissLandingPage();
        cy.reload();
        cy.byTestId(TestIds.LandingPage.container).should("not.exist");
    });

    it("should open landing page when user clicks sidebar title", () => {
        cy.dismissLandingPage();
        cy.byTestId(TestIds.Nav.toggle).click();
        cy.byTestId(TestIds.Nav.title).click();
        cy.byTestId(TestIds.LandingPage.container).should("be.visible");
    });
});

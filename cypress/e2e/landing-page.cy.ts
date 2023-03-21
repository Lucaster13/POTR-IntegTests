import { dismissLandingPage, TestIds } from "../utils/index";
import { HOME_PAGE } from "../utils/urls";

describe("Page - Landing", () => {
    beforeEach(() => {
        cy.viewport("macbook-16");
    });
    it("should show landing page when is first time visitor", () => {
        cy.visit(HOME_PAGE);
        cy.byTestId(TestIds.LandingPage.container).should("be.visible");
    });

    it("should dismiss landing page when user clicks enter kingdom", () => {
        dismissLandingPage();
    });

    it("should not show landing page on reload after user has already clicked enter kingdom", () => {
        dismissLandingPage();
        cy.reload();
        cy.byTestId(TestIds.LandingPage.container).should("not.exist");
    });

    it("should open landing page when user clicks sidebar title", () => {
        dismissLandingPage();
        cy.byTestId(TestIds.Nav.toggle).click();
        cy.byTestId(TestIds.Nav.title).click();
        cy.byTestId(TestIds.LandingPage.container).should("be.visible");
    });
});

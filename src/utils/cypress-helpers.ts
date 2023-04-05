import type Sinon from "cypress/types/sinon";
import { TestIds, PAGES } from "../constants";

// HELPER TO SEARCH FOR ELEMENTS BY TEST-ID
function byTestId(subject, id: string) {
    if (subject) {
        return cy.wrap(subject).find(`[data-testid="${id}"]`);
    }
    return cy.get(`[data-testid="${id}"]`);
}

// STUB PROMPT FOR CONNECTING WALLET / SIGNING TXNS
let promptStub: Sinon.SinonStub<any[], any> = null;

function stubPrompt(retval: string) {
    // stub window alert prompt to submit integ test acc credentials to sign in
    return cy.window().then((win) => {
        if (promptStub) promptStub.restore();

        promptStub = cy.stub(win, "prompt").returns(retval);
        cy.log("stub retval", retval);
    });
}

// RESIZE TO DEFAULT
function resizeToDefault() {
    return cy.viewport("macbook-16");
}

// COIN SHOP COMMANDS
function dismissLandingPage() {
    cy.visit(PAGES.Home);
    cy.reload();
    cy.visit(PAGES.Home);
    return cy.byTestId(TestIds.LandingPage.container).should("not.exist");
}

export { resizeToDefault, dismissLandingPage, stubPrompt, byTestId };

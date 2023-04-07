import type Sinon from "cypress/types/sinon";
import { TestIds, PAGES } from "../constants";

// HELPER TO SEARCH FOR ELEMENTS BY TEST-ID
function byTestId(subject, ids: string | string[]) {
    const selector = Array.isArray(ids)
        ? ids
              .reduce((selector, id) => `${selector} [data-testid="${id}"]`, "")
              .trim()
              .replace(" ", ",") // need to comma seperate
        : `[data-testid="${ids}"]`;

    if (subject) {
        return cy.wrap(subject).find(selector);
    }

    return cy.get(selector);
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

function silenceXhr() {
    return cy.intercept("v2/**/*", { log: false });
}

export { resizeToDefault, dismissLandingPage, stubPrompt, byTestId, silenceXhr };

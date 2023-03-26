/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// // -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// // -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// // -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("", { prevSubject: "optional" }, (subject, id) => {
//     if (subject) {
//         return cy.wrap(subject).find(`[data-testid="${id}"]`);
//     }
//     return cy.get(`[data-testid="${id}"]`);
// });

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             byTestId: (value: string) => Chainable<JQuery<HTMLElement>>;
//         }
//     }
// }

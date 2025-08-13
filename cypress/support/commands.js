// ***********************************************
// This example commands.js shows you how to
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
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('fillInput',(locator, value) => {
//  cy.get(locator).clear().type(value);
//  cy.get("button[type='submit']").should("be.visible").click();
// });

Cypress.Commands.add('login', (username, password) => { 

    cy.get('#username').type(username)
    cy.get('#password').type(password)
     cy.get('#login > .btn') .click()   //used another commad
     cy.get('b').should('have.text','You logged into a secure area!')  
 })

Cypress.Commands.add('fillInput',{prevSubject:'element'} ,(locator, value) => {
 cy.wrap(locator).type(value);
 cy.get("button[type='submit']").should("be.visible").click();
});
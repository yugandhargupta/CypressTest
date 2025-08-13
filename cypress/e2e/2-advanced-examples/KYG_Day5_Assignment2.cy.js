
describe('My Test Suite', () => { // Groups related tests

    it('(use prevSubject', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.get("#username").fillInput("#username","practice");
    cy.get("#password").fillInput("#password","SuperSecretPassword!");
    cy.get('[type="submit"]').click();
    cy.log("Logged in Succesfully");
    
      
  })
    

    });


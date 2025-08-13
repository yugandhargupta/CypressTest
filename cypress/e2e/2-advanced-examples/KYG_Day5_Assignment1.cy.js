
describe('Login Command', () => { 

    it('logging in', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.fillInput("input#username","practice");
    cy.fillInput("input#password","SuperSecretPassword!");
    cy.get('[type="submit"]').click();
    cy.log("Logged in Succesfully");
    
    cy.get('[href="/logout"]').click({force:true});
    
  })
    

    });


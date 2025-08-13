
describe('Login Validation', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/login") 
  
})
  
  it('Login with valid username and Password', () => {
    
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('b').should('have.text','You logged into a secure area!')
    cy.get("a[href='/logout']").should('be.visible')

  });

  it('Login with invalid username', () => {
    cy.get('#username').type('Notcorrect');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').children().should('have.text','Your username is invalid!')
  });

  it('Login with invalid password', () => {
    
    cy.get('#username').type('practice');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').children().should('have.text','Your password is invalid!')
  });

});

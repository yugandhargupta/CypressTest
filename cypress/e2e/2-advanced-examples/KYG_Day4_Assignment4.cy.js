
describe('Assertions vlaidation', () => {
  
  it('Assertions validation', () => {
    cy.visit('https://practice.expandtesting.com/assertions'); 

    cy.get('#main-navbar > .btn').should('exist')
    cy.get(':nth-child(6) > .nav-link').should('have.text','About')
    cy.get('.text-center > .btn').should('be.visible')
    
 })

 })

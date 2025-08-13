
describe('Checkbox validation', () => {
  
  it('Checkbox validation', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes'); 

    cy.get('#checkbox1').check()
    cy.log("checkbox1 checked")
    cy.get('#checkbox2').uncheck()
    cy.log("checkbox2 Un-checked")
    
 })

 })

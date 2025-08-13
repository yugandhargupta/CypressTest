
describe('Register', () => {

      beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/Register") 
  
})

  it('Registration', () => {
    cy.get('#username').type('Test2');
    cy.get('#password').type('test@123');
    cy.get('#confirmPassword').type('test@123');
    cy.get('button[type="submit"]').click();
    cy.get('#flash > b').should('have.text','Successfully registered, you can log in now.')
 });

  it('password Mismatch', () => {
    cy.get('#username').type('PRACt');
    cy.get('#password').type('test@123');
    cy.get('#confirmPassword').type('test@12');
    cy.get('button[type="submit"]').click();
    cy.get('#flash > b').should('have.text','Passwords do not match') 
  });

  it('Blank fields', () => {

    cy.get('button[type="submit"]').click();
    cy.get('#flash > b').should('have.text','All fields are required') 
  });

});

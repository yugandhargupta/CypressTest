class Loginpage{

    usernameLocator ="input#username";
    passwordLocator ="input#password";
    loginButton = "button[type='submit']";
    loginUrl(){
        cy.visit('/login')
        
    }
 loginAction(username, password)    
  {
    cy.get(this.usernameLocator).type(username)
    cy.get(this.passwordLocator).type(password)
     cy.get('#login > .btn') .click()   //used another commad
     //cy.get('b').should('have.text','You logged into a secure area!')
     }
}

export default new Loginpage();

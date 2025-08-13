class SecurePage {
    usernameLocator = "input#username";
    passwordLocator = "input#password";
    loginButton = "button[type='submit']";
    logoutButton = ".icon-2x";

    secureUrl() {
        cy.visit('/secure');
    }

    loginAction(username, password) {
        cy.get(this.usernameLocator).type(username);
        cy.get(this.passwordLocator).type(password);
        cy.get(this.loginButton).click();
        cy.contains('You logged into a secure area!').should('be.visible');
    }

    logoutClick() {
        cy.get(this.logoutButton).click();
    }
}

export default new SecurePage();

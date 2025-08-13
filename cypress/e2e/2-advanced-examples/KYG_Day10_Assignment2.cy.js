import Securepage from "../../Pages/Securepage";

describe('Page Object Model', () => {
    it("Secure Page Login and Logout", () => {
        Securepage.secureUrl();
        Securepage.loginAction("practice", "SuperSecretPassword!");
        Securepage.logoutClick();

     }) ;  
        
    });


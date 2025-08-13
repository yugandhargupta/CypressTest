import Loginpage from "../../Pages/Loginpage";
describe('Page Object Model', ()=>{
    it("Login Page valid Credentials",()=>{
        Loginpage.loginUrl();
        //Valid Credentials
        Loginpage.loginAction("practice", "SuperSecretPassword!")
    

    })

    it("Login Page Invalid Credentials",()=>{
        Loginpage.loginUrl();
        //In Valid Credentials
        Loginpage.loginAction("practiceinvalid", "SuperSecretPassword")

    })


})
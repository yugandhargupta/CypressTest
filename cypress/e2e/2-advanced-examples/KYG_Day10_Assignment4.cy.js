import Dropdownpage from "../../Pages/Dropdownpage";
describe('Page Object Model', () => {
    it("Dropdownpage functionality", () => {
        
   Dropdownpage.DropdownPageUrl()
   Dropdownpage.selectOption('IN')
   Dropdownpage.getSelectedOption('IN')
   Dropdownpage.selectOption('ID')
   Dropdownpage.getSelectedOption('ID')
        

     }) ;  
        
    });


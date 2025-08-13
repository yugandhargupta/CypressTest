class Dropdownpage{

    countries="select#country";
    dropDown="select#dropdown"

    DropdownPageUrl(){
        cy.visit('/dropdown')   
    }

     selectOption(value)  { 
          cy.get('#country').select(value) 
          }

     getSelectedOption(option)  { 
         
        cy.get('#country').find('option:selected') .should('have.value', option)
        cy.get('#country').find('option:selected').should('contain.value', option);
 
          }


    
    }
 export default new Dropdownpage();
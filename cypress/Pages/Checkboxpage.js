class Checkboxpage{

    checkBox1="#checkbox1";
    checkBox2="#checkbox2"

    chekboxUrl(){
        cy.visit('/checkboxes')   }

     checkFirstBox() { 
         return   cy.get(this.checkBox1).check();  
          }

     uncheckSecondBox() { 
         return  cy.get(this.checkBox2).uncheck()
        }
     validateCheckboxCondition(){

     this. checkFirstBox() .should('be.checked')
     this. uncheckSecondBox().should('not.be.checked')

     }

    
    }
 

  


export default new Checkboxpage();
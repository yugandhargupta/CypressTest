describe('Working with Checkboxes, Dropdowns, Radio Buttons', () => { 

    it('Radio Buttons', () => {
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.contains('BLUE').prev().check().should('be.checked');   
    })

        it('Dropdown control', () => {
        cy.visit('https://practice.expandtesting.com/dropdown');
        cy.get('#country').then((val)=>{
            
        }).select('India').should('have.value','IN')
    })

        it('checkboxes', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes');
        cy.contains('Checkbox 1').prev().check().should('be.checked');   
        cy.contains('Checkbox 2').prev().uncheck().should('not.be.checked');  
    })


})

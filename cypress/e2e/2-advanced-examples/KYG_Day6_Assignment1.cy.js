describe('Fixtures', () => { // Groups related tests

    it('Fixtures through logging in', () => {
        cy.fixture('login').then((credentials)=>{
        cy.visit('https://practice.expandtesting.com/login');
        cy.get("#username").fillInput("#username",credentials.username);
        cy.get("#password").fillInput("#password",credentials.password);
        

    })

});

    it.only('Form filling', () => {
        cy.fixture('form').then((value)=>{
        cy.visit('https://practice.expandtesting.com/form-validation');
        
        cy.get('#validationCustom01').type(value.contactname);
        cy.get(':nth-child(2) > #validationCustom05').type(value.contactnumber);
        cy.get(':nth-child(3) > #validationCustom05').type(value.pickupdate).should('have.value', value.pickupdate);

//  cy.get(':nth-child(3) > #validationCustom05').invoke('val', value.pickupdate) // make sure this is YYYY-MM-DD
//     .trigger('change');

//   cy.get(':nth-child(3) > #validationCustom05').should('have.value', value.pickupdate);
//cy.get('select#country').select('IN').should('have.value', 'IN');       // This  u can use..this he shared in the group teams chat        
cy.get('#validationCustom04').then((val)=>{
        }).select(value.payment).should('have.value',value.payment)
       

    
})
    

    })  

    })
    

  
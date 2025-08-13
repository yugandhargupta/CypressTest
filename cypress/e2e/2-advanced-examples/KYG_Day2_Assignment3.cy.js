describe('Sum of numbers in array',()=>{

    it('Function',()=>{
    
        function even(num1){

            return num1%2 ==0;
            }
    function odd(num1){

            return num1%2 !==0;
            }

            cy.log(even(6));
            cy.log(odd(7));
})
    

})
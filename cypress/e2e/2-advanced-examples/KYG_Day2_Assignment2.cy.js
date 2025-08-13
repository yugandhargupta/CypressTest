describe('Sum of numbers in array',()=>{

    it('Sum of numbers in array',()=>{

    const arr=[2,4,6,8,10];
    let sum=0 ;
    for(let i=0; i<arr.length; i++)
        {
            sum += arr[i];
        }

        cy.log(sum);
})
    
})
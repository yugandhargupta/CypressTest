describe('Working with Scrolling, Hover, Drag & Drop', () => { 

    it('Scroll bar', () => {
        cy.visit('https://practice.expandtesting.com/scrollbars');
        cy.get('#hidingButton').scrollIntoView().should('be.visible').click()
     })

        it.only('Hover', () => {
        cy.visit('https://practice.expandtesting.com/tooltips');
     //   cy.get('#btn1.hidden').invoke('show').click()
        cy.get('#btn1').trigger('mouseover').should('have.text','Tooltip on top')
        cy.get('#btn5').trigger('mouseover').should('have.text','Tooltip with HTML')
        cy.get('#btn3').trigger('mouseover').should('have.text','Tooltip on bottom')
        cy.get('#btn2').trigger('mouseover').should('have.text','Tooltip on end')
        cy.get('#btn4').trigger('mouseover').should('have.text','Tooltip on start')
       
     })



    })

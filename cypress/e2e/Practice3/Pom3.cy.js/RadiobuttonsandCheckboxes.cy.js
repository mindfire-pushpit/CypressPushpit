describe('My Test Suite',()=>{

    it('My Test 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').should('be.visible')
        cy.get('input[value="radio1"]').check()
        cy.get('input[value="radio2"]').should('not.be.checked')
        cy.get('input[value="radio1"]').should('be.checked')
        // cy.get('input[value="radio1"]').uncheck()

        // cy.get('[type="checkbox"]').click({multiple:true})

        cy.get('[type="checkbox"]').check()
        
        cy.get('[type="checkbox"]').eq(2).should('be.checked')
        cy.get('[type="checkbox"]').eq(2).uncheck().should('not.be.checked')
    

        //mouseHover

        cy.get('a[href="#top"]').should('not.be.visible')

        // cy.get('button[id="mousehover"]').invoke('show')

        cy.get('div[class="mouse-hover-content"]').invoke('show')

        // cy.get('button[id="mousehover"]').realHover();
        cy.get('a[href="#top"]').should('be.visible')
    })
}
)
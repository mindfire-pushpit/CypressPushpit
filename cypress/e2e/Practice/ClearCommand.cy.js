describe('Clear a input box', ()=>{
    it('Type Username And Password',()=>{
        cy.visit('https://www.programsbuzz.com/user/login')
        cy.get('form').within(()=>{
            cy.xpath("//input[@id='edit-name']").type('Rataalada').clear()
            cy.get('#edit-pass').clear().type('bat')             
        })
    })
})
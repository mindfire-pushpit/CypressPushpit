describe('My Test Suite',()=>{
    it('Handling Links',()=>{

        cy.visit('https://demo.opencart.com/')

        cy.clickLink("Apple Cinema 30")


    })
})
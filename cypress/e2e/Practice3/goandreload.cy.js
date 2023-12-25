describe('My test suite',()=>{
    it('Test 1',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.title().should('match',/Your Store/i)

        cy.get(':nth-child(7) > .nav-link').contains('Cameras').click({force:true});
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        cy.go('back');
        cy.title().should('match',/Your Store/i)

        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go(-1)
        cy.title().should('match',/Your Store/i)

        







    })
})
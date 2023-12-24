describe("Google suite", ()=>{
    it('Capture screenshots and Videos',()=>{

        cy.visit('https://www.google.com/');
        cy.get('textarea[name="q"]').type("Iphone 14");
        // cy.screenshot('Homepage')
        // cy.url().should('include','fipkart');


    })
})
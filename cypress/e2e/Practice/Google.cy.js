describe("Automating Google", ()=>{
    it('Search Mobile',()=>{

        cy.visit('https://www.google.com/');
        cy.get('textarea[name="q"]').type("Iphone 14");


    })
})
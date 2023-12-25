describe("TextBox",()=>{
    it("Filling in textbox",()=>{
        
        cy.visit("https://demoqa.com/text-box")
        // cy.get("//span[text()='Text Box']").click()
        cy.once('uncaught:exception', () => false);
        cy.get("input[id='userName']").click()
        cy.get("input[id='userName']").type("Pushpit")
        cy.get("input[id='userEmail']").click()
        cy.get("input[id='userEmail']").type("pushpit12@gmail.com")
        cy.get("textarea[id='currentAddress']").type("Nazai Bazar, Lalitpur")
        cy.get("textarea[id='permanentAddress']").type("Noida")

    })
    it.skip("Flipkart",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.title().should('include',"Flipkart")

        cy.get("input[title*='Search']").type("Washing Machine")
        cy.type('{enter}')

    })

    it.only('Google Test',()=>{
        cy.visit('https://www.google.com/');
        cy.get('textarea[name="q"]').click().type('Flipkart');
    })
})
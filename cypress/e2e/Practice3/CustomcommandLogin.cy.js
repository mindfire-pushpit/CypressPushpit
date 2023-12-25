describe('My Test Suite',()=>{
    it('My Test 1',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.Login('Admin','admin123');  
    })
})
describe('Local Storage',()=>{
    it('Local Storage',()=>{
    cy.visit('http://www.autopract.com/#/home/fashion')

    cy.get("button[aria-label='Close'] ")
        .click()
        .then(() => {
            // Count no of localStorge items
            cy.log(localStorage.length)
            
            // Print Key name in logs
            for (var i = 0; i < localStorage.length; i++) {
                cy.log(localStorage.key(i))
            }
    })
    })
})
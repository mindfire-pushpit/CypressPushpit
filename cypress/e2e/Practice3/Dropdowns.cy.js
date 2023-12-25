describe('Automating Dropdowns',()=>{

    it.skip('Automation Dropdown with select tag',()=>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.once('uncaught:exception', () => false)     
        cy.get('select[id*="address_country"]')
        .select('Italy')
        .should('have.value','Italy');

    })

    it.skip('Automation Dropdown without select tag',()=>{

        cy.visit('https://www.dummyticket.com/')   
        cy.get('a[href*="dummy-ticket-for-visa-application/"][class*="first"]').click()
        cy.get('span[id*="billing_country"]').click();
        cy.get('input[class*="search__field"]').type('Italy').type('{enter}')
        cy.get('li[class*="results__option"]').contains('Italy').click();
        cy.get('span[id*="billing_country"]').should('have.text','Italy');

    })

    it('Autosuggest Dropdown',()=>{

        cy.visit('https://www.wikipedia.org/')   
        cy.get('input[id="searchInput"]').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click();

    })

    it('Dynamic Dropdowns',()=>{

        cy.visit('https://www.google.com/')   
        cy.get('textarea[name="q"]').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Police').click();

    })





})
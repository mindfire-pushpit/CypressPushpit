describe('Mouse Hover', ()=>{
    it('Mouse Hover using Query',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('div[class="mouse-hover-content"]').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','#top');
       
    })
})

// MouseHover events are not supported in cypress use Query of force action to click any hidden element
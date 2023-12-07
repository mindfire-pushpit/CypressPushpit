describe('Mouse Hover', ()=>{
    it('Mouse Hover using Query',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('button[id="mousehover"]').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','#top');
       
    })
})
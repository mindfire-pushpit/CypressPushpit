describe('Handling Iframes', ()=>{
    it('Iframes Apporach 1',()=>{
                     
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('iframe[id="mce_0_ifr"]')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('PushpitAgarwal {cmd+a}');

        cy.get('[aria-label="Bold"]').click();
        cy.wait(5000)
    })
})
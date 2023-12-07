import 'cypress-iframe'
describe('Handling Iframes', ()=>{
    it.skip('Iframes Apporach 1',()=>{
                     
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('iframe[id="mce_0_ifr"]')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('PushpitAgarwal {cmd+a}');

        cy.get('[aria-label="Bold"]').click();
        cy.wait(5000)
    })

    // By using custom Command
    it('Iframes Apporach 2',()=>{
                     
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('iframe[id="mce_0_ifr"]')
        .clear()
        .type('PushpitAgarwal {cmd+a}');

        cy.get('[aria-label="Bold"]').click();
        cy.wait(5000)
    })

    it('Iframes Apporach 3- Using Cypress Iframe Plugin',()=>{
                     
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('iframe[id="mce_0_ifr"]'); //Load the frame

        cy.iframe('iframe[id="mce_0_ifr"]').clear().type("Pushpit Agarwal");
    })

    it.only("test iframe using plugin", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
        cy.frameLoaded('#courses-iframe') //load the frame
        cy.iframe().find('a[href="mentorship"]').first().click();
        cy.iframe().find('div[class="inner-box"] h1').invoke('text').should('match', 'Mentorship')
      })
})
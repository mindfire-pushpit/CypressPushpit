
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

    it("test iframe using plugin", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
        cy.frameLoaded('#courses-iframe') //load the frame
        cy.iframe().find('a[href="mentorship"]').first().click();
      })

      it('Test 3',()=>{

        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.on('uncaught:exception',()=>false)
        cy.wait(5000)
        const iframe =  cy.get('iframe[name="SingleFrame"]').its('0.contentDocument.body').then(cy.wrap)

        iframe.find('input[type="text"]').type('Pushpit');
      })

    //   it.only('Nested Iframe',()=>{

    //     cy.visit('https://demo.automationtesting.in/Frames.html')
    //     cy.on('uncaught:exception',()=>false)
    //     cy.wait(5000)
    //     cy.frameLoaded('iframe[src="MultipleFrames.html"]'); 
    //     cy.iframe('iframe[src="MultipleFrames.html"]').then((parentIframe )=> {
    //     parentIframe.find('div[class="iframe-container"] iframe[src="SingleFrame.html"]').iframe().then((nestedIframe) => {
    //               nestedIframe.find('input[type="text"]').last().click();
    
    //  })


    //   })
    // })
})
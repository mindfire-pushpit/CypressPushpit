

describe('My Test Suite',()=>{
    it('Drag and drop',()=>{

        // cy.visit('https://jqueryui.com/droppable/');
        // cy.frameLoaded('iframe[class="demo-frame"]');
        // cy.iframe().find('div[id="draggable"]').as('drag')
        // cy.iframe().find('div[id="droppable"]').as('drop');
        // // cy.get('@drag').drag('@drop', {force:true})

        // cy.get('@drag').realMouseDown();
        // cy.get('@drop').realMouseUp();

        // cy.get('@drag').realMouseWheel({deltaX:100, deltaY:300})

        // cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')

        // cy.once('uncaught:exception',()=>false)

        // cy.get('img[alt="Planning the ascent"]').drag('div[id="trash"]')

        // cy.visit('https://www.globalsqa.com/demo-site/datepicker/')
        // cy.on('uncaught:exception',()=>false)
        // cy.frameLoaded('iframe[class="demo-frame lazyloaded"]').eq(0)
        // cy.iframe().find('input[id="datepicker"]',{timeout:30000}).click();
        // cy.iframe().find('a[href="#"]').contains('21').click();

        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.on('uncaught:exception',()=>false)
        cy.wait(5000)
        cy.get('img[id="angular"]').drag('div[id="droparea"]')

        cy.visit('https://demo.automationtesting.in/Dynamic.html')
        cy.get('img[id="angular"]').move({deltaX:300,deltaY:1000})

        cy.get('img[id="angular"]').move({deltaX:1200,deltaY:300})


    })
})
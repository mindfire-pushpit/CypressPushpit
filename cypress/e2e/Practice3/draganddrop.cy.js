

describe('My Test Suite',()=>{
    it('Drag and drop',()=>{

        cy.visit('https://jqueryui.com/droppable/');
        cy.frameLoaded('iframe[class="demo-frame"]');
        cy.iframe().find('div[id="draggable"]').as('drag')
        cy.iframe().find('div[id="droppable"]').as('drop');
        cy.get('@drag').drag('@drop')

    })
})
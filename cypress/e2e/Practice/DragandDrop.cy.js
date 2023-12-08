describe('Drag and Drop', () => {
    it('Using drag-drop plugin', function () {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        cy.get('#column-a')
            .should('have.text', 'A')
        cy.get('#column-b')
            .should('have.text', 'B')

        cy.get('#column-a').drag('#column-b')

        cy.get('#column-a')
            .should('have.text', 'B')
        cy.get('#column-b')
            .should('have.text', 'A')
    })
})
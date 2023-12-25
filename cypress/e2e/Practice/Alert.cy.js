// describe('Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {

//     beforeEach(() => {
//         cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
//     })

//     it('Handling JS Alert - Validate Alert Text and Click OK', () => {
//         cy.contains('Click for JS Alert').click()
//         cy.on('window:alert', (str) => {
//             expect(str).to.equal('I am a JS Alert')
//         })
//         cy.on('window:confirm', () => true);
//         cy.get('#result').should('have.text', 'You successfully clicked an alert')
//     })

//     it('Handling JS Confirm - Validate Confirm Text and Click OK', () => {
//         cy.contains('Click for JS Confirm').click()
//         cy.on('window:confirm', (str) => {
//             expect(str).to.equal(`I am a JS Confirm`)
//         })
//         cy.on('window:confirm', () => true);
//         cy.get('#result').should('have.text', 'You clicked: Ok')
//     })

//     it('Handling JS Confirm - Click Cancel', () => {
//         cy.contains('Click for JS Confirm').click()
//         cy.on('window:confirm', () => false);
//         cy.get('#result').should('have.text', 'You clicked: Cancel')
//     })
// })

describe('Handle alert',()=>{
    it('Alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click();
    })
})
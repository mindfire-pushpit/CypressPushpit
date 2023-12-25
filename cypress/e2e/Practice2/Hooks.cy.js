//before
//after
//beforeEach
//afterEach
//comming from mocha framework
describe('My Test Suite',()=>{

    before('Before all it blocks once',()=>{
        cy.log('Launching app')
    })

    it('Search functionality',()=>{
        cy.log('Search functionality')

    })

    it('Advance Search functionality',()=>{
        cy.log('Advance Search functionality')
        
    })

    it('Listing Search functionality',()=>{
        cy.log('Listing Search functionality')
        
    })
})
describe('Handle Tabs',()=>{
    it.skip('Apporach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();

        cy.url().should('include', 'the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        cy.go('back')

    })


    //  Apporach 2 having limitation that both Url have same domain.

    it('Apporach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((e)=>{
            let url = e.prop('href');
            cy.visit(url)
        })

        cy.url().should('include', 'the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        cy.go('back')

    })
})
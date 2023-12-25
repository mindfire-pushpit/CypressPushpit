describe("Assertions",()=>{
    it("Implicit Assertions Test 1",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // should and 
        
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive')

        // cy.url().should('include','orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','orangehrmlive')

        cy.get('input[placeholder="Username"]').type('Pushpit')
        cy.get('input[placeholder="Username"]').should('have.value','Pushpit')




    })

    it.only("Explicit Assertions",()=>{

        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
        cy.viewport(100,200)
        cy.get('input[name="username"]').should('be.empty');
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        let name='CYZ';

        //BDD style assertions

        cy.get('p[class="oxd-userdropdown-name"]').then((ele)=>{

            console.log(ele.text());

            expect(ele.text()).to.not.equal(name);
        })

        //TDD style assertions:

    


        
    })
})
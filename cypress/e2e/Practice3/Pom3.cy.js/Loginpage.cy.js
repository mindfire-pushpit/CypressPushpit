
import Login from "../../Pages/Login";
import admin from "../../Pages/admin";


describe('My Test Suite',()=>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    })

    it('My Test 1',()=>{

        const login1=new Login();
        
        login1.userName('Admin');
        login1.passWord('admin123');
        login1.loginButton();
        login1.verifyLogin();
    })

    it('My Test 2',()=>{
       const Admin = new admin();

       cy.Login('Admin','admin123');

        cy.get('a[href*="admin/viewAdminModule"]').click();
        Admin.verifyAdminPage();
        Admin.systemUsername();




    })

})
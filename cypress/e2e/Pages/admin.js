class admin{

    verifyAdminPage()
    {
        cy.get('div[class="oxd-topbar-header-title"] h6').eq(0).should('have.text','Admin');
    }

    systemUsername(name)
    {
        cy.get('form input[class="oxd-input oxd-input--active"]').click().type('Pushpit');
    }
}

export default admin;
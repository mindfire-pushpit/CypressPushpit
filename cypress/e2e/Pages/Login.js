class Login{

    userName(username)
    {
        cy.get('input[name="username"]').click();
        cy.get('input[name="username"]').type(username);

    }

    passWord(password)
    {
        cy.get('input[type="password"]').click();
        cy.get('input[type="password"]').type(password);
    }

    loginButton()
    {
        cy.get('button[type="submit"]').click();
    }

    verifyLogin()
{
 cy.get('div[class="oxd-topbar-header-title"]  h6').should('have.text','Dashboard');   
}
}

export default Login;
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap);

})
//custom command to click on link text


// Cypress.Commands.add('clickLink',(label)=>{
//     cy.get('a').contains(label).click()
// })

// Cypress.Commands.add('shadowGet', { prevSubject: 'element' }, (parentSubject, selector) => {
//     return parentSubject.shadowDom().find(selector);
//   });

  
Cypress.Commands.add("Login", (username,password)=>{
    cy.get('input[name="username"]').click()
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').click()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type(password, { sensitive: true })
    cy.get('button.orangehrm-login-button').click()
    cy.get('.oxd-brand-banner > img').should('be.visible')
  })
  
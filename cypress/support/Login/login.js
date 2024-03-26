/// <reference types="cypress" />

Cypress.Commands.add('login_teste',(user,password)=>{
    cy.visit('https://www.google.com/')
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()

});
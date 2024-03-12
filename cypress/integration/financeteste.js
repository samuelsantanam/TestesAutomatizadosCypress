/// <reference types="cypress" />

context('Dev Finances', () => {
    it('Cadastrar transacao', () => {
        cy.visit('https://dev-finance.netlify.app')
        cyp.get('#transation .button').click
    });
    
});
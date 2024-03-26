
//Comando criado para: Visitar a página de testes, que recebe usuário e senha e clica no botão Login da página

Cypress.Commands.add('gui_login',(user, password)=>{
    //Acessa o site
    cy.visit('https://www.saucedemo.com/v1/')
    cy.log('Informa usuário')
    cy.get('[data-test="username"]').type(user);
    cy.log('Informa senha')
    cy.get('[data-test="password"]').type(password)
    cy.log('Clica no botão login')
    cy.get('#login-button').click()
});
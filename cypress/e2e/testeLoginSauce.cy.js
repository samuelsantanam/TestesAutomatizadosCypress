/// <reference types="cypress" />

context('Teste saucedemo - Teste Login', () => {
    it('CT1 - Login com sucesso', () => {
        //Foi criado o comando customizado gui_login na pasta support para otimizar o código
        cy.gui_login('standard_user', 'secret_sauce')
        //Verifica se foi redirecionado para a página abaixo, pois se foi é porque o login foi feito com sucesso
        cy.log('Verifica se foi redirecionado para a URL abaixo, pois se foi é porque o login foi feito com sucesso')
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')

    });
    it('CT2 - Login incorreto - Senha incorreta', () => {
        cy.gui_login('standard_user','secret_sauca')
        //Verifica se existe o texto abaixo, pois se houver é porque a senha está icorreta
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    });
    it('CT3 - Login incorreto - Usuário incorreto', () => {
        cy.gui_login('standard_usera','secret_sauce')
        //Verifica se existe o texto abaixo, pois se houver é porque a senha está icorreta
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.log('Fluxo: Teste Login - FNIALIZADO')
    });
});
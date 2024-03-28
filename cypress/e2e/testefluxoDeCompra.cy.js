/// <reference types="cypress" />

context('Teste saucedemo - Tesde de compra', () => {
    
    it('CT1 - Login com sucesso', () => {
        cy.viewport(1480, 800)
        //Foi criado o comando customizado gui_login na pasta support para otimizar o código
        cy.gui_login('standard_user', 'secret_sauce')
        //valida se o primeiro item da lista
        cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        //valida se o ultimo item da lista
        cy.get('#item_3_title_link > .inventory_item_name').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        //Clica no primeiro item da lista e adiciona ao carrinho
        cy.get('#item_4_title_link > .inventory_item_name').click()
        //adiciona o item no carrinho
        cy.get('.btn_primary').click()
        //Verifica se contém apenas um item no carrinho        
        cy.get('.fa-layers-counter').should('have.text', '1')
        //Clica no carrinho
        cy.get('.fa-layers-counter').click()
        //Verifica se o valor do item está correto
        cy.get('.inventory_item_price').should('have.text','29.99')
        //Clica no botão 'Continue shoppinng' para voltar a lista de itens
        cy.get('.cart_footer > .btn_secondary').click()
        //Clica no botão 'Remove' para remover o item do carrinho
        cy.get('.btn_secondary').click()
        //Verifica se o item foi removido do carrinho       
        cy.get('.fa-layers-counter').should('not.equal', '1')
        //Clica no item: Sauce Labs Fleece Jacket
        cy.get('#item_5_title_link > .inventory_item_name').click()
        //adiciona o item no carrinho
        cy.get('.btn_primary').click()
        //Clica no botão 'Back' para voltar a lista de itens
        cy.get('.inventory_details_back_button').click()
        //Clica no item: Sauce Labs Bolt T-Shirt
        cy.get('#item_1_title_link > .inventory_item_name').click()
        //adiciona o item no carrinho
        cy.get('.btn_primary').click()
        //Clica no botão 'Back' para voltar a lista de itens
        cy.get('.inventory_details_back_button').click()
        //Clica no item: Sauce Labs Bike Light
        cy.get('#item_0_title_link > .inventory_item_name').click()
        //adiciona o item no carrinho
        cy.get('.btn_primary').click()
        //Clica no botão 'Back' para voltar a lista de itens
        cy.get('.inventory_details_back_button').click()
        //Verifica se há 3 itens no carrinho   
        cy.get('.fa-layers-counter').should('have.text', '3')
        //Clica no carrinho de compras
        cy.get('.fa-layers-counter').click()
        //Verifica os valores individuais dos produtos adicionados no carrinho
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '49.99')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '15.99')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '9.99')
        //Clica no botão 'Checkout'
        cy.get('.btn_action').click()
        //Informa o nome Samuel
        cy.get('[data-test="firstName"]').type('Samuel')
        //Informa o sobrenome Marinho
        cy.get('[data-test="lastName"]').type('Marinho')
        //Informa o Zip Code
        cy.get('[data-test="postalCode"]').type('7400000')
        //Clica no botão Continue
        cy.get('.btn_primary').click()
        //Verifica o valor total dos produtos
        cy.get('.summary_subtotal_label').contains('75.97')
        //Verifica o valor do frete
        cy.get('.summary_tax_label').contains('6.08')
        //Verifica o valor total
        cy.get('.summary_total_label').contains('82.05')
        //Clica no botão Finish
        cy.get('.btn_action').click()
        //Verifica se existe o texto abaixo na tela de finalização de compra
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
        //Valida se está na URL corrreta de checkout
        cy.url().should('be.equal', 'https://www.saucedemo.com/v1/checkout-complete.html')
        cy.log('Fluxo: Teste compra - FNIALIZADO')
    });
});
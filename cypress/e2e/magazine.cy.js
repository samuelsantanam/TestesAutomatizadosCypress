/// <reference types="cypress" />

context('Aprendendo CYPRESS', () => {
  it('Learning - Magazine', () => {
    //Para o Ultrawide
    //cy.viewport(1920, 1280) // Set viewport to 550px x 750px
    //Para o dellc:\Users\samue\Downloads\Samuel Santana Marinho - Boleto 9ª Parcela 07-03 - Boleto RESIDENCIAL 2ª VIA (1).pdf
    cy.viewport(1480, 800) // Set viewport to 550px x 750px
    cy.visit('www.magazineluiza.com.br')
    cy.get('[data-testid="input-container"]').click()
    //Pesquisa o item "Teclado gamer"
    cy.get('[data-testid="input-container"]').type('teclado gamer')
    cy.get('[data-testid="input-search"]').type('{enter}')
    cy.wait(10000)
    //Define a ordenação por Menor Preço
    cy.get('[data-testid="select-desktop-with-label"]').select('Menor Preço')
    cy.wait(6000)
    //Verificar se os dois itens estão na lista de "Menor Preço"
    cy.get('[data-testid="list"] > :nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"]').contains('Mini Teclado Sem Fio, LED, Smart Tv Media Player')
    cy.get('[data-testid="list"] > :nth-child(2) > [data-testid="product-card-container"] > [data-testid="product-card-content"]').contains('Mini Teclado e Mouse Mousepad Games Notebook')
    //Clica no produto Teclado Bluetooth
    cy.get('[data-testid="list"] > :nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"]').click()
    //adicionando na sacola o item Teclado Bluetooth
    cy.wait(6000)
    cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
   
    /*
    cy.intercept('/service-worker.js', {
      body: undefined
    })
    */

    //Clica em Continuar como se fosse fazer checkout
    cy.get('.BasketContinue-button').click()
    //Clica em Magalu para voltar para a página inicial
    cy.get(".CheckoutHeader-logo-icon").click


    })

});

//Para executar em modo headless ou background
//npx cypress run --spec "D:\Cypress\Projetos\cypress\e2e\magazine.cy.js"
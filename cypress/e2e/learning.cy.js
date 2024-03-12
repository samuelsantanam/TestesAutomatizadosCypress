
context('Aprendendo CYPRESS', () => {
    it('Learning - Login google', () => {

      cy.visit('https://google.com')
      cy.get('[class="gLFyf"]').type('microsoft login')
      .type('{enter}')
      cy.get('.eKjLze > .g > [lang="pt"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
      cy.log('Teste de log do cypress')
      cy.origin('https://account.microsoft.com', () => {
        cy.wait(5000);
        cy.get('button').contains('Aceitar').click();
        cy.wait(3000);
        cy.get('button').contains('Entrar').click();
        cy.wait(3000);
      })

    });
});
## Introdução:
<br>1 - Foi uttilizado o [saucedemo](https://www.saucedemo.com/v1/) para realizar testes automatizados utilizando [Cypress](https://www.cypress.io)<br>

Fluxo do programa <br>
1 - Pesquisa produtos, adiciona no carrinho, verifica o preço<br>
2 - Faz checkout e verifica os valores (Foram utilizadas funções como [.should](https://docs.cypress.io/api/commands/should) e [.contains](https://docs.cypress.io/api/commands/contains) para realizar a verificação de valores) <br>

PS.: Foi criado o arquivo ["gui_commands.js"](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/support/gui_commands.js) na pasta [support](https://github.com/samuelsantanam/TestesAutomatizadosCypress/tree/main/cypress/support), onde contém um metódo personalizado para realizar login a partir de dois parâmetros enviados (user, password) <br>

____

Para este projeto dois casos de testes foram criados:
1 - [testeLoginSauce.cy.js](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/e2e/testeLoginSauce.cy.js): Realiza login utilizando comando personalizado da pasta ["gui_commands.js"](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/support/gui_commands.js)

2 - [testefluxoDeCompra.cy.js](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/e2e/testefluxoDeCompra.cy.js): Fluxo de compra: simulação da compra de produtos

____
## Pré-requisitos para o projeto
 - Ter o vscode instado
 - Ter o npm instalado
 - Clonar este projeto
 
POP Install<br>
Dentro do VSCode:<br>
1 - Para criar as pastas do projeto: npm init -y<br>
2 - Para instalar o [Cypress](https://www.cypress.io): npm install cypress -D<br>
3 - Após a criação dos casos testes, para abrir o cypress no modo interativo, bata executar o comando: npx cypress open, caso queria utilizar em modo headless(background) basta executar: npx cypress run --spec "Informar o caminho do arquivo que contém o teste criado com a extensão: .cy.js"<br><br>
<br>

## <b>Lições aprendidas<br></b>

<b>Comandos mais utilizados no Cypress: <br></b>
cy.visit(url): Visita uma determinada URL. <br>
cy.get(selector): Localiza um elemento com base no seletor fornecido. <br>
cy.click(): Clica em um elemento. <br>
cy.type(text): Insere texto em um campo de input. <br>
cy.select(value): Seleciona uma opção de um elemento dropdown ou select. <br>
cy.should('have.text', text): Verifica se um elemento possui o texto esperado. <br>
cy.should('exist'): Verifica se um elemento existe no DOM. <br>
cy.should('not.exist'): Verifica se um elemento não existe no DOM. <br>
cy.contains(text): Localiza um elemento que contenha o texto fornecido. <br>
cy.wait(time): Aguarda um determinado período de tempo em milissegundos. <br>
cy.get('[data-cy="element"]').click(): Localiza um elemento pelo atributo data-cy e clica nele. <br>
cy.get('input').clear(): Limpa o conteúdo de um campo de input. <br> 
cy.get('form').submit(): Submete um formulário. <br>
cy.get(selector).scrollIntoView(): Faz a rolagem até um elemento específico. 
Validar se está na URL correta: 
cy.url().should('be.equal', 'https://')
//Para executar em modo headless ou background<br>
//npx cypress run --spec "D:\Cypress\Projetos\cypress\e2e\magazine.cy.js"<br>
<br>

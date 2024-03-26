# <b>Testes em Cypress</b>

Fluxo:
<br>1 - Uttilizando o saucedemo(https://www.saucedemo.com/v1/) para realizar testes automatizados com Cypress<br>
1 - Pesquisa produtos, adiciona no carrinho, verifica o preço<br>
2 - Faz checkout e verifica os valores

PS.: Foi criado o arquivo "gui_commands.js" na pasta support, onde contém um metódo personalizado para realizar login a partir de dois parâmetros enviados (user, password)

____

Para este projeto dois casos de testes foram criados:
1 - testeLoginSauce.cy.js: Realiza login utilizando comando personalizado da pasta "gui_commands.js"

2 - testefluxoDeCompra.cy.js: Fluxo de compra: simulação da compra de produtos

____

## <b>Lições aprendidas<br></b>

POP Install<br>
Dentro do VSCode:<br>
1 - npm init -y (cria as configs do projeto)<br>
2 - Instalar o cypress:<br>
npm install cypress -D<br>
3 - npx cypress open (abrir o cypress no modo interativo)<br>
<br>
//Para executar em modo headless ou background<br>
//npx cypress run --spec "D:\Cypress\Projetos\cypress\e2e\magazine.cy.js"<br>

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
cy.get(selector).scrollIntoView(): Faz a rolagem até um elemento específico. <br>

## Introdução:<br>
 - Foi uttilizado o [saucedemo](https://www.saucedemo.com/v1/) para realizar testes automatizados utilizando [Cypress](https://www.cypress.io)<br>

Fluxo do programa <br>
1 - Pesquisa produtos, adiciona no carrinho, verifica o preço<br>
2 - Faz checkout e verifica os valores (Foram utilizadas funções como [.should](https://docs.cypress.io/api/commands/should) e [.contains](https://docs.cypress.io/api/commands/contains) para realizar a verificação de valores) <br>

PS.: Foi criado o arquivo ["gui_commands.js"](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/support/gui_commands.js) na pasta [support](https://github.com/samuelsantanam/TestesAutomatizadosCypress/tree/main/cypress/support), onde contém um metódo personalizado para realizar login a partir de dois parâmetros enviados (user, password) <br>

Para este projeto dois casos de testes foram criados: <br>
1 - [testeLoginSauce.cy.js](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/e2e/testeLoginSauce.cy.js): Realiza login utilizando comando personalizado da pasta ["gui_commands.js"](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/support/gui_commands.js)<br>
2 - [testefluxoDeCompra.cy.js](https://github.com/samuelsantanam/TestesAutomatizadosCypress/blob/main/cypress/e2e/testefluxoDeCompra.cy.js): Fluxo de compra: simulação da compra de produtos<br>

## Pré-requisitos para o projeto
 - Ter o vscode instado
 - Ter o npm instalado
 - Clonar este projeto
 
POP Install<br>
Dentro do VSCode:<br>
1 - Para criar as pastas do projeto, basta digitar o comando a seguir no Terminal: npm init -y<br>
2 - Para instalar o [Cypress](https://www.cypress.io) basta digitar o comando: </b> npm install cypress -D</b><br>
3 - Após a criação dos casos testes, para abrir o cypress no modo interativo, bata executar o comando: <b>npx cypress open</b>, caso queria utilizar em modo headless(background) basta executar: <b>npx cypress run --spec "Informar o caminho do arquivo que contém o teste criado com a extensão: .cy.js"</b><br>
<br>

## <b>Conclusão:</b><br>
 - Ao utilizar automação de testes com o Cypress foi possível observar e destacar vários pontos:<br>
 - Curva de aprendizado encurtada, visto que a ferramenta é muito dinâmica e possui funções para abranger validações de testes de diversar formas<br>
 - Facilidade na instalação e configuração<br>
 - Possibilidade de organizar os casos de testes de maneira simplificada<br>
 - Excelente performance: Execução dos testes muito rápida<br>
 - Possibilidade criar comandos personalizados para otimização de código<br>
 - Possibilidade de abranger testes de API e testes E2E<br>

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

## Agradecimentos
 - [Walmyr Lima e Silva Filho](https://www.linkedin.com/in/walmyr-lima-e-silva-filho/): Por ter disponibilizados várias video-aulas no [seu canal no youtube](https://www.youtube.com/@TalkingAboutTesting) ensinando a utilizar o cypress desde os passos mais simples até itens mais avançados, e também seus cursos: 'Testes automatizados com Cypress - Básico' e 'Testes automatizados com Cypress (intermediário)', e também por contribuir ativamente para a comunidade de testes.
- Alex Soares: Também pelas video-aulas no [seu canal do youtube](https://www.youtube.com/@alexosoares).
- Pelo apoio de amigos [ao apreciarem um novo item de apredizado](https://www.linkedin.com/feed/update/urn:li:activity:7174030314221015040/) para minha carreira profissional.
  



<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes em Cypress</title>
</head>
<body>
    <h2>Testes em Cypress</h2>
    
    <h1>Fluxo:</h1>
    <ol>
        <li>Logar em um site</li>
        <li>Pesquisar um produto</li>
        <li>Ordenar a lista</li>
        <li>Verificar se existem dois produtos em específico</li>
        <li>Adicionar os produtos no carrinho</li>
    </ol>
    
    <hr>
    
    <h3>Lições Aprendidas</h3>
    <h2>POP Install</h3>
    <p>Dentro do VSCode:</p>
    <ol>
        <li><code>npm init -y</code> (cria as configs do projeto)</li>
        <li>Instalar o cypress:<br><code>npm install cypress -D</code></li>
        <li><code>npx cypress open</code> (abrir o cypress no modo interativo)</li>
    </ol>
    <p>//Para executar em modo headless ou background<br>
    <code>//npx cypress run --spec "D:\Cypress\Projetos\cypress\e2e\magazine.cy.js"</code>
    </p>
    
    <h3>Comandos mais utilizados no Cypress</h3>
    <ul>
        <li><code>cy.visit(url)</code>: Visita uma determinada URL.</li>
        <li><code>cy.get(selector)</code>: Localiza um elemento com base no seletor fornecido.</li>
        <li><code>cy.click()</code>: Clica em um elemento.</li>
        <li><code>cy.type(text)</code>: Insere texto em um campo de input.</li>
        <li><code>cy.select(value)</code>: Seleciona uma opção de um elemento dropdown ou select.</li>
        <li><code>cy.should('have.text', text)</code>: Verifica se um elemento possui o texto esperado.</li>
        <li><code>cy.should('exist')</code>: Verifica se um elemento existe no DOM.</li>
        <li><code>cy.should('not.exist')</code>: Verifica se um elemento não existe no DOM.</li>
        <li><code>cy.contains(text)</code>: Localiza um elemento que contenha o texto fornecido.</li>
        <li><code>cy.wait(time)</code>: Aguarda um determinado período de tempo em milissegundos.</li>
        <li><code>cy.get('[data-cy="element"]').click()</code>: Localiza um elemento pelo atributo data-cy e clica nele.</li>
        <li><code>cy.get('input').clear()</code>: Limpa o conteúdo de um campo de input.</li>
        <li><code>cy.get('form').submit()</code>: Submete um formulário.</li>
        <li><code>cy.get(selector).scrollIntoView()</code>: Faz a rolagem até um elemento específico.</li>
    </ul>
</body>
</html>

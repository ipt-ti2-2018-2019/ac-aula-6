# Aula 6 - JSX e AJAX

## JSX

"JSX" é uma sintaxe especial, para se trabalhar com bibliotecas como o React. Permite escrever "HTML" diretamente no meio do JavaScript. O uso de JSX é **completamente opcional**, mas ajuda a criar código mais legível.

Ou seja, o seguinte código:

```javascript
function Exemplo(props) {
    return <p style={{ color: props.cor }}>Olá, {props.nome}!</p>;
}
```

É equivalente a escrever:

```javascript
function Exemplo(props) {
    return React.createElement(
        "p",
        { color: props.cor },
        "Olá, ",
        props.nome,
        "!"
    );
}
```

### Documentação oficial

-   https://reactjs.org/docs/glossary.html#jsx
-   https://reactjs.org/docs/introducing-jsx.html
-   https://reactjs.org/docs/jsx-in-depth.html

### Detalhes da sintaxe

-   Para se usar variáveis ou expressões (ex: cálculos aritméticos) dentro do HTML ou dentro de atributos, usam-se chavetas (`{}`)
    -   Atenção que se se quiser usar um objeto diretamente (ex: no `style`), usam-se duas chavetas, uma para o objeto, e outra para a expressão
-   Se se quiser usar texto num atributo, usam-se aspas, tal como no HTML
    -   Tudo o resto é tratado as-is (com limitações no HTML, ex: o `value` é sempre uma string, mas posso passar uma variável que seja string, com as chavetas)
-   As mesmas limitações do JavaScript mantêm-se (ex: `className`, `htmlFor`)
-   Dois elementos JSX adjacentes têm que ter um elemento "wrapper", ex:

```javascript
// Inválido
function Errado(props) {
    return (
        <p>Elemento 1</p>
        <p>Elemento 2</p>
    );
}
```

```javascript
// Correto
function Certo(props) {
    return (
        <div>
            <p>Elemento 1</p>
            <p>Elemento 2</p>
        </div>
    );
}
```

### Vantagens

-   O código fica mais fácil de ler
-   Familiaridade (parece HTML)

### Desvantagens / avisos

-   Browsers não percebem esta sintaxe, logo é necessário um compilador
-   **Se os nomes das classes/funções não começarem com letra maiúscula, o compilador vai fazer asneira e vai emitir uma tag HTML, resultando em bugs potencialmente subtis.** (https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)
-   Alguns atributos no HTML continuam a ser diferentes no JSX (ex: `tabindex` vs. `tabIndex`, `onclick` vs. `onClick`).
-   O `React` tem que estar importado no topo do ficheiro (`import React from 'react'`)

### Playground

O seguinte link pode ser usado para testar a sintaxe:

[Babel.js REPL for JSX](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=EoUwhgxgLgIg8gWQHQCcQDsAmIUAoA8AFgIwB8hIANpQPb4D0JpANAASY0QCuAthlEgDmIKAFFKIPuigAhAJ4BJTLgDkYAA7qVASm1A&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.2)

---

## Create React App

Como JSX não é uma sintaxe suportada pelos browsers (ou qualquer interpretador JavaScript, como o Node.js), é necessário instalar compiladores que façam essa transformação por nós, gerando JavaScript válido.

O **Create React App** é o equivalente do `File > New > Project...` do Visual Studio, mas para o React.

### Set up

Para usar esta ferramenta, é preciso:

-   Node.js, disponível em https://nodejs.org/
-   Linha de comandos

**Nota: Poderá ser preciso reiniciar o PC para que as ferramentas `node`, `npm`, e `npx` fiquem disponíveis na linha de comandos.** Isto só se aplica ao Windows. Em macOS e Linux, não é preciso reiniciar o PC.

### Instalação e utilização

Informação oficial: https://github.com/facebook/create-react-app#create-react-app--

### Exercício

Trocar, no projeto da aplicação de "todos", todo o código que usa `React.createElement` por JSX, para treinar o uso da sintaxe. Para mais informações, deve-se usar a documentação oficial (ver links anteriores).

É recomendado usar o Create React App para isto.

---

## AJAX

AJAX significa "Asynchronous JavaScript and XML". Representa um conjunto de ferramentas que permite uma web app/site obter dados programaticamente, sem obrigar o recarregamento total da página, ou bloqueá-la enquanto os dados são solicitados.

Apesar de constar "JavaScript" e "XML" no nome, AJAX não se restringe a nenhuma destas duas tecnologias, sendo usado em tudo desde aplicações móveis, a jogos, a comunicação entre servidores.

Independentemente de onde é usado, é costume ligar AJAX com o protocolo HTTP (salvo o pleonasmo) para fazer a comunicação entre o cliente e o servidor.

---

Existem duas APIs oficiais para se trabalhar com AJAX na web:

-   Com o objeto `XMLHttpRequest`
-   Com a função `fetch`

Também existem bibliotecas de terceiros para trabalhar com AJAX, por exemplo:

-   `$.ajax` (jQuery AJAX)
-   `axios`

### `XMLHttpRequest`

Esta classe e os seus objetos podem ser usados para fazer pedidos HTTP a um servidor.

#### Uso

```javascript
// Criar o objeto
let xhr = new XMLHttpRequest();

// Especificar o tipo do pedido
// - GET == ler dados
// - POST, PUT == enviar dados (se suportado pelo servidor)
// - DELETE == apagar dados (se suportado pelo servidor)
xhr.open("GET", "https://ipt-ti2-todo.azurewebsites.net/");

// Adicionar os event listeners para quando o pedido termina com sucesso (`onload`) ou erro (`onerror`)
xhr.onload = () => {
    // Este código vai ser executado quando a resposta chegar. Nota que a resposta pode significar erro
    // logo deve-se usar o `status` do objeto para verificar se os dados chegaram com sucesso ou não.
    if (xhr.status === 200) {
        // 200 == OK (outros: 404 == Not Found, 500 == Internal Server Error, etc.)
        // Existem várias formas de obter os dados da resposta:
        // - xhr.responseText == Texto da resposta
        // - xhr.responseXML == Documento XML (como objeto do tipo Document), já interpretado como XML
    } else {
        // Potencialmente, erro.
    }
};

xhr.onerror = () => {
    // Este código vai ser executado se ocorrer um erro, geralmente de rede (offline, timeout, etc.)
};

// Enviar o pedido
// Opcionalmente, este parâmetro permite enviar dados.
xhr.send();
```

Exemplo: Ler o HTML de uma página

```javascript
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://ipt-ti2-todo.azurewebsites.net/");

xhr.onload = () => {
    // Este código vai ser executado quando a resposta chegar. Nota que a resposta pode significar erro
    // logo deve-se usar o `status` do objeto para verificar se os dados chegaram com sucesso ou não
    if (xhr.status === 200) {
        // 200 == OK (outros: 404 == Not Found, 500 == Internal Server Error, etc.)
        // Existem várias formas de obter os dados da resposta:
        // - xhr.responseText == Texto da resposta
        // - xhr.responseXML == Documento XML (como objeto do tipo Document), já interpretado como XML
        let htmlResposta = xhr.responseText;

        document.body.innerHTML = htmlResposta;
    } else {
        // Meramente exemplificativo, deve-se evitar o alert()...
        alert("Erro no servidor");
    }
};

xhr.onerror = () => {
    // Este código vai ser executado se ocorrer um erro, geralmente de rede (offline, timeout, etc.)

    // Meramente exemplificativo, deve-se evitar o alert()...
    alert("Erro de rede");
};

xhr.send();
```

Exemplo: Ler JSON de um web service (API de TODOs disponibilizada pelo professor)

```javascript
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://ipt-ti2-todo.azurewebsites.net/api/todos/afecarvalho");

xhr.onload = () => {
    if (xhr.status === 200) {
        // JSON é texto, logo usa-se a função `JSON.parse` para transformar o texto em objetos.
        let jsonResposta = xhr.responseText;

        let listaTarefas = JSON.parse(jsonResposta);

        // Usar o objeto (uso uma função para organizar o código...)
        mostraTarefas(listaTarefas);
    } else {
        alert("Não foi possível obter o JSON...");
    }
};

xhr.onerror = () => {
    alert("Erro de rede");
};

xhr.send();

function mostraTarefas(tarefas) {
    let container = document.createElement("ul");

    for (let tarefa of tarefas) {
        let liTarefa = document.createElement("li");

        // https://github.com/ipt-ti2-2018-2019/TodoApiAjax#modelo-de-dados
        liTarefa.textContent = tarefa.description;

        container.appendChild(liTarefa);
    }

    document.body.appendChild(container);
}
```

#### Notas

-   **Cada objeto só pode ser usado uma vez**, depois de ser usado para enviar um pedido HTTP, deve ser criado outro para fazer um novo pedido.

#### Mais informação

-   https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
-   https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

# Anexo 1 - Módulos

Até agora, todas classes e funções que escrevemos dentro de um ficheiro JavaScript ficam disponíveis em todos os ficheiros (ficam globais). No entanto, uma das coisas que não se deve fazer é meter classes ou funções no scope global (a não ser que seja necessário usá-las externamente).

Por essa razão, em 2015, o JavaScript introduziu módulos, na versão ES6 / ES2015.

## Definição

Um módulo em JavaScript é um ficheiro JavaScript normal. A única diferença é que, por defeito, todas as variáveis, funções, e classes declaradas dentro desse ficheiro são **privadas** por defeito. Isto acontece quando se usa a tag `<script>` para referenciar ficheiros.

Isto também tem problemas (quem é que se esqueceu de adicionar a tag `<script>` para o TodoItem durante as aulas?)

## Sintaxe

### Tornar coisas "públicas": `export`

Quando se quer disponibilizar uma variável, função, ou classe para outros módulos, usa-se o `export`:

```javascript
// modulo-1.js

// Exportar uma variável
export let answer = 42;

// Exportar uma classe
export class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    // Etc...
}

// Exportar uma função
export function soma(n1, n2) {
    return n1 + n2;
}

// Isto não é exportado, nunca pode ser acedido externamente (é `private`), mas pode ser usado dentro do módulo.
let segredo = "Não partilhar!";
```

Usando esta sintaxe, ficam disponíveis 3 elementos quando se importa este ficheiro:

-   `answer`
-   `Pessoa`
-   `soma`

### Usar coisas "públicas": `import`

Quando se quer usar uma variável, função, ou classe de outro módulo (ficheiro), usa-se o `import` para importar:

```javascript
// modulo-2.js
import { soma } from "./modulo-1";

console.log(soma(1, 2)); // 3
```

A sintaxe é: `import { nomeDaCoisa, outraCoisa, outra, etc } from './caminho/para/o/ficheiro`. Em alguns casos, a extensão do ficheiro é opcional.

### Nota 1: `default` export

Alguns módulos só exportam uma variável, classe, ou função. Muitos deles usam `default` exports (ex: React):

```javascript
// modulo-1.js
export default class Pessoa {
    /* ... */
}
```

```javascript
// modulo-2.js
import Pessoa from "./modulo-1";
```

Notar que:

-   No módulo 1, usei `export default`
-   No módulo 2, não usei chavetas para importar a classe em específico.
-   Só pode haver um `export default` por ficheiro.

**Nota do professor**: Evitem usar default export nos módulos que fizerem, as ferramentas (como o Visual Studio) ainda não funcionam bem com eles. Só quando vos é pedido, é que os devem usar.

### Nota 2: npm

O npm (https://www.npmjs.com/) é uma excelente fonte de módulos JavaScript para disponibilizar funcionalidades. Apesar disto ter começado apenas para Node.js, também já tem suporte para front end.

Lá podem encontrar coisas como bibliotecas, frameworks, conjuntos de componentes, etc.

## Mais informações

-   https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
-   http://exploringjs.com/impatient-js/ch_modules.html

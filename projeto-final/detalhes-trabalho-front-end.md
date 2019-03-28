# Front-end

Pretende-se desenvolver uma aplicação, com o uso de tecnologias de desenvolvimento de aplicações web, para interagir com uma rede social de partilha de fotografias.

A parte de front-end terá uma cotação até `15 valores`.

## APIs

O aluno pode optar por não implementar a componente de back-end/API. Caso o pretenda fazer, o professor disponibiliza duas APIs:

-   Uma "pública", sem autenticação, com um conjunto de dados disponibilizados pelo professor. Esta API é _read-only_, não tem nenhuma operação de Create, Update, ou Delete.
-   Uma "privada", com autenticação mediante _UserName_ e _Password_. Esta API mostrará os dados que todos os alunos publicarem nela, e disponibiliza todas as operações necessárias para implementar todas as funcionalidades pedidas.

## Níveis de avaliação

As seguintes sub-secções servem como "guia" para o aluno saber as funcionalidades que deve implementar.

### Básico

Nota esperada: até `10 valores`.

Para o nível "básico", a aplicação deve desempenhar as seguintes tarefas:

-   Usar a API pública, disponível em `???`, sem autenticação
-   Listar os _posts_ disponíveis na plataforma, numa _view_, incluíndo a seguinte informação:
    -   Fotografia
    -   Utilizador que criou o post
    -   Data de publicação do post
    -   Número de _likes_
    -   Número de comentários
-   Mostrar os detalhes de um _post_, ao clicar nele, mostrando a seguinte informação numa nova _view_:
    -   Fotografia
    -   Utilizador que criou o post
    -   Data de publicação do post
    -   Legenda
    -   Número de _likes_
    -   Comentários, mostrando para cada um:
        -   Utilizador
        -   Data de publicação do comentário
        -   Conteúdos do comentário

### Básico +

Nota esperada: até `11 valores`.

Para o nível "básico +", a aplicação deve desempenhar as seguintes tarefas:

-   Todas as funcionalidades descritas no nível "básico"
-   Implementar, na _view_ que lista os _posts_, uma funcionalidade de pesquisa:
    -   A pesquisa deve ser feita através de uma caixa de texto onde o utilizador pode escrever um termo de pesquisa.
    -   Os resultados da pesquisa afetarão os conteúdos da _view_, mostrando apenas os _posts_ que a API disponibiliza face ao termo de pesquisa.
    -   A execução da pesquisa pode ser feita através de um botão, que vai buscar a lista de _posts_, e os mostra na _view_

### Intermédio

Nota esperada: até `13 valores`.

Para o nível "intermédio", a aplicação deve desempenhar as seguintes tarefas:

-   Todas as funcionalidades descritas no nível "básico +"
-   Usar a API privada, disponível em `???`, em vez da API pública, com autenticação mediante _UserName_ e _Password_
    -   A API privada requer que o utilizador esteja autenticado para poder usar todas as suas funcionalidades
    -   O professor disponibilizará o _UserName_ e _Password_ para cada aluno, por email.
    -   Se for preciso fazer _reset_ à _password_, o aluno deve solicitar uma nova por email, para o professor.
-   Implementar, na _view_ que mostra os detalhes de um _post_, a funcionalidade de comentar no _post_:
    -   A introdução de um comentário deve ser feita através de uma caixa de texto para escrever o comentário, e um botão para submeter
    -   Quando o utilizador clica no botão, o comentário é submetido para a API
    -   A lista de comentários deve ser recarregada, para mostrar os últimos comentários
-   Implementar, na _view_ que mostra os detalhes de um _post_, a funcionalidade de fazer (ou tirar) _like_ num _post_:
    -   O _toggle_ do _like_ deve ser feito através de um botão
    -   Quando se clica no botão, o estado de _like_ deve ser enviado para o servidor, e o número de _likes_ deve ser refrescado

### Avançado

Nota esperada: até `15 valores`.

Para o nível "avançado", a aplicação deve desempenhar as seguintes tarefas:

-   Todas as funcionalidades descritas no nível "intermédio"
-   Implementar uma _view_ que permita criar um _post_:
    -   A criação do _post_ permite a enviar os seguintes dados:
        -   Fotografia (obrigatório)
        -   Legenda (opcional)
    -   O envio do _post_ para o servidor será iniciado através de um botão, para submeter os dados para API
    -   Se o _post_ for criado com sucesso, a aplicação deve voltar à página inicial, recarregando a lista de _posts_
-   Implementar, na _view_ que mostra os detalhes do _post_, a funcionalidade de apagar um _post_:
    -   Só se pode apagar _posts_ cujo _UserName_ seja igual ao utilizador atual (existe um _endpoint_ que dá os detalhes do user atual)
    -   Se o _post_ for apagado com sucesso, a aplicação deve voltar à página inicial, recarregando a lista de _posts_

## Outros factores de avaliação

Além das funcionalidades descritas acima, serão avaliados os seguintes aspectos:

-   Qualidade do código:
    -   Formatação
    -   Qualidade da documentação (comentários)
    -   Organização do código em ficheiros, funções, classes, componentes, etc.
-   Aspecto:
    -   Uso de cores
    -   Layout
    -   Tipografia (tipos de letra)
-   Repositório:
    -   Uso do GitHub (qualidade e conteúdo dos commits)
-   Defesa:
    -   Qualidade das respostas dadas às perguntas feitas pelo professor, durante a defesa
-   Uso de funcionalidades, paradigmas, e bibliotecas que não foram leccionadas nas aulas

## FAQ

### Posso implementar funcionalidades de vários níveis?

Sim. A lista de "níveis" serve como guia. O aluno pode escolher implementar funcionalidades de vários "níveis" ao mesmo tempo, por exemplo, fazer as funcionalidades dos níveis "básico" e "básico +", e usar a API privada e implementar a funcionalidade de "like", que requer autenticação, por exemplo. A nota final desta parte refletirá isto.

Da mesma forma, se não implementar uma ou mais funcionalidades de um nível (ex: não implementar a criação de posts), será cotado aquilo que estiver feito. O mesmo se aplica na componente de back-end/API.

### Sou obrigado a usar React?

Não. Pode-se usar outras bibliotecas/frameworks equivalentes, como:

-   Vue (https://vuejs.org/)
-   Angular (https://angular.io/)
-   Ember (https://emberjs.com/)

O aluno pode também optar por não usar nenhuma biblioteca ou framework.

### Posso usar bibliotecas como o Bootstrap, ou outras bibliotecas de terceiros?

Sim, desde que se indique, na defesa, quais bibliotecas foram usadas.

### A aplicação tem que funcionar em que browsers?

A aplicação deve funcionar nos browsers "modernos", isto é, Chrome, Firefox, Edge, e Safari. Durante a defesa, o professor irá usar o Chrome ou Firefox para fazer os testes.

Não será dado nenhum bónus se a aplicação funcionar no Internet Explorer, por isso não vale a pena estarem a perder o vosso tempo.

### Posso usar outro tema?

Claro! Isto é apenas uma sugestão.

### Posso entregar apenas a parte de front-end em exame, e depois a parte de back-end em recurso?

Sim. O aluno deve gerir o seu tempo da melhor forma que quiser.

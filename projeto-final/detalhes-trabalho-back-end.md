# Back-end/API

Pretende-se desenvolver uma API que dê suporte à aplicação desenvolvida para a parte de front-end.

A parte de back-end/API terá uma cotação até `5 valores`.

## Obrigatoriedade

Esta parte do trabalho é opcional, se o aluno optar por escolher o tema dado pelo professor. De notar que a nota final do projeto será, no máximo, `15 valores`, já que esta componente do projeto será cotada com `0 valores`.

## Template

Está disponível um _template_ do projeto, com a base de dados já preparada e alguma configuração no `Startup`, no seguinte link: `???`.

## Níveis de avaliação

As seguintes sub-secções servem como "guia" para o aluno saber as funcionalidades que deve implementar.

### Básico

Nota esperada: até `1.5 valores`.

Para o nível "básico", a API deve desempenhar as seguintes tarefas:

-   Disponibilizar um _endpoint_ que obtém uma lista de _posts_, em formato JSON:
    -   Cada _post_ deve ter os seguintes dados:
        -   ID
        -   Utilizador que criou o _post_
        -   Data de publicação
        -   Número de _likes_
        -   Número de comentários
        -   Legenda
        -   Link para a fotografia
-   Disponibilizar um _endpoint_ que obtém um único _post_, em formato JSON, através do seu ID:
    -   Se o _post_ não existir, a API deve devolver um erro adequado
    -   O objeto resultante deve ter os seguintes dados:
        -   ID
        -   Utilizador que criou o _post_
        -   Data de publicação
        -   Número de _likes_
        -   Link para a fotografia
        -   Legenda
        -   Lista de comentários, disponibilizando para cada um:
            -   Conteúdos do comentário
            -   Utilizador
            -   Data de publicação do comentário
-   Opcionalmente, disponibilizar um _endpoint_ que devolve os conteúdos da imagem de um _post_. O aluno pode optar por usar a funcionalidade de ficheiros estáticos da _framework_ que usar.

### Básico +

Nota esperada: até `2 valores`.

Para o nível "básico +", a API deve desempenhar as seguintes tarefas:

-   Disponibilizar todos os _endpoints_ do nível básico
-   Modificar o _endpoint_ da lista de _posts_ para que possa receber um termo de pesquisa. O termo de pesquisa é opcional, e se constar no pedido do cliente, deve ser usado para pesquisar nos seguintes dados de cada _post_:
    -   Nome do Utilizador que criou o _post_
    -   Legenda do _post_

### Intermédio

Nota esperada: até `3.5 valores`.

Para o nível "intermédio", a API deve desempenhar as seguintes tarefas:

-   Disponibilizar todos os _endpoints_ do nível "básico +"
-   Implementar autenticação mediante _UserName_ e _Password_:
    -   A persistência da autenticação pode ser feita através de Cookies (simples), ou JWT (avançado).
    -   Fazer uso dos mecanismos de autenticação e autorização da _framework_ para restringir o acesso aos _endpoints_ criados anteriormente apenas para utilizadores autenticados
-   Disponibilizar um _endpoint_ que permite comentar num _post_:
    -   O _endpoint_ deve receber os conteúdos do comentário.
    -   As informações do utilizador devem ser obtidas através da autenticação atual.
-   Disponibilizar um _endpoint_ que permite ativar ou desativar o _like_ num post:
    -   Se o _post_ já tiver um _like_ para o utilizador atual, então o _like_ deve ser removido
    -   Caso contrário, o _like_ deve ser adicionado na base de dados

### Avançado

Nota esperada: até `5 valores`.

Para o nível "avançado", a API deve desempenhar as seguintes tarefas:

-   Disponibilizar todos os _endpoints_ do nível "intermédio"
-   Implementar um _endpoint_ que permite adicionar um _post_:
    -   Um post é criado com base na fotografia (obrigatório) e uma legenda (opcional)
    -   O envio dos dados deve fazer uso de `multipart/form-data` por questões de eficiência
    -   A fotografia deve ser guardada em _file system_ de forma a ser fácilmente obtida posteriormente
    -   Os dados do utilizador que cria o _post_ são obtidos através da variável do user atual.
-   Implementar um _endpoint_ que permite apagar um _post_, dado o seu ID:
    -   Só o utilizador que criou o _post_ é que o pode apagar
    -   Apagar um _post_ implica apagar também os seus _likes_, comentários, e fotografia.

## Outros factores de avaliação

Além das funcionalidades descritas acima, serão avaliados os seguintes aspectos:

-   Qualidade do código:
    -   Formatação
    -   Qualidade da documentação (comentários)
    -   Organização do código em ficheiros, funções, classes, controllers, etc.
-   Repositório:
    -   Uso do GitHub (qualidade e conteúdo dos commits)
-   Defesa:
    -   Qualidade das respostas dadas às perguntas feitas pelo professor, durante a defesa
-   Uso de funcionalidades, paradigmas, e bibliotecas que não foram leccionadas nas aulas

## FAQ

### Posso implementar funcionalidades de vários níveis?

Sim. A lista de "níveis" serve como guia. O aluno pode escolher implementar funcionalidades de vários "níveis" ao mesmo tempo, por exemplo, fazer as funcionalidades dos níveis "básico" e "básico +", e implementar apenas autenticação do nível "intermédio". A nota final desta parte refletirá isto.

Da mesma forma, se não implementar uma ou mais funcionalidades de um nível (ex: não implementar a criação de posts), será cotado aquilo que estiver feito. O mesmo se aplica na componente de front-end.

### Sou obrigado a usar ASP.NET Core?

Não. Pode-se também usar ASP.NET MVC (i.e., o que foi dado nas aulas do Professor José Casimiro Pereira).

### Posso usar outro sistema de gestão de base de dados que não o SQL Server?

Sim. Ficam alguns exemplos:

-   MySQL
-   MongoDB

### Sou obrigado a usar um OR/M (ex: Entity Framework Core)?

Não. Podem fazer "SQL Puro", desde que seja feito de forma segura (**concatenação de SQL com variáveis provenientes do utilizador resulta em reprovação imediata na cadeira**).

O "grau de pureza" do SQL não será avaliado, apenas a "qualidade" das queries.

### Posso usar outro tema?

Claro! Isto é apenas uma sugestão.

### Posso entregar apenas a parte de front-end em exame, e depois a parte de back-end em recurso?

Sim. O aluno deve gerir o seu tempo da melhor forma que quiser.

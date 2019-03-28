# Exercício - Converter aplicação de TODOs para usar AJAX

Objetivos:

-   Aprender a usar AJAX para ler e escrever dados para um servidor

## Pré-requisitos

É necessário um servidor HTTP para este exercício, não é possível trabalhar com o ficheiro diretamente aberto no browser. Isto porque não é possível usar AJAX com ficheiros abertos diretamente (questões de segurança).

### Opção 1: Usar o Visual Studio (não o Code)

Nesta opção, criam um Web Site no Visual Studio, e abrem-no com o Debug.

### Opção 2: Node + `http-server`

Isto requer o Node.js instalado.

Numa linha de comandos, executar o seguinte comando para instalar a ferramenta:

```
npm install -g http-server
```

Nota: em macOS / Linux, poderá ser necessário usar o `sudo`.

Depois, na pasta com os ficheiros, numa linha de comandos:

```
http-server
```

O "site" fica disponível em http://localhost:8080/, devem adicionar no caminho o "link" para o ficheiro que querem abrir. `Ctrl+C` pára o servidor.

## API

A documentação da API / Web Service está disponível aqui: https://github.com/ipt-ti2-2018-2019/TodoApiAjax

Em aulas futuras, iremos implementar a mesma API (mas com uma BD real)

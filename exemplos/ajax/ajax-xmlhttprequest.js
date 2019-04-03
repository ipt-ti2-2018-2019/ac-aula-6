function getTarefasXHR() {
    let linkTarefas =
        "https://ipt-ti2-todo.azurewebsites.net/api/todos/afecarvalho";

    let xhr = new XMLHttpRequest();

    // Configurar o objeto XHR para fazer um GET (ler) os dados no link acima
    xhr.open("GET", linkTarefas);

    // Adicionar event listeners para leitura da resposta e erro de rede
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Ler o texto da resposta e interpretar como objetos
            let tarefas = JSON.parse(xhr.responseText);

            // Mostar as tarefas.
            mostraTarefasXHR(tarefas);
        } else {
            mostraErro(
                "Erro, código de resposta não foi 200, foi " + xhr.status
            );
        }
    };

    xhr.onerror = () => {
        mostraErro("Erro de rede no XHR");
    };

    // Enviar o pedido.
    xhr.send();
}

function mostraTarefasXHR(tarefas) {
    let container = document.querySelector("#tarefasXHR");

    // Limpar a lista
    container.innerHTML = "";

    // Preencher dados na interface gráfica
    for (let tarefa of tarefas) {
        let liTarefa = document.createElement("li");

        liTarefa.textContent = tarefa.description;

        container.appendChild(liTarefa);
    }
}

function mostraErroXHR(erro) {
    console.error(erro);
}

document.querySelector("#btnXHR").addEventListener("click", evt => {
    // Ler dados (e fazer tudo o resto)
    getTarefasXHR();
});

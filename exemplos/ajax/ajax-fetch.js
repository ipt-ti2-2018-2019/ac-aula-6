function getTarefasFetch() {
  let linkTarefas = "https://ipt-ti2-todo.azurewebsites.net/api/todos/afecarvalho";

  // Lançar o pedido
  return (
    fetch(linkTarefas)
      // Tratar da resposta
      .then(resposta => {
        // .ok indica se o status code indica sucesso (200 - 399)
        if (resposta.ok) {
          // Ler os dados como JSON.
          return resposta.json();
        }

        // Erro caso contrário
        return Promise.reject("Erro " + resposta.status + " ao obter tarefas");
      })
  );
  // Podia adicionar um .catch antes do ';' se quisesse tratar de erros de rede.
}

function mostraTarefasFetch(tarefas) {
  let container = document.querySelector("#tarefasFetch");

  // Limpar a lista
  container.innerHTML = "";

  // Preencher dados na interface gráfica
  for (let tarefa of tarefas) {
    let liTarefa = document.createElement("li");

    liTarefa.textContent = tarefa.description;

    container.appendChild(liTarefa);
  }
}

function mostraErroFetch(erro) {
  console.error(erro);
}

document.querySelector("#btnFetch").addEventListener("click", evt => {
  // Ler dados
  getTarefasFetch()
    // Fazer algo com os dados
    .then(tarefas => mostraTarefasFetch(tarefas))
    // Tratamento de erros lançados por qualquer um dos passos acima.
    .catch(erro => {
      mostraErroFetch(erro);
    });
});

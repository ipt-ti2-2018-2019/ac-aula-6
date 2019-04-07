let linkApi = "https://ipt-ti2-todo.azurewebsites.net";

function getTodos() {
  // Se uma função usa Promises (ex: fetch)
  // então deve devolver Promises
  return fetch(linkApi + "/api/todos/afecarvalho", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  }).then(resposta => {
    if (resposta.status === 200) {
      return resposta.json();
    } else {
      return Promise.reject(resposta);
    }
  });
}

function addTodo(texto) {
  let novaTarefa = {
    description: texto
  };

  return fetch(linkApi + "/api/todos/afecarvalho", {
    method: "POST",
    headers: {
      // Vou enviar json
      "Content-Type": "application/json",
      // Quero que me envies json
      Accept: "application/json"
    },
    // Dados a enviar, como JSON
    body: JSON.stringify(novaTarefa)
  }).then(respostaCriacao => {
    if (respostaCriacao.status === 200) {
      // Ler os dados da nova tarefa
      return respostaCriacao.json();
    } else {
      // Erro!!
      return Promise.reject(respostaCriacao);
    }
  });
}

// main
document.addEventListener("DOMContentLoaded", () => {
  getTodos()
    .then(tarefas => mostraTarefas(tarefas))
    .catch(erro => {
      console.error("Erro ao obter as tarefas!!!", erro);
    });
});

document.querySelector("#addTodoForm").addEventListener("submit", evt => {
  // Impedir que o browser submeta o formulário por nós...
  evt.preventDefault();

  let texto = document.querySelector("#todoText").value;

  addTodo(texto)
    .then(novaTarefa => {
      // TODO mostrar tarefa :)
      console.log("Foi criada a tarefa", novaTarefa, "agora tenho que mostrar...");
    })
    .catch(erroInsercao => {
      console.error("Erro ao criar a tarefa", erroInsercao);
    });
});

function mostraTarefas(tarefas) {
  let lista = document.getElementById("listaTarefas");

  for (let tarefa of tarefas) {
    let liAux = document.createElement("li");

    liAux.textContent = tarefa.description;

    lista.appendChild(liAux);
  }
}

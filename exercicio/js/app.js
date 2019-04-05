let linkApi = "http://localhost:5000";

function getTodos() {
  return fetch(linkApi + "/api/todos/afecarvalho", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  }).then(resposta => {
    if (resposta.status === 200) {
      return resposta.json();
    } else {
      // throw resposta;
      return Promise.reject(resposta);
    }
  });
}

function addTodo(todo) {
  return fetch(linkApi + "/api/todos/afecarvalho", {
    method: "POST",
    headers: {
      // Vou enviar JSON
      "Content-Type": "application/json",
      // Quero JSON na resposta
      Accept: "application/json"
    },
    body: JSON.stringify(todo)
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json(); // Nova tarefa criada
    } else {
      return Promise.reject(resposta); // Erro (ex: campo errado)
    }
  });
}

// main
document.addEventListener("DOMContentLoaded", () => {
  console.log("Estou a ir buscar as tarefas");

  let todosPromise = getTodos();

  console.log("Fiz o pedido");

  todosPromise
    .then(tarefas => {
      console.log("Recebi tarefas: ", tarefas);
      mostraTarefas(tarefas);
    })
    .catch(erro => {
      console.error("Erro obter tarefas", erro);
    });

  console.log("Depois do then e do catch");
});

document.querySelector("#addTodoForm").addEventListener("submit", evt => {
  // Impede que o browser faça a ação por defeito (ex: submeter o form)
  evt.preventDefault();

  // TO DO -- adicionar uma tarefa através de AJAX e apresentar no ecrã
  let texto = document.querySelector("#todoText").value;

  let novaTarefa = {
    description: texto
  };

  addTodo(novaTarefa)
    .then(tarefaCriada => {
      console.log("Criei a tarefa", tarefaCriada);

      // Falta aqui mostrar a nova tarefa no ecrã.
    })
    .catch(erro => {
      console.error("Erro na criação", erro);
    });
});

function mostraTarefas(tarefas) {
  let lista = document.querySelector("#listaTarefas");

  for (let tarefa of tarefas) {
    let liAux = document.createElement("li");

    liAux.textContent = tarefa.description;

    lista.appendChild(liAux);
  }
}

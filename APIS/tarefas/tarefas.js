// Você está desenvolvendo uma API para um aplicativo de gerenciamento de tarefas e deseja implementar a funcionalidade de busca de tarefas concluídas. Complete o código abaixo para criar a rota correta.

// Instruções:
// - O endpoint deve ser "/tarefas".
// - Na variável tarefasConcluidas, utilize .filter para encontrar todas as tarefas concluídas.
// - Envie a lista de tarefas encontradas como resposta para o front-end no formato JSON.
// - Execute o método listen para abrir a porta da API.

import express from "express";
const app = express();

const tarefas = [
  { id: 1, descricao: "Tarefa 1", concluida: true },
  { id: 2, descricao: "Tarefa 2", concluida: false },
  { id: 3, descricao: "Tarefa 3", concluida: true },
  { id: 4, descricao: "Tarefa 4", concluida: false },
  { id: 5, descricao: "Tarefa 5", concluida: true },
];

app.get("/tarefas", (req, res) => {
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);
  res.json(tarefasConcluidas);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

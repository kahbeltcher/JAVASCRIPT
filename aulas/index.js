// Importando o módulo Express
const express = require("express");
// Criando uma instância do aplicativo Express
const app = express();

// Importando o módulo escola que contém a função hojeTemAula
const escola = require("./escola");

// Definindo uma rota para a raiz "/"
app.get("/", (req, res) => {
  // Chamando a função hojeTemAula do módulo escola para verificar se hoje tem aula
  let temAula = escola.hojeTemAula();

  // Retornando a resposta como um JSON com a chave "temAula" e o valor da variável temAula
  res.json({ temAula: temAula });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

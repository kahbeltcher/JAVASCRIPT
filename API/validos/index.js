// Importando o módulo Express
const express = require("express");
// Criando uma instância do aplicativo Express
const app = express();

// Importando o módulo verificaDados que contém a função validaNome
const verificaDados = require("./verificaDados");

// Definindo uma rota para a raiz "/"
app.get("/", (req, res) => {
  // Obtendo o valor do parâmetro "nome" da URL usando req.query
  let nome = req.query.nome;

  // Chamando a função validaNome do módulo verificaDados
  let valido = verificaDados.validaNome(nome);

  // Retornando a resposta como um JSON com a chave "nomeValido" e o valor da validação
  res.json({ nomeValido: valido });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

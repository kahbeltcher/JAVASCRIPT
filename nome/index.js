// Importando o módulo Express
const express = require("express");
// Criando uma instância do aplicativo Express
const app = express();

// Importando o módulo verificaDados
const verificaDados = require("./verificaDados");

// Definindo uma rota para a raiz "/"
app.get("/", (req, res) => {
  // Obtendo o parâmetro de consulta "nome" da requisição
  let nome = req.query.nome;

  // Chamando a função validaNome do módulo verificaDados para validar o nome
  let nomeValido = verificaDados.validaNome(nome);

  // Retornando a resposta como um JSON com a chave "nomeValido" e o valor da variável nomeValido
  res.json({ nomeValido: nomeValido });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

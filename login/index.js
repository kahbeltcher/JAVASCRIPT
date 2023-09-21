// Importando o módulo Express
const express = require("express");
// Criando uma instância do aplicativo Express
const app = express();

// Importando o módulo dadosLogin
const dadosLogin = require("./dadosLogin");

// Definindo uma rota para a raiz "/"
app.get("/", (req, res) => {
  // Obtendo os parâmetros de consulta "login" e "senha" da requisição
  let login = req.query.login;
  let senha = req.query.senha;
  
  // Chama a função fazAutenticacao do módulo dadosLogin para realizar autenticação
  let autenticacao = dadosLogin.fazAutenticacao(login, senha);

  // Retorna a resposta como um JSON com a chave "autenticacao" e o valor da variável autenticacao
  res.json({ autenticacao: autenticacao });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

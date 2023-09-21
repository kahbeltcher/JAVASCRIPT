// Importando o módulo Express
const express = require('express');
// Criando uma instância do aplicativo Express
const app = express();

// Importando o módulo sugestaoFilmes que contém a função sugereFilmeSemana
const sugestaoFilmes = require('./sugestaoFilmes');

// Definindo uma rota para a raiz "/"
app.get('/', (req, res) => {
  // Chamando a função sugereFilmeSemana do módulo sugestaoFilmes
  let filmeSugerido = sugestaoFilmes.sugereFilmeSemana();
  
  // Retornando a resposta como um JSON com a chave "filme" e o valor da sugestão de filme
  res.json({ filme: filmeSugerido });
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  let data = new Date();
  console.log('Servidor node iniciado em: ' + data);
});

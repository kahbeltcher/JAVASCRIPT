
const express = require('express');
const app = express();

const filmes = [
  { nome: 'Vingadores' },
  { nome: 'Liga da Justiça' },
  { nome: 'Capitão América: Guerra Civil' },
  { nome: 'Harry Potter e o enigma do príncipe' },
  { nome: 'Your Name.' },
  { nome: 'Naruto: Road to Boruto' },
  { nome: 'Thor: Ragnarok' }
];

const data = new Date();
const diaSemana = data.getDay();

const filme = filmes[diaSemana];

app.get('/', (req, res) => {
  res.json({ sugestao: filme });
});

app.listen(8080, () => {
  console.log('Servidor iniciado');
  console.log(filme)
});
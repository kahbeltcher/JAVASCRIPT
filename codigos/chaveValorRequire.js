const express = require("express");
const app = express();

const filmes = [
  { nome: "Vingadores" },
  { nome: "Liga da Justiça" },
  { nome: "Capitão América: Guerra Civil" },
  { nome: "Harry Potter e o enigma do príncipe" },
  { nome: "Your Name." },
  { nome: "Naruto: Road to Boruto" },
  { nome: "Thor: Ragnarok" },
];

let data = new Date();

let dia_semana = data.getDay();

let filme = filmes[dia_semana].nome;

app.get("/", (req, res) => {
  res.json({ sugestao: filme });
});

app.listen(8080, () => {
  console.log(filme);
});

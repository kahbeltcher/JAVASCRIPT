const express = require("express");
const app = express();

let verificaDados = require("./verificaDados");
app.get("/", (req, res) => {
  let telefone = req.query.telefone;
  let valido = verificaDados.validaTelefone(telefone);
  res.json({ telefoneValido: valido });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

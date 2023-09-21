const express = require("express");
const app = express();

let celular = "(21)9990099-9999";

app.get("/", (req, res) => {
  const valido = celular.length === 14 ? true : false;
  res.json({ telefone: valido });
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});

const express = require("express");
const app = express();

let idade = 17;
let alistamento;

if (idade == 17) {
  alistamento = { alistamento: "sim" };
} else {
  alistamento = { alistamento: "não" };
}

app.get("/", (req, res) => {
  res.json({ alistamento });
});

app.listen(8080, () => {
  console.log("Servidor iniciado");
});

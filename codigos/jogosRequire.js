const express = require("express");
const app = express();

let jogos = ["Gears 5", "Halo Infinite", "Perfect Dark", "Forza Horizon"];
let jogo_escolhido = jogos[2];

let jogo_json = { jogo: jogo_escolhido };

app.get("/", (req, res) => {
  res.json(jogo_json);
});

app.listen(8080, () => {
  console.log(jogo_json);
});
//npm install express

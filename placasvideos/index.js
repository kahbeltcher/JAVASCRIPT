const express = require("express");
const app = express();

const placasVideo = require("./placasVideo.js");

app.get("/", (req, res) => {
  let modelo = req.query.modelo;

  // Chamar a função da camada de serviço para obter o fabricante da placa de vídeo
  let fabricante = placasVideo.retornaFabricantePlaca(modelo);

  // Retornar o fabricante como um JSON para o front-end
  res.json({ fabricante: fabricante });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});

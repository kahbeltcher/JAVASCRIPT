// Imagine que você esteja construindo uma API para uma loja virtual e deseja implementar uma funcionalidade de busca por categoria. Complete o código abaixo para criar a rota correta para buscar produtos por categoria.

// Instruções:
// - O endpoint deve ser "/produtos".
// - A categoria fornecida deve ser acessada como parâmetro de consulta (query parameter) chamado "categoria".
// - Consuma a função produtosPorCategoria passando a categoria como parâmetro.
// - Envie a lista de produtos como resposta para o front-end no formato JSON.

import express from "express";
const app = express();
import produtosPorCategoria from "./servico.js";

app.get("/produtos", (req, res) => {
  const categoria = req.query.categoria;
  const produtos = produtosPorCategoria(categoria);
  res.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

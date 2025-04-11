import express from 'express';

const app = express();

const produtos = [
  { codigo: 'A01', nome: 'Camiseta', preco: 30 },
  { codigo: 'A02', nome: 'Calça Jeans', preco: 80 },
  { codigo: 'A03', nome: 'Tênis', preco: 150 },
  { codigo: 'A04', nome: 'Boné', preco: 20 },
];

app.get('/produto/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  const produto = produtos.find(produto => produto.codigo === codigo);

  if (produto) {

    res.json(produto);

  } else {

    res.status(404).send();  }});

  app.listen(8080, () => {
    
    console.log('Servidor iniciado na porta 8080');
  });
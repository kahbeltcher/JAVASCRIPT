import express from 'express';
import avaliarDesempenho  from './servico.js';

const app = express();

app.get('/', (req, res) =>  {
  const desempenho = req.query.desempenho; 
  const mensagem = avaliarDesempenho(desempenho); 
  const dataAtual = new Date(); 

  
res.json({ mensagem: mensagem, dataAtual: dataAtual });});

app.listen(8080, () => {
  let data = new Date();
  console.log('Servidor node iniciado em: ' + data);
});
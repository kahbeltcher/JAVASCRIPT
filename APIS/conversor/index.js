import express from 'express';
import celsiusParaFahrenheit from './servico.js';

const app = express();

app.get('/', (req, res) => {
  const celsius = parseFloat(req.query.celsius);

  const fahrenheit = celsiusParaFahrenheit(celsius);
    
  res.json({ fahrenheit: fahrenheit });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em:' + data);
});
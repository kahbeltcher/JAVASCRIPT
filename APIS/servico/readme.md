# Projeto História em Express

Este projeto é um servidor Express.js que fornece informações históricas com base no ano especificado. Ele importa um conjunto de fatos históricos de um arquivo e permite que os usuários obtenham informações sobre um determinado ano através de uma solicitação HTTP GET.

## Funcionalidades

- O trecho abaixo de código está configurando um endpoint HTTP GET para a rota raiz ("/"). Quando um cliente faz uma solicitação GET para a raiz com um parâmetro de consulta "ano", o servidor executa a função servicoBuscarFatoPorAno para encontrar o fato histórico correspondente ao ano especificado e, em seguida, retorna o fato histórico em formato JSON como resposta.

* Os fatos históricos são armazenados em um arquivo `fatos.js`.

```javascript
app.get("/", (req, res) => {
  let anoFato = req.query.ano;

  let fato = servicoBuscarFatoPorAno(anoFato);

  res.json({ ano: fato });
});
```

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/): Plataforma de tempo de execução JavaScript utilizada para executar o servidor.
- [Express.js](https://expressjs.com/): Framework web utilizado para criar o servidor e definir rotas.
- JavaScript: Linguagem de programação utilizada para implementar a lógica do servidor.

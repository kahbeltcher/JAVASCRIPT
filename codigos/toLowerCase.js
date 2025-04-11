import express from 'express';
const app = express();

const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Pedro" },
  { id: 4, nome: "Ana" },
  { id: 5, nome: "Carlos" },
  { id: 6, nome: "Mariana" },
];

app.get('/usuarios', (req, res) => {
  const nome = req.query.nome;

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nome.toLowerCase().includes(nome.toLowerCase())

  );

  res.json(usuariosFiltrados 
);});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});
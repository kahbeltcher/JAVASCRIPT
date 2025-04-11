// Complete o código abaixo para a rota buscar corretamente na coleçã//o
//"usuarios", as informações de um usuário com base no seu ID, conforme o
// padrão REST.
// OBS: Caso o ID seja inválido, a rota deve retornar o código de status 
//404.

const usuarios = [
  { id: 1, nome: 'José', idade: 12 },
  { id: 2, nome: 'Eliana', idade: 20 },
  { id: 3, nome: 'Juliana', idade: 42 },
  { id: 4, nome: 'Enzo', idade: 38 },
  { id: 5, nome: 'Gabriel', idade: 17},
  ...
];


app.get('/usuarios/:id', (req, res) => {
  const usuarioId = req.params.id;
  const usuario = usuarios.find(usuario => usuario.id == usuarioId );

  if (usuario) {
	res.json(usuario);
  } else {
	res.status(404).json({ mensagem: 'Usuário não encontrado' }); }
});
//Considerando a coleção abaixo, complete o código para que ele realize uma busca por id
// e retorne o livro correspondente em formato JSON. Caso o livro não seja encontrado, 
//a rota deve retornar o código de erro 404.
const livros = [
    { id: 1, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' },
    { id: 2, titulo: '1984', autor: 'George Orwell' },
    { id: 3, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen' },
    { id: 4, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez' },
  ];
  
  digite('livros/:id', (req, res) => {
    const id = Number(req.params.id);
    const livro = livros.find(livro =>livro.id === id);
  
    if (livro) {
      res.json(livro)
  ;
    } else {
      
      res.status(404).send();
    }
  });
 
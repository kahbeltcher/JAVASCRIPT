const linguagens = [
    { id: 1, nome: 'PHP', versaoAtual: 7.5 },
    { id: 2, nome: 'C#', versaoAtual: 9 },
  ];
  
  for( const linguagem of linguagens) {
  
    console.log( linguagem.nome + ': ' + linguagem.versaoAtual);
  }
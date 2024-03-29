
const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
    { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
    { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
  ];
  
  const totalPS4 = jogos.reduce((total,jogo) => {
    const valorSomar = jogo.plataforma == 'Fliperama' ? 1 : 0 ;
    
    return total + valorSomar;
  }, 0);
  
  console.log("Possui: " + totalPS4 + " unidades!");
  // se 'PS4' retorna = possui: 2 unidades !
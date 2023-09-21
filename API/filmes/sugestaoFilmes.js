// Função que sugere um filme para cada dia da semana
function sugereFilmeSemana() {
  // Obtém a data atual
  let data = new Date();
  // Obtém o dia da semana (0 para Domingo, 1 para Segunda, ..., 6 para Sábado)
  let diaSemana = data.getDay();

  let filme;

  // Seleciona um filme com base no dia da semana usando um switch
  switch (diaSemana) {
    case 0:
      filme = "Vingadores";
      break;

    case 1:
      filme = "Liga da Justiça";
      break;

    case 2:
      filme = "Harry Potter";
      break;

    case 3:
      filme = "Senhor dos Anéis";
      break;

    case 4:
      filme = "Capitão América";
      break;

    case 5:
      filme = "Homem de Ferro";
      break;

    case 6:
      filme = "Superman";
      break;
  }

  return filme; // Retorna o filme sugerido para o dia da semana atual
}

// Exporta a função "sugereFilmeSemana" para que possa ser utilizada em outros módulos
exports.sugereFilmeSemana = sugereFilmeSemana;

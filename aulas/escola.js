// Função que verifica se hoje tem aula com base no dia da semana
function hojeTemAula() {
  // Obtém a data atual
  let data = new Date();

  // Obtém o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
  let diaSemana = data.getDay();

  // Variável para armazenar a resposta se hoje tem aula ou não
  let resposta;

  // Usa um switch para determinar se hoje tem aula, com base no dia da semana
  switch (diaSemana) {
    case 0: // Domingo
    case 6: // Sábado
      resposta = false; // Não há aula
      break;

    default: // Qualquer outro dia da semana (Segunda a Sexta)
      resposta = true; // Há aula
      break;
  }

  return resposta; // Retorna a resposta sobre ter ou não aula
}

// Exporta a função "hojeTemAula" para que possa ser utilizada em outros módulos
exports.hojeTemAula = hojeTemAula;

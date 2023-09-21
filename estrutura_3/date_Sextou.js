const dataAtual = new Date("2023-02-17");

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

if (diaSemana === 5 && diaMes === 13) {
  console.log(diaSemana +"\n" + diaMes)
  console.log('Cuidado! Hoje é sexta-feira 13');
} else if (diaSemana === 5) {
  console.log(diaSemana +"\n" + diaMes)
  console.log('Sextou!!!');
}
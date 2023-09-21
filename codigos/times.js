let tabela = [
  { time: "Azul", pontos: 46 }, // deve imprimir : azul,verde,rosa
  { time: "Amarelo", pontos: 39 },
  { time: "Verde", pontos: 52 },
  { time: "Rosa", pontos: 49 },
  { time: "Laranja", pontos: 37 },
  { time: "Roxo", pontos: 23 },
];

function verificaTimesClassificados(time) {
  return time.pontos >= 40;
}

let timesClassificados = verificaTimesClassificados;

timesClassificados((time) => {
  console.log(timesClassificados);
});

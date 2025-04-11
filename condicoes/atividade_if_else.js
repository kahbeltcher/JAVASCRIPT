const nivelDeSatisfacaoDoPaulo = (atividades) => {
  const pontosDeSatisfacao = atividades.reduce((pontos, atividade) => {
    pontos +=
      atividade === "Trabalhar"
        ? 5
        : atividade === "Dormir"
        ? 15
        : atividade === "Comer"
        ? 25
        : atividade === "Jogar"
        ? 50
        : null;
  }, 0);

  pontosDeSatisfacao <= 30
    ? "Triste!"
    : pontosDeSatisfacao <= 70
    ? "Entediado!"
    : pontosDeSatisfacao <= 100
    ? "Feliz!"
    : "Super Feliz!";
};
nivelDeSatisfacaoDoPaulo(70);
console.log(pontosDeSatisfacao)

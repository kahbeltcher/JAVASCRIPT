function nivelDeSatisfacaoDoPaulo (atividades){
    let pontosDeSatisfacao = 0;
  
    for(let i = 0; i < atividades.length; i++){
      const atividadeAtual = atividades[i];
  
      if (atividadeAtual === "Trabalhar") {
        pontosDeSatisfacao += 5
      } else if (atividadeAtual === "Dormir") {
        pontosDeSatisfacao += 15
      } else if (atividadeAtual === "Comer") {
        pontosDeSatisfacao += 25
      } else if (atividadeAtual === "Jogar") {
        pontosDeSatisfacao += 50
      }
    }
  
    if (pontosDeSatisfacao <= 30) {
      return 'Triste!'
    } else if (pontosDeSatisfacao > 30 && pontosDeSatisfacao <= 70) {
      return 'Entediado!'
    } else if (pontosDeSatisfacao > 70 && pontosDeSatisfacao <= 100) {
      return 'Feliz!'
    } else if (pontosDeSatisfacao > 100 ) {
      return 'Super Feliz!'
    }
  }
  
  console.log(nivelDeSatisfacaoDoPaulo(["Trabalhar", "Trabalhar", "Trabalhar", "Dormir"]));
  console.log(nivelDeSatisfacaoDoPaulo(["Dormir", "Comer", "Trabalhar", "Comer"]));
  console.log(nivelDeSatisfacaoDoPaulo(["Trabalhar", "Comer", "Dormir", "Jogar"]));
  console.log(nivelDeSatisfacaoDoPaulo(["Jogar", "Jogar", "Jogar", "Jogar"]));
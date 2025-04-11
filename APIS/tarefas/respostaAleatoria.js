
const respostasMagic8Ball = [
    { id: 1, resposta: "Sim, definitivamente." },
    { id: 2, resposta: "É certo." },
    { id: 3, resposta: "Sem dúvida." },
    { id: 4, resposta: "Sim, é provável." },
    { id: 5, resposta: "Parece bom." },
    { id: 6, resposta: "Talvez." },
    { id: 7, resposta: "As perspectivas são boas." },
    { id: 8, resposta: "Não posso prever agora." },
    { id: 9, resposta: "Concentre-se e pergunte novamente." },
    { id: 10, resposta: "Não conte com isso." },
    { id: 11, resposta: "Minha resposta é não." },
    { id: 12, resposta: "Minhas fontes dizem não." },
    { id: 13, resposta: "Parece improvável." },
    { id: 14, resposta: "Muito duvidoso." },
  ];
  
  function obterRespostaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * respostasMagic8Ball.length);
  
    return respostasMagic8Ball[indiceAleatorio].resposta;
  }

  const respostaAleatoria = obterRespostaAleatoria();
  console.log(`Resposta: ${respostaAleatoria}`);

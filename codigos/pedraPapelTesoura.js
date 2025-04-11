function jogoPedraPapelTesoura(opcaoJogador) {
    const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
    const opcaoCPU = opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)];
    
    // return (opcoesDeJogada.includes(opcaoJogador)      
    return( !opcoesDeJogada.find(opcao => opcao === opcaoJogador))
    ? 'Opção inválida. Escolha entre pedra, papel ou tesoura.'
    : (opcaoJogador === opcaoCPU)
    ? `Empate! Ambos escolheram ${opcaoCPU}.`
    : ((opcaoJogador === 'pedra' && opcaoCPU === 'tesoura') ||
        (opcaoJogador === 'papel' && opcaoCPU === 'pedra') ||
        (opcaoJogador === 'tesoura' && opcaoCPU === 'papel'))
        ? `Vitória! ${opcaoJogador} vence ${opcaoCPU}.`
        : `Derrota!  ${opcaoCPU} vence ${opcaoJogador}.`;

}             
let opcaoJogador = 'papel';
console.log(jogoPedraPapelTesoura(opcaoJogador));

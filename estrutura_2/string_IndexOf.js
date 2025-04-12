// Exemplo 1: Encontrar a posição de uma palavra em uma frase
let frase1 = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao1 = frase1.indexOf("sonho");

console.log(posicao1); // 14

// Exemplo 2: Palavra não encontrada
let frase2 = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao2 = frase2.indexOf("esperança");

console.log(posicao2); // -1

// Exemplo 3: Verificar palavras proibidas em um comentário
let expressaoProibida = "passaporte falso";
let comentario = "   venda de PASSAPORTE FALSO   ";

// Normalizar o comentário para evitar problemas de maiúsculas/minúsculas e espaços
comentario = comentario.trim().toLowerCase();

// Verificar se o comentário contém a expressão proibida
if (comentario.includes(expressaoProibida)) {
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}

console.log(comentario); // venda de passaporte falso
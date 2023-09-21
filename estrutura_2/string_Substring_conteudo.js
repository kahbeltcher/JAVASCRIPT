let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = 100;
let resumo = "";

if(tamanho > conteudo.length)
 {

    resumo = conteudo.substring(0, 97);
    resumo += "...";
} 
else {

    resumo = conteudo;

}
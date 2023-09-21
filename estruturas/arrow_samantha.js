const  mensagem_boas_vindas = (nome) => 
{
    let mensagem = "Seja bem-vindo(a) " + nome + "!";
    return mensagem;
}

let mensagem_usuario = mensagem_boas_vindas("Samantha") ; // variavel = funcao + parametro 
console.log(mensagem_usuario); // exibi variavel
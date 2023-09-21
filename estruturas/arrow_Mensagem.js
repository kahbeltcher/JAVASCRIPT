const remove_espacos = ( mensagem ) => {
    
   return mensagem.trim();

}

let frase = "  Estou aprendendo JavaScript        ";

let resultado = remove_espacos(frase);

console.log(resultado);
//---------------------------

const remove_espacos = ( texto ) => {
   return texto.trim();
}

let frase = "  Estou aprendendo funções na linguagem JavaScript        ";

let resultado = remove_espacos(frase);

console.log(resultado);
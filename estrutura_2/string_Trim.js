
let nome = "   Manu     ";

let resultado = nome.trim(); // Recurso - TRIM - remove espaços em branco

console.log(resultado); // Manu

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1.trim() == telefone_2.trim() ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

console.log(telefone_1); // (99) 99999-9999
console.log(telefone_2.trim()); // (99) 99999-9999
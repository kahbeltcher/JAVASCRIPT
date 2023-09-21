let nome_1 = "Anderson";
let nome_2 = "Milena";

nome_1 = nome_1.replace  ("Anderson","Roger");
nome_2 = nome_2.replace ("Milena","Jéssica");

if(nome_1.length > nome_2.length)
{
    console.log(nome_1)
    console.log("O nome 1 é maior");
} else if( nome_1.length < nome_2.length){
    console.log(nome_2)
    console.log("O nome 2 é maior");
} 
else
 {
    console.log("Os dois nomes têm o mesmo tamanho");
}
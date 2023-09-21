import entradaDados from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: \n");

let mi = entradaDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+" milhas equivale a "+km.toFixed(2)+" km");
/*import entradaDados from 'readline-sync';
const nome = entradaDados.question('Digite seu nome: ');

console.log('Olá, '+nome);

import entradaDado from 'readline-sync';

let idade = entradaDado .question('Digite sua idade: ');
console.log("Você tem "+idade+" anos de idade");*/

import Dados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = Dados.question("Informe o valor de x: ")
let y = Dados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);
import { validaPeso, validaAltura } from "./funcoes/pesoAlturaValidacao.js";
import { calculaIMC, retornaStatusIMC } from "./funcoes/calculadoraIMC.js";

let peso = 45;
let altura = 1.5;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if (verificaPesoValido && verificaAlturaValida) {
  let resultado = calculaIMC(peso, altura);
  let statusIMC = retornaStatusIMC(resultado);

  console.log("Seu IMC é " + resultado + " e você está " + statusIMC);
} else {
  console.log("Peso e altura devem ser maiores que zero");
}

// Importando as funções de conversão de moedas do módulo "converteMoedas.js"
import { converteParaReal, converteParaEuro } from "./converteMoedas.js";
// Importando as funções de formatação de moedas do módulo "formataMoedasConvertidas.js"
import {
  formataReal,
  formataEuro,
  formataDolar,
} from "./formataMoedasConvertidas.js";

// Define o conversor que será utilizado ("real" ou "euro")
let conversor = "real";

// Valor em dólar a ser convertido
let dolar = "5.00";
let valor_convertido;

// Verifica qual conversor foi escolhido
if (conversor == "real") {
  // Converte o valor para reais e formata o resultado
  valor_convertido = converteParaReal(dolar);
  valor_convertido = formataReal(valor_convertido);
} else if (conversor == "euro") {
  // Converte o valor para euros e formata o resultado
  valor_convertido = converteParaEuro(dolar);
  valor_convertido = formataEuro(valor_convertido);
}

// Exibe no console o valor em dólar formatado e o valor convertido
console.log("Valor em Dólar: " + formataDolar(dolar));
console.log("Valor convertido: " + valor_convertido);

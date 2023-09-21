// Função que converte dólares para reais
function converteParaReal(dolar) {
  // Taxa de conversão dólar para real
  let taxa_conversao = 5.07;

  // Calcula o valor em reais
  let real = dolar * taxa_conversao;

  return real; // Retorna o valor em reais
}

// Função que converte dólares para euros
function converteParaEuro(dolar) {
  // Taxa de conversão dólar para euro
  let taxa_conversao = 0.83;

  // Calcula o valor em euros
  let euro = dolar * taxa_conversao;

  return euro; // Retorna o valor em euros
}

// Exporta as funções "converteParaReal" e "converteParaEuro"
export { converteParaReal, converteParaEuro };

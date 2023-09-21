// Função que formata um valor em dólar
function formataDolar(dolar) {
  // Adiciona o símbolo de dólar antes do valor
  let valor_formatado = "$ " + dolar;

  return valor_formatado; // Retorna o valor formatado em dólar
}

// Função que formata um valor em real
function formataReal(real) {
  // Adiciona o símbolo de real antes do valor
  let valor_formatado = "R$ " + real;

  return valor_formatado; // Retorna o valor formatado em real
}

// Função que formata um valor em euro
function formataEuro(euro) {
  // Adiciona o símbolo de euro antes do valor
  let valor_formatado = " € " + euro;

  return valor_formatado; // Retorna o valor formatado em euro
}

// Exporta as funções de formatação de moedas
export { formataDolar, formataReal, formataEuro };

// Função que verifica se um carro é da marca Fiat
function retornarCarroFiat(carro) {
  // Retorna true se a propriedade "marca" do carro for igual a "Fiat", caso contrário, retorna false
  return carro.marca == "Fiat";
}

// Exporta a função "retornarCarroFiat" para que possa ser utilizada em outros módulos
export default retornarCarroFiat;

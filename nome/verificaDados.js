// Função que valida um nome com base no seu comprimento
function validaNome(nome) {
  // Verifica se o comprimento do nome é maior ou igual a 1
  // Se for verdadeiro, atribui true à variável "valido"; caso contrário, atribui false
  let valido = nome.length >= 1 ? true : false;
  return valido; // Retorna o resultado da validação
}

// Exporta a função "validaNome" para que possa ser utilizada em outros módulos
exports.validaNome = validaNome;

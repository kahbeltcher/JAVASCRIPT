// Função que valida um nome verificando se não está vazio
function validaNome(nome) {
  // Verifica se o tamanho do nome é maior ou igual a 1 (ou seja, não está vazio)
  let valido = nome.length >= 1 ? true : false;
  
  // Retorna o valor do nome (nota: deveria ser o valor de "valido" em vez de "nome")
  return nome;
}

// Exporta a função "validaNome" para que possa ser utilizada em outros módulos
exports.validaNome = validaNome;

// Complete o código abaixo para que a função transformarNumerosDigitados seja executada corretamente e transforme números digitados (exceto os últimos quatro) em "#". Considere as instruções abaixo:

// - Os números digitados devem ser convertidos para string;
// - Verifique se o tamanho da nova string é menor ou igual a 4;
// * Se for, retorna a própria string;
// * Senão, cria uma nova string que recebe "#" repetido
// [[(SLICE) CONCATENANDO ]] com os quatro últimos caracteres da string original;

function transformarNumerosDigitados(numerosDigitados) {
  let numerosConvertidosParaString = numerosDigitados.ToString();

  if (numerosConvertidosParaString.length <= 4) {
    return numerosConvertidosParaString;
  } else {
    let transformaNumeros =
      "#".repeat(numerosConvertidosParaString.length - 4) +
      numerosConvertidosParaString.slice(-4);
    return transformaNumeros;
  }
}

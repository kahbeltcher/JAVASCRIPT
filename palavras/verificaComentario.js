// Função que verifica se um comentário é válido, não contendo palavras bloqueadas
function verificaComentarioValido(palavrasBloqueadas, comentario) {
  // Inicializa a variável "comentarioValido" como verdadeira por padrão
  let comentarioValido = true;

  // Itera sobre cada palavra bloqueada no array "palavrasBloqueadas"
  palavrasBloqueadas.forEach((palavraBloqueada) => {
    // Verifica se a palavra bloqueada está presente no comentário usando "indexOf"
    // Se a palavra estiver presente, marca o comentário como inválido
    if (comentario.indexOf(palavraBloqueada) > -1) {
      comentarioValido = false;
    }
  });

  return comentarioValido; // Retorna se o comentário é válido ou não
}

// Exporta a função "verificaComentarioValido" para que possa ser utilizada em outros módulos
export default verificaComentarioValido;

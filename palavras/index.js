// Importando o array "palavrasBloqueadas" do módulo "palavrasBloqueadas.js"
import palavrasBloqueadas from "./palavrasBloqueadas.js";
// Importando a função "verificaComentarioValido" do módulo "verificaComentario.js"
import verificaComentarioValido from "./verificaComentario.js";

// Definindo um comentário para ser verificado
let comentario = "Compre aqui seu passaporte falso";

// Verifica se o comentário é válido usando a função "verificaComentarioValido"
if (verificaComentarioValido(palavrasBloqueadas, comentario)) {
  console.log("Seu comentário: " + comentario);
} else {
  console.log("Comentário bloqueado!");
}

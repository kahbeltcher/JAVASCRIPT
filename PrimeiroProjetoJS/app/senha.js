import valida_senha from "./funcoes/validaSenha.js";

let senha = "minhasenha";

if (valida_senha(senha)) {
  console.log("A senha possui no mínimo 10 caracteres");
} else {
  console.log("A senha não possui o mínimo 10 caracteres");
}

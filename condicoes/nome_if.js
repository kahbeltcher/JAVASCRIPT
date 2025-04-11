
let nome = "Jackeline";

let texto = `${nome}! É muito legal!`;
let novoTexto = texto.replace ("legal", "simpática");

console.log(novoTexto);
console.log(novoTexto.length)
 if (novoTexto.length > 20)
 {
	console.log("Texto longo!");
} 
else
 {
	console.log("Texto curto!");
}
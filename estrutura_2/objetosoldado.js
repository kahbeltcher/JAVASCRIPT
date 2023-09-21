import entradaDados from 'readline-sync';

let nome = entradaDados.question("Digite o nome do soldado: ");
let idade = entradaDados.question("Digite a idade do soldado: ");
let email = entradaDados.question("Digite o email do soldado: ");

let soldado = {
    nome: nome,
    idade: idade,
    email: email
};

console.log("Nome: "+soldado.nome);
console.log("Idade: "+soldado.idade);
console.log("Email: "+soldado.email);
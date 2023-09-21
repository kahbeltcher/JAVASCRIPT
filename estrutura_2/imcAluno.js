//coleção
var aluno_academia = {
    id: 10,
    nome: "Karen",
    altura: 1.50,
    peso: 46
};

//variaveis recebem respectivos valores 
var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

// variavel recebe o calculo e é utilizado o metodo tofixed
var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

//imprime o valor do imc
console.log("O IMC do aluno é de: " + imc_aluno);

// se valor menor que 18.5
if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
  
 // se valor maior ou igual a 18.5 e menor ou igual a 24.99   
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
  
 // caso contrario imprima "está acima do peso"   
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}


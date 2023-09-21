//array de string
const produtos = ["Notebook x40", "iPhone X", "Mouse Microsoft"]; 

//array de numeros
const valores = [ 4010.99, 10000.76, 90.15 ]; 

//array de objetos
const itensVenda = [
    { produto: "Notebook x40", valor: 4010.99, ativo: true },
    { produto: "iPhone X", valor: 10000.76, ativo: true },
    { produto: "Mouse Microsoft", valor: 90.15, ativo: false },
];                                                              
console.log("Tipo do array 'produtos': " + typeof produtos);
console.log("Tipo do array 'valores': " + typeof valores);
console.log("Tipo do array 'itensVenda': " + typeof itensVenda);
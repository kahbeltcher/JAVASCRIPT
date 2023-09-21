const colecaoNomes = [
  "Alberto",  // indice 0
  "Alex",    //indice 1
  "Sandro", //indice 2
  "Roberta"//indice 3
];

for (let indice = 0; indice < colecaoNomes.length; indice++) {

  const nomeMaiusculo = colecaoNomes[indice].toUpperCase();

 colecaoNomes[indice] = nomeMaiusculo ;

}

console.log(colecaoNomes);
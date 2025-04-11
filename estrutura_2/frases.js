//Complete o código da função transformarFrase abaixo para 
//que ela receba uma frase como parâmetro e a transforme 
//para cada palavra começar com letra maiúscula.

function transformarFrase(frase) {
  let palavras = frase.split(' ');
  let novaFrase = '';

  for (let palavra of palavras) {
    if (novaFrase !== '') {
      novaFrase += ' ';
    }
    novaFrase += palavra[0].toUpperCase()+ palavra.slice(1);
  }
  return novaFrase;
}

console.log(transformarFrase('Node é um superset de JavaScript!'));
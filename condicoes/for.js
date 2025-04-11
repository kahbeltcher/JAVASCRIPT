/* 
function traduzirParaLinguaDoP(frase) {
  const consoantes = "bcdfghjklmnpqrstvwxyz";
  let traducao = "";
  frase = frase.toLowerCase();

  for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i];

    if (consoantes.includes(caractere)) {
      traducao += "p";
    } else {
      traducao += caractere;
    }
  }

  return traducao;
}
 Resuma o codigo : A versão resumida deve ter:
* arrow function;
* for...of;
* If ternário. 
*/

const traduzirParaLinguaDoP = (frase) => {
  const consoantes = "bcdfghjklmnpqrstvwxyz";
  let traducao = "";
  frase = frase.toLowerCase();

  for (let caractere of frase) {
    traducao += consoantes.includes(caractere) ? "p" : caractere;
  }
  return console.log(traducao);
};
traduzirParaLinguaDoP("Hello, World!");

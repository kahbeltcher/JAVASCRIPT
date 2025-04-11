let palavra = 'ovo'
const verificarPalindromo = (palavra) => {
    const reversed = palavra.split('').reverse().join('');

    return palavra === reversed ? (`A palavra ${palavra} é um palíndromo.`)
     : (`A palavra ${palavra} não é um palíndromo.`);
};
console.log(verificarPalindromo(palavra));  

function decimalParaRomano(numero) {
    const tabela = [
      { decimal: 1000, romano: 'M' },
      { decimal: 900, romano: 'CM' },
      { decimal: 500, romano: 'D' },
      { decimal: 400, romano: 'CD' },
      { decimal: 100, romano: 'C' },
      { decimal: 90, romano: 'XC' },
      { decimal: 50, romano: 'L' },
      { decimal: 40, romano: 'XL' },
      { decimal: 10, romano: 'X' },
      { decimal: 9, romano: 'IX' },
      { decimal: 5, romano: 'V' },
      { decimal: 4, romano: 'IV' },
      { decimal: 1, romano: 'I' }
    ];
  
    let resultado = '';
  
    for (let i = 0; i < tabela.length; i++) {
  
      while (numero >= tabela[i].decimal) {
        resultado += tabela[i].romano;
        numero -= tabela[i].decimal;
      }
    }
  
    return resultado;
  }
  
  const numeroDecimal = 505;
  const numeroRomano = decimalParaRomano(numeroDecimal);
  console.log(`${numeroDecimal} em romano é: ${numeroRomano}`);
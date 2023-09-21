// function verificaMaiorIdade(idade)
// {
//     let resultado;

//     if(idade > 18)
//     {
//         resultado = 'Maior de idade';
//     }
//     else
//     {
//         resultado = 'Menor de idade';
//     }

//     return resultado;
// }

// export default verificaMaiorIdade;

const verificaMaiorIdade = (idade) => {
  const resultado = idade > 18 ? "Maior de idade" : "Menor de idade";
};
verificaMaiorIdade();

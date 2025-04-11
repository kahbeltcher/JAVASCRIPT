// Crie um código que imprima uma mensagem cumprimentando um usuário baseado na hora atual, conforme as instruções abaixo:

// - Armazene horas, minutos e segundo (utilize os métodos específicos para essa função), conforme o horário atual;
// - Realize as verificações. Se o valor da variável horas for:
// * Menor que 6 OU maior ou igual a 18;
// . Será impresso uma mensagem de boa noite;
// * Maior ou igual a 6 E menor que 12;
// . Será impresso uma mensagem de bom dia!
// * Diferente das opções anteriores;
// . Será impresso uma mensagem de boa tarde!
// - Chame a função que recebe o parâmetro "usuario";



const mensagem = (usuario) => {
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();

    return horas < 6 || horas >= 18
      ? console.log(`Boa noite, ${usuario}! 
      Horário: ${horas}:${minutos}:${segundos}`)
      : 
      horas >= 6 && horas < 12
      ? console.log(`Bom dia, ${usuario}! 
      Horário: ${horas}:${minutos}:${segundos}`)
      : console.log(`Boa tarde, ${usuario}! 
      Horário: ${horas}:${minutos}:${segundos}`);
};
mensagem("Sr. Anderson");
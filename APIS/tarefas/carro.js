// Crie uma função que retorna um novo array com apenas os carros do ano conforme as instruções abaixo:

// - A variável "hoje" recebe a data atual do sistema;
// - A variável 'anoAtual' recebe o ano atual a partir da variável "hoje";
// - A variável carrosDoAno recebe um novo array com os carros que possuem o ano de fabricação igual ao ano atual;
// - A função deve retornar o conteúdo de carrosDoAno.

const carros = [
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'GM', modelo: 'Onix', anoFabricacao: 2023 },
  { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2023 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

const carrosPorAno = () => {
   let hoje = new Date();
   let anoAtual = hoje.getFullYear();
   const carrosDoAno = carros.filter( carro => carro.AnoFabricacao === AnoAtual);
   
   return carrosDoAno;
}
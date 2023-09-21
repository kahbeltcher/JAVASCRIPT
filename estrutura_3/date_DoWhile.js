const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;


do
 {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();

  

  index++;
} while( index < totalAcertos);
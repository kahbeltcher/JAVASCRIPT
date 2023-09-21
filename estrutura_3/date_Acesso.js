const totalAcertos = 4;
const primeiroAcerto = new Date('2020/10/05');

let index = 0;

do
 {
  console.log( primeiroAcerto.toDateString() );

  const dia = primeiroAcerto.getDate();
  
// Em cada iteração do loop adicione um dia à data armazenada em primeiroAcerto. 
// Utilize a variável dia para isso.
  //  primeiroAcerto.setDate(primeiroAcerto.getDate() + 1) outra forma;
  primeiroAcerto.setDate(dia + 1)
  index++;
} 
while
 ( index < totalAcertos);
let i = 0; // Variável de controle para o número de iterações

const primeiroPedido = () => {
  // Condição para o fim do loop dentro da função para que seja encerrado de maneira correta.
  //caso contrario poderia acarretar em um erro.
  if(i >=5){ 
    console.log("\nFIM DO LOOP !")
  }else {
  console.log("1° Faça o oposto do meu próximo pedido");
  i++;
  opostoSegundoPedido();
  }
};

const segundoPedido = () => {
  console.log("2° Não cumpra meu terceiro pedido");
  primeiroPedido();
};

const opostoSegundoPedido = () => {
  console.log("2° [Não]  cumpra meu terceiro pedido");
  terceiroPedido();
};

const terceiroPedido = () => {
  console.log("3° ignore o primeiro pedido");
  segundoPedido();
};


  primeiroPedido();
  

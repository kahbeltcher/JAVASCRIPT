const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
const itemRemovido = carrinho.splice(1, 1)[0]; // Armazena o item removido em uma variável

// Remove todos os items do carrinho
const totalElementos = carrinho.length;
console.log("Total de itens no carrinho: " + totalElementos)
for (let i = 0; i < carrinho.length; i++) {
    console.log(carrinho[i].nome);
  }
  console.log("item removido do carrinho: " + itemRemovido.nome );

// Importando o array "carros" do módulo "dadosCarros.js"
import carros from "./dadosCarros.js";

// Importando a função "retornarCarroFiat" do módulo "retornaCarros.js"
import retornarCarroFiat from "./retornaCarros.js";

// Filtrando o array "carros" usando a função "retornarCarroFiat"
const carrosFiat = carros.filter(retornarCarroFiat);

// Exibindo no console o resultado do filtro
console.log(carrosFiat);

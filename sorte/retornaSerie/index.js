import serie from "./retornaSerie.js";
import { retornaSeriesDisney, retornaSeriesHBO } from "./retornaSeries.js";

let servico = "Disney";
let retornaSeries = [];

switch (servico) {
  case "Disney":
    retornaSeries = serie.filter(retornaSeriesDisney);
    break;

  case "HBO":
    retornaSeries = serie.filter(retornaSeriesHBO);
    break;
}

retornaSeries.forEach((serie) => {
  console.log(serie.nome);
});

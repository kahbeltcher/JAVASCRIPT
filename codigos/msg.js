let data = new Date();
let hour = data.getHours();
let min = data.getMinutes();

let saudacao;

if (hour > 6 && hour < 12) {
  saudacao = "Bom dia";
} else if (hour >= 12 && hour <= 17) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}
console.log(saudacao);

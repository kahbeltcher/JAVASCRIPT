let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${linguagem} em  ${stack}`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${linguagem} em  ${stack}`);
    break;

  case "mobile":
    console.log(
      `Estude React Native para programação ${linguagem} em  ${stack}`
    );
    break;

  default:
    console.log(`Tecnologia indisponível para  ${stack}`);
    break;
}

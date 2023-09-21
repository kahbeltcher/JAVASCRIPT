const plataforma = 'Mobile';
let msg = "";

switch(plataforma) {
  case 'Mobile':
    msg = 'React Native e Flutter';
    break;

  case 'Web':
    msg = 'Angular, React e Vue.js';
    break;

  case 'Back-end':
      msg = 'Laravel, .NET e Spring';
      break;
  default:
    msg = 'Plataforma não disponível';
}

console.log(msg);
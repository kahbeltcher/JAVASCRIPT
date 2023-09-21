const hoje = new Date ();
const diferencaHoras = (hoje.getTimezoneOffset() / 60).toFixed(2);

console.log('Diferença de horário: ' + diferencaHoras + ' horas');
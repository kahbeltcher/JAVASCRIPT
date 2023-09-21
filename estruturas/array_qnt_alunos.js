const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

const qntAlunos = alunos.length;

const mediaTurmaAv1 = alunos.reduce((total, aluno) => {
  return total + aluno.av1;
}, 0) / qntAlunos; // Divide a soma pelo total de alunos para calcular a média

console.log("Média da nota av1 da turma: " + mediaTurmaAv1);

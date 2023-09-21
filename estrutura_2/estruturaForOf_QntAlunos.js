const alunosAv1 = [
    { nome: 'Ana', nota: 7},
    { nome: 'Maria Eduarda', nota: 2},
    { nome: 'Tiago', nota: 8},
    { nome: 'Yuri', nota: 3},
  ];
  
  const qntAlunos = alunosAv1.length
 
  let somaNotas = 0;
  
  for ( const aluno of alunosAv1){
    somaNotas += aluno.nota;
  }
  
  const media = somaNotas / qntAlunos;
  
  
  
  console.log(media);
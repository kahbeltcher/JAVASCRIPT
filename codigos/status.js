function retornaStatusAluno(nota_1, nota_2) {
    let media = (nota_1 + nota_2) / 2;
    let status = "";
  
    if (media >= 6) {
      status = "aprovado";
    } else {
      status = "reprovado";
    }
  
    return status;
  }
  
  // Exemplo de uso:
  const nota1 = 7;
  const nota2 = 5;
  const statusAluno = retornaStatusAluno(nota1, nota2);
  console.log(`O aluno está ${statusAluno}.`);
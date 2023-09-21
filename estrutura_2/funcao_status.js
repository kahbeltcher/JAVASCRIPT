function retorna_status_aluno(nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2;
    let status;

    if(media >= 6){
        status = "aprovado";
    } else {
        status = "reprovado";
    }

    return status;

}

let status = retorna_status_aluno(5, 9);
console.log("Aluno : " + status);
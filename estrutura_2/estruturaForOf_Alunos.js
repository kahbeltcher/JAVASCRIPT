let alunos_array = [
    { id: 1, nome: "Rafael",  media: 5 },
    { id: 2, nome: "Alberto", media: 6 },
    { id: 3, nome: "Carla",   media: 3 },
    { id: 4, nome: "Ana",     media: 7 },
    { id: 5, nome: "Renato",  media: 4 }
];

for ( let aluno of alunos_array ) {

    let nome_aluno = aluno.nome;
    let media = aluno.media;

    let aprovado;

    ( media >= 6 ) ? aprovado = true : aprovado = false;

    if ( aprovado == true ) {

        console.log("Aluno(a) " + nome_aluno + " aprovado(a)");

    } else {
        console.log("Aluno(a) " + nome_aluno + " Reprovado(a)");

    }
}
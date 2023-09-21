// Código de uma arrow function que possui uma ou mais linhas de código.
const retorna_media = ( nota_1, nota_2 ) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);



// Código de uma arrow function só possui uma linha de código.
const media = (nota_um, nota_dois) => (nota_um + nota_dois) / 2;

let Media = media(7, 5);
console.log("A média do aluno é: " + Media);
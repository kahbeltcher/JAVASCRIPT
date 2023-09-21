let artigos = [
    { id: 1, titulo: "Introdução a orientação a objetos", ano: 2010 },
    { id: 2, titulo: "Desvendando os padrões de projeto", ano: 2016 },
    { id: 3, titulo: "Testes unitários com JUnit",        ano: 2018 },
    { id: 4, titulo: "Aplicações com Laravel",            ano: 2015 },
    { id: 5, titulo: "Introdução ao Spring MVC",          ano: 2017 }
];

let contador = 0;
let total_artigos = artigos.length;

while ( contador < total_artigos ) {

    let id_artigo = artigos[contador].id;
    let titulo_artigo = artigos[contador].titulo;
    let ano_artigo = artigos[contador].ano;
    contador++;

    // A estrutura de condição deve ser colocada aqui

    console.log("Id do artigo: " + id_artigo);
    console.log("Título do artigo: " + titulo_artigo);
    console.log("Ano do artigo: " + ano_artigo);
    console.log("\n");

}

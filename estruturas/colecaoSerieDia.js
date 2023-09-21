//coleção series 
var colecao_series_programacao = [
 /*domingo = 0*/   { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
/*segunda = 1*/  { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
/*terça = 2*/    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
/*quarta = 3*/    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
/*quinta = 4*/    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
/*sexta = 5*/     { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
/*sabado = 6*/    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

//guarda o valor da data atual em uma variavel
var data_atual = new Date();

//retorna o dia da semana - se mudar para o respectivo valor do indice também funciona
var dia_semana = data_atual.getDay(); 

//dia_semana recebe o valor  correspondente ao indice da coleção 
//a serie_do_dia vai receber os dados do objeto nessa posição
var serie_do_dia = colecao_series_programacao[dia_semana];

//recebe respectivos valores das propriedades do objeto
var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

//imprimi valores 
console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " +"\n"+ sinopse_serie);
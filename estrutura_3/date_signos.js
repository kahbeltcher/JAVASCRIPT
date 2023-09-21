let signos = [
    {"Nome": "Aquário", "DataInicio": "01-21","DataFim":"02-19"},
    {"Nome": "Peixes", "DataInicio": "02-20","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-20"},
    {"Nome": "Touro", "DataInicio": "04-21","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-22","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-21","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-23"},
    {"Nome": "Virgem", "DataInicio": "08-24","DataFim":"09-23"},
    {"Nome": "Libra", "DataInicio": "09-24","DataFim":"10-23"},
    {"Nome": "Escorpião", "DataInicio": "10-24","DataFim":"11-22"},
    {"Nome": "Sagitário", "DataInicio": "11-23","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-20"}
];

const verifica_data_range (data, data_inicio, data_fim, tipo_comparacao) => {

    if ( tipo_comparacao == "in" ){
        return (data >= data_inicio && data <= data_fim);
    } else if( tipo_comparacao == "out" ){
        return (data >= data_inicio || data <= data_fim);
    }

}

const retorna_signo (signos, data) => {

    data.setUTCHours(0, 0, 0, 0);

    let ano = data.getFullYear();

    for(const signo of signos){

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"]);
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"]);

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "out" : "in";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)){
            return signo["Nome"];
        }
    }
}

let data = new Date();

const nome_signo = retorna_signo(signos, data);

console.log("O signo de hoje é: " + nome_signo);
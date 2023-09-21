import entradaDados from 'readline-sync';

let divida = entradaDados.question("Informe o valor da divida: ");


if(divida > 0)
{
    let DiasAtrasados = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if(DiasAtrasados > 0){
        let Juros;

        if(DiasAtrasados > 11)
        {
            Juros = 10;
        }
        else if(DiasAtrasados  < 10 )
        {
            Juros = 5;
        }

    divida = Number(divida);
    DiasAtrasados = Number(DiasAtrasados);
    
    let taxa_Juros = (divida / 100) * Juros;
    let valorTotal= divida + taxa_Juros;
  
    console.log("\nValor original da dívida: "+divida);
    console.log("Dias atrasados: "+DiasAtrasados);
    console.log("Taxa de Juros:"+Juros+"%")
    console.log("Valor total com juros: "+valorTotal)
    }
    else if (DiasAtrasados <=0){  
        console.log("Você está em dia!");
    }
}
else if(divida <= 0)
{
    console.log("O valor da dívida deve ser maior que zero!")
}


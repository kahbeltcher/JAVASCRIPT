let meses = [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"];

for (let contador = 0 ; contador < meses.length;contador++)// or - for (let contador in meses)
 {

    console.log(meses[contador]);

    if ( meses[contador] == "Junho" ) {
        break;
    }

}
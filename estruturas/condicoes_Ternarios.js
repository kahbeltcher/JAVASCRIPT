

 var idade = 20    //CORRETO 
 var resultado = (idade >= 18) ?  "Maior de idade" : "Menor de idade";
 console.log("idade: "+resultado)

 var produto = 'Geladeira' //CORRETO 
 var retorno = (produto == 'Geladeira')? 'desconto' : 'normal'
console.log("Produto: "+retorno)

var encontrado = false;
var resp = encontrado && "Item encontrado";  //CORRETO
console.log("Encontrado: "+resp)

var status = true;
 var resultado = status && "Aprovado"; //CORRETO 
 console.log("Aprovado: "+resultado) 


 var status = false; //CORRETO
 var result = (status) ? "Aprovado" : "Reprovado";
 console.log("Aprovado? "+result)
 let primeiroPedido = true ;
 let segundoPedido = true;
 let terceiroPedido = true;
let index = 0 ;

do {    
    if (primeiroPedido == true )
    {
        console.log ("1° Faça o oposto do meu proximo pedido")

    } if (segundoPedido == true  && primeiroPedido == true)
     {
        console.log("2° Não cumpra meu terceiro pedido ")
        terceiroPedido = true ;
        segundoPedido = false
        
     }else if(primeiroPedido == false && segundoPedido == false) 
       {
            console.log("2° [Não] cumpra meu terceiro pedido")
            terceiroPedido = false;
            primeiroPedido = true;
            segundoPedido = true;
        } if (terceiroPedido == true )
        {
            console.log("3° ignore o primeiro pedido ")
            primeiroPedido = false;
        }
    index++

    } while (index > 0)
    
    //
 
           

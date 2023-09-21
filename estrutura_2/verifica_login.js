const verifica_tamanho_login = (login) =>{

    if( login.length > 0 ){
        return true;
      
    } else {
        return false;
    }

}

export default verifica_tamanho_login;
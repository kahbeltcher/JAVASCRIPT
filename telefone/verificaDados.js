/*O código a seguir é um validador simples de número de telefone. Complete os espaços em branco para que o código funcione conforme a lista de pedidos:

- O parâmetro recebido do front-end se chama telefone;
- O telefone é válido se a quantidade de caracteres for igual a 15;
- A validação deve ser feita com if ternário (se for igual a 15 é true do contrário false);
- A variável a ser validada se chama telefone;
- O if ternário deve estar associado a uma variável;
- A camada REST deve importar a camada de serviço utilizando require;
- A importação deve estar associada a uma constante chamada verificaDados;
- Todas as variáveis(com exceção de constantes) devem ser declaradas com let.*/

function validaTelefone(telefone) {
  let valido = telefone.length == 15 ? true : false;
  return valido;
}

exports.validaTelefone = validaTelefone;

# Coleções

## Projeto feito para aprender API e coleções de dados.

### Funcionalidades

Obter todas as UF (Estados):

### 1. Rota: /ufs

- Método: GET
- Descrição: Esta rota permite obter uma lista de todas as unidades federativas (UF), ou seja, estados brasileiros. Se um parâmetro de busca for fornecido na consulta, a API filtrará a UF com base no nome, retornando aquelas que correspondem à pesquisa. Caso contrário, ela retornará todas as UFs.
- Resposta: A API retorna uma lista de objetos JSON que representam as UFs encontradas ou uma mensagem de erro se nenhuma UF for encontrada.

### 2. Obter UF por ID:

- Rota: /ufs/:iduf
- exemplo : http://localhost:8080/ufs/21
- Método: GET
- Descrição: Esta rota permite obter informações detalhadas sobre uma UF (Estado) específica com base no seu ID. Se o ID fornecido corresponder a uma UF existente, a API retornará os detalhes dessa UF. Se o ID não for um número ou se não corresponder a uma UF existente, a API retornará uma mensagem de erro.
- Resposta: A API retorna um objeto JSON que representa a UF encontrada ou uma mensagem de erro se a UF não for encontrada ou a solicitação for inválida.
  Essa API fornece funcionalidades simples para obter informações sobre as unidades federativas do Brasil com base em seus nomes ou IDs. Ela usa o framework Express.js para criar um servidor HTTP que escuta na porta 8080 e responde às solicitações HTTP de acordo com as rotas definidas.

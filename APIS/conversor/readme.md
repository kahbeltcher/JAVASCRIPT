# Conversor de Temperatura

## Descrição
Este é um aplicativo Node.js simples que usa o Express para criar uma API que converte temperatura de Celsius para Fahrenheit.

## Instalação
1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Execute `npm install` para instalar as dependências.
4.Execute `npm install expres` caso necessário.

## Uso
- Execute `node index` para iniciar o servidor.
- Ctrl + c para sair do mesmo.

## Exercicio 
- Neste exercício você deve criar uma API que realiza a conversão de temperatura de Celsius para Fahrenheit.

## instruções fornecidas:

- Na camada de serviço, a função "celsiusParaFahrenheit" recebe o parâmetro "celsius" e retorna a temperatura convertida para Fahrenheit.
- Fórmula de conversão: celsius * 9/5 + 32;
- A API recebe do front-end uma requisição "celsius" com um valor decimal referente a temperatura em Celsius.
- Definir uma constante "fahrenheit" para armazenar o resultado da conversão;
- Enviar a temperatura convertida em Fahrenheit para o front-end no formato JSON, com a chave "fahrenheit".
- Ao iniciar o servidor na porta, a data atual do sistema deve ser apresentada.


# Sugerir Filme da Semana

Este é um pequeno projeto JavaScript que fornece uma sugestão de filme com base no dia da semana atual. A função `sugereFilmeSemana` utiliza a data atual para determinar o dia da semana (0 para Domingo, 1 para Segunda, ..., 6 para Sábado) e, em seguida, sugere um filme com base nesse dia da semana.

## Filmes Sugeridos

A lista de filmes sugeridos para cada dia da semana é a seguinte:

- Domingo: "Vingadores"
- Segunda: "Liga da Justiça"
- Terça: "Harry Potter"
- Quarta: "Senhor dos Anéis"
- Quinta: "Capitão América"
- Sexta: "Homem de Ferro"
- Sábado: "Superman"

## Como Usar

Você pode usar esta função em seus próprios projetos JavaScript importando-a a partir deste módulo. Aqui está um exemplo de como usar a função:

```javascript
const { sugereFilmeSemana } = require("./sugestoesFilmes");

// Obtém a sugestão de filme para o dia da semana atual
const filmeSugerido = sugereFilmeSemana();

console.log(`Para hoje, sugerimos assistir a "${filmeSugerido}"`);
```

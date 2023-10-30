# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

``` https://www.youtube.com/live/UtP1aIrQ5xc?si=48W9ABl3YCVZxP7e ```

___

## Matemática Discreta Aplicada à Programação - Aula 04

- Retomando a última aula, abordamos um tema importante que foram os **QUANTIFICADORES**.
- Quantificadores Universais (Todo, Sempre, Alguns, Nenhum); Contra-Exemplos (todo número primo é ímpar vs. 2 é par); Silogismos e Aristóteles (PM como Premissa Maior, Pm como Premissa menor, C como conclusão).
  - Dica de treino, é pensar a lógica, as informações, pensar no "espaço complementar".
  - "Todo A é B..." podemos pensar no A sendo parte de B, e o espaço complementar (~B) em roxo. Se acharmos um ponto de A e também de ~B, então a afirmação é falsa. Se não achar, não quer dizer que é verdadeira, trata-se de uma "ausência de evidências". Não quer dizer que não existe essa pessoas, quer dizer apenas que você não encontrou essa pessoa/ponto.
  - Ausência de evidência não é evidência de ausência!"
  - Não se pode dizer que o "oposto é verdadeiro". Por exemplo, não existe "prova negativa" na lógica. Eu não posso provar logicamente que deus não existe.
- Premissas Universais, Silogismos e hoje vamos trabalhar com mais exemplos! 

___

### Silogismos e Quantificadores

- Palavras que qualificam em termos de relação ao Conj. Universo, os elementos que estamos tratando...
  - Usando essa frase pra "sair do real". Nomes absurdos pra "fugir" da realidade, pois na aula passada houve uma dúvida e respondemos: "A premissa não deve ter relação com a realidade!", num exercício de lógica, temos de abstrair as "verdades" acostumadas, observar APENAS o enunciado, e não supôr aquilo que não foi declarado.
  - **Só é Verdadeiro num problema de lógica aquilo que foi declarado como Verdadeiro** ("toda as galinhas são mamíferos..."), mesmo que essa frase não seja a realidade como a percebemos. Não se pode presumir nada, não se pode assumir nada, que não tenha sido declarada. Assim, com base nessa abstração, Aristóteles pôde classificar 64 tipos de Silogismos, e apenas 16 tipos concluem coisas Verdadeiras.

- Por exemplo:
- PM (Premissa Maior): ``` "Todos os Plics são Rastabuns." ``` 
- Pm (Premissa menor): ``` "Tsuguru é um Plic." ```
- C (Conclusão): ``` "" ```
  - **Posso concluir que Tsuguru é um Rastabun?** Resposta: Sim. Pois esse tipo de silogismo é um dos 16 silogismos Verdadeiros.
  - Na prática, esse silogismo ele pega o Conjunto Universo (de todas as criaturas com nomes esquisitos) e diz que existe um Conjunto dos Plics. E diz que "todos os Plics são Rastabuns", então tem a Categoria dos Rastabuns. O Conjunto P (dos Plics) ESTÁ CONTIDO no Conjunto R (dos Rastabuns), ambos dentro dum Universo possível.
  - ``` ( P ⊂ R ) | x ∈ P ⇒ x ∈ R ``` Qualquer elemento do conjunto dos Plics, isso também implicará que ele está dentro do Conjunto Rastabuns. 
  - Essa estrutura que faz uma **"Universal Afirmativa"** do Conjunto A para o Conjunto B (Todos os Plics pertencem ao conjunto Rastabuns), e depois individualiza um único sujeito do conjunto menor (plics), sempre poderemos tomar essa conclusão.

- Por exemplo:
-   

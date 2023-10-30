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

- Por exemplo, Universo, Plics, Rastabuns:
  - PM (Premissa Maior): ``` "Todos os Plics são Rastabuns." ``` 
  - Pm (Premissa menor): ``` "Tsuguru é um Plic." ``` (conjunto menor: Plic < Rastabuns)
  - C (Conclusão): ``` "Tsuguru é um Rastabun" ```
    - **Posso concluir que Tsuguru é um Rastabun?** Resposta: Sim. Pois esse tipo de silogismo é um dos 16 silogismos Verdadeiros.
    - Na prática, esse silogismo ele pega o Conjunto Universo (de todas as criaturas com nomes esquisitos) e diz que existe um Conjunto dos Plics. E diz que "todos os Plics são Rastabuns", então tem a Categoria dos Rastabuns. O Conjunto P (dos Plics) ESTÁ CONTIDO no Conjunto R (dos Rastabuns), ambos dentro dum Universo possível.
    - ``` ( P ⊂ R ) | x ∈ P ⇒ x ∈ R ``` Qualquer elemento do conjunto dos Plics, isso também implicará que ele está dentro do Conjunto Rastabuns. 
    - Essa estrutura que faz uma **"Universal Afirmativa"** do Conjunto A para o Conjunto B (Todos os Plics pertencem ao conjunto Rastabuns), e depois individualiza um único sujeito do conjunto menor (plics), sempre poderemos tomar essa conclusão. Por isso, essa lógica é VERDADEIRA.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/4e5d539d-84fb-4320-81a1-5690decc285e)


- Por exemplo, Universo, Cavalos, Equinos:
  - PM (Premissa Maior): ``` "Todos os Cavalos são Eqüinos." ``` 
  - Pm (Premissa menor): ``` "Tsuguru é um Eqüino." ``` (conjunto maior: Eqüino > Cavalo), quebra a lógica abaixo
  - C (Conclusão): ``` "Tsuguru é um Cavalo." ```
    - **Posso concluir que Tsuguru é um Cavalo?** Resposta: Não! Pois esse tipo de silogismo faz uma operação inversa (antes Plic era parte de Rastabum (P ⊂ R); agora Cavalos é parte de Eqüinos (C ⊂ E); mas a Conclusão é oposta (Tsuguru é Rastabun = parte do conjunto maior) vs. (Tsuguru é um Cavalo = parte do conjunto menor), não podemos TER CERTEZA.
    - "Todos os Cavalos são Eqüinos" ``` ( C ⊂ E ) | x ∈ C ⇒ x ∈ E ``` Logo, todo sujeito Cavalo é também parte do conjunto maior de Eqüinos. Porém, a Conclusão é falha quando se inverte a Pm (premissa menor) ao dizer que Tsuguru é um Eqüino (eqüino é conjunto geral, e não específico). Tsuguru pode ser um cavalo e também eqüino? Pode ser, mas sem garantias, poderia ser uma mula, um iáqui, até um Baphomet..., todos sendo Eqüinos, mas sem saber se "Tsuguru é Cavalo"). Por isso, essa lógica é FALSA.
    - O nome dessa conclusão é _"Erro do Carl Hallo"_. Não se dá nome para os erros... hahaha
    - Esse Eqüino, posicionado na imagem, é um Não-Cavalo (é um Eqüino de fato, mas um ~C), ou seja, todo o conjunto em amarelo).
    - Inclusive, dentro do conjunto dos Eqüinos, pode muito bem ser um Não-Cavalo (~C).
    - A partir daí, pensemos no Conjunto Oposto (não-blábláblá).
    - A Estrutura é mais importante do que o que é dito (cavalo, rastabuns, eqüinos, plics, terraplanistas, extremistas, etc.)
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c29d85b2-ab75-43b7-bf81-b2a7e504aff1)

___

### Cuidado com as Falácias! 

- Slippery Slopes, Fake News, Falácias, etc... Cuidado com afirmações do tipo A ⇒ B (A implica B).
- Ajudando a galera com o "problema do processo seletivo"... Em Lógica, eu só sei aquilo que posso garantir com base nas premissas. Só isso, qualquer outra coisa é uma suposição.
  - Aqui temos um Conjunto Universo (U), um Conjunto dos Cavalos (C) e o Conjunto dos Eqüinos (E). Ao dizer, no enunciado, que "Tsuguru é um Eqüino" existe uma afirmação que pode garantir que um elemento Fulano está nesse setor amarelo (inclusive conjunto Cavalos), então EM TESE o Tsuguru pode ser um cavalo, mas na lógica não vivemos de "pode ser", mas sim apenas o que pode ser dito COM CERTEZA. **A Lógica é Categórica, é Declarativa, é Assertiva (to assert: ss vs. acerto: c)**. Tsuguru até pode ser um cavalo, mas não posso concluir que ele é. Existe uma IMENSA distância entre "pode ser" e o "é". O Ed poderia ser o Brad Pitt disfarçado, mas não é. Quando declaramos que ALGO É, é uma instância única, não tem erro. Quando dizemos que Tsuguru é um Eqüino, há diversas possibilidades. Logo, não podemos fazer essa afirmação.
  - Se nós invertéssemos a ordem, e disséssemos que _"Tsuguru é um Cavalo"_ (conjunto menor), teríamos que, com certeza ele é um Eqüino: ``` ( C ⊂ E ) | t ∈ C ⇒ t ∈ E ```
  - Se (t ∈ C) e (C ⊂ E) ∴ seguramente (t ∈ E). ``` ( C ⊂ E ) | t ∈ C ⇒ t ∈ E ``` VERDADEIRO
  - Porém, (t' ∈ E) e (C ⊂ E) ∴ (t' ∈ E), mas não é certo que (t' ∈ C), embora até pudésse ser... FALSO
  - Matemáticos são chatos, pois exigem muito da linguagem. Um pequeno detalhe da linguagem pode mudar toda a realidade do que se está afirmando.
 
  
- _"Mas tem que ter a ver com a realidade?"_ Não. Vamos aprender a abstrair... Tipo a famosa "Bola Quadrada".
- Na matemática, quando eu DEFINO bola, podemos trabalhar de acordo com a definição.
  - Na matemática, BOLA é um conjunto de pontos que está a uma mesma distância (1 un.) do centro (no caso, o raio = r = 1 un.).
  - Na matemática, medimos a distância baseado no Teorema de Pitágoras, a distância de r² é a soma dos quadrados dos catetos (a² + b²).
  - ``` r² = (a² + b²) ``` O quadrado da hipotenusa (r²) é igual à soma dos quadrados dos catetos (a² + b²). Trata-se de uma **"Bola Euclidiana"**.
  - 
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5562144d-3f43-4c0c-bbc7-f0d5893388a8)
  - IMG2


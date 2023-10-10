# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

```https://www.youtube.com/live/x6C5L4AVRJ4?si=Ida_RZ3liVgsX33Y```

___

## Matemática Discreta Aplicada à Programação - Aula 02

- Comentários sobre a Lógica Fundamental
  - > Aula importante, pois além de aplicarmos a matemática discreta na programação, a parte inicial de lógica proposicional é **muito útil pra organizar o pensamento**. A idéia é saber como fazer cálculos com frases, pensamentos e idéias. Como organizar as idéias de uma maneira lógica e racional, como simplificar idéias (já tentou explicar algo e a explicação ficou mais complicada ainda?). Pois nessa disciplina vamos aprender **Tabelas Binárias de Decisão** e vamos aprender como minimizar essas tabelas, ou seja, aprender a simplificar a lógica do discurso, retirar irrelevâncias, pensar na essência do que será falado. A disciplina é essencial e fundamental, pra estruturar um pensamento organizado. Vivemos em uma era em que as pessoas falam as coisas sem o menor sentido... Sem entender se as notícias são verdadeiras ou falsas, sem entender a natureza do que tá sendo dito. Essa disciplina parece difícil, mas vamos aprender a coisa da maneira simples relacionando com conjuntos.

- A **Lógica Proposicional** é um ramo da lógica matemática que lida com proposiçõpes, que são declarações afirmativas ou negativas que podem ser verdadeiras ou falsas, mas não ambas.
- Ela se concentra nas operações e relações lógicas entre proposições.
  - > Tende a estabelecer uma lógica entre as coisas que você diz. Ao fazer uma afirmação (verdadeira ou falsa) estará encadeada com outras afirmações. Entenderemos quando um conjunto de afirmações é verdadeiro. A matéria vai ajudar a fazer demonstrações matemáticas, pois ajuda estabelecer um fluxo lógico pro pensamento. 

___

## Proposição: 

- É uma declaração que é verdadeira ou falsa, mas não ambas.
- Exemplo:
  - "O céu é azul." (verdadeira)
    - > Estamos estabelecendo um conjunto das coisas que são "azuis". E dizemos que o céu pertence a esse conjunto. Criamos num universo de todas as cores que existem, separadas por cores, estou posicionando o céu como um elemento do conjunto das coisas azuis.  
  - "O Ed de Almeida é chato." (falsa)
    - > Estamos tomando um conjunto de seres humanos, e dividindo-o em dois grandes grupos, os que são chatos e os que não são chatos. E é claro, o Ed de Almeida está no lugar errado! :P Uma parte do grupo são pessoas chatas, outras pessoas não são chatas. O Ed de Almeida é um indivíduo, um ponto específico, e posicionando-o no conjunto dos seres humanos chatos.

- Cada afirmação é uma operação desse tipo, ela cria um universo divido em grupos, e posiciona um elemento no meio daquele grupo.   
  - > Um efeito de determinar um universo, e dividindo (em cores diferentes), posicionei o elemento céu no grupo das coisas azuis. O efeito que as palavras possuem de determinar o universo chegar a ser algo profundo e filosófico, que podemos refletir e pensar! O Ed é muito rigoroso com palavras (lá vem piada!).
<details>
  <summary>Piada do Ed - Spoiler de conteúdo sensível (no caso, ao Humor)</summary>
  Daí tinha um engenheiro, um físico e um matemático num navio. O navio afundou, só eles sobreviveram. Nadaram até uma ilha... Chegando perto da costa da ilha, avistaram uma vaca pastando de lado, logo além da linha da maré. Eles só conseguiam ver um lado da vaca. E esse lado da vaca era preto. Ao que o engenheiro falou, generalizando: _"- Todas as vacas dessa ilha são pretas."_ Então o físico disse: _"Você não pode afirmar isso. No máximo, você pode dizer que aquela vaca é preta..."_ E então, o matemático disse: _"Nem isso, você só pode dizer isso que AQUELE LADO DA VACA é preto. O outro você não tá vendo."_ 
  </details>

- O caso da matemática é cobrar demasiada a precisão das coisas.

___

## Negação:

- Negação ( ~ ): Inverte o valor de verdade de uma proposição.
- Se A é verdadeiro, ~A é falso.
- Se A é falso, ~A é verdadeiro.
- Exemplo:
  - A = "O céu é azul."
  - ~A = "O céu não é azul."
  - > O A que estamos observando representa uma frase, uma afirmação. O uísque Jameson é irlandês (verdadeiro). Esse uísque não é irlandês (falso). A (nova) declaração será falsa. É como visualizar uma conta matemática, mas com palavras. Quando eu nego o verdadeiro, passo a ser falso. Quando eu nego o falso, passo a ser verdadeiro. No caso do uísque Jameson, se eu disser "a garrafa é azul" essa informação é falsa; porém a negação dessa afirmação será verdadeira "a garrafa NÃO é azul".
  - > ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/22dbadad-6141-4e64-a7a3-04d5c41c226a)

___

## Negação em termos de Conjunto! 

- Vamos ver a imagem:
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a0c0b557-f6b2-478b-b7b9-419953af27e2)
- Olha que legal... O conjunto branco é o conjunto dos pontos onde a afirmação A é verdadeira. O conjunto amarelo é o conjunto de todos os demais pontos onde a afirmação A é falsa. Se o céu é azul de dia (conjunto A), o lugar da afirmação falsa (conjunto NÃO-A) serão a noite, o céu nublado (céu cinza), não tem céu (fim do mundo)...
- A disciplina de lógica representa uma coisa chamada **meta-pensamento**. Meta-física = além da física (deus, ética, moral, fé). Meta-pensamento é ir além do pensamento (enxergar o pensamento de longe e enxergar quando o pensamento está correto ou incorreto). Nossa filosofia será de trabalhar com passos pequenos e sólidos. Aqui é que cada passo seja completamente aprendido! Na faculdade, o aluno vai atrás do pensamento e SE (auto) forma. 

___

## Conjunção:

- Conjunção ( ∧ ): Proposição A é verdadeira apenas se ambas as proposições conectadas são verdadeiras.
- Exemplo:
  - P ∧ Q é verdadeiro apenas se P e também Q forem verdadeiros.
  - > Na negação existia um operador unário (apenas sobre um único elemento da sentença). Na Conjunção temos um Operador Binário (que deverá atuar em dois elementos da sentença), ou seja, sobre a conexão de duas proposições, relacionadas. Quando eu tenho duas proposições afirmativas encadeadas, o resultado só será verdadeira se AMBAS as proposições forem verdadeiras.
  - > Proposições de DeMorgan, que falam sobre afirmações compostas (o céu é azul e grande), como eu nego isso? Será assunto da próxima aula. Esse isqueiro A é azul. Esse isqueiro B é roxo. Esse isqueiro A é azul de fato E também o isqueiro B é roxo de fato.
  - > ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c7eb8ec8-9e8f-48eb-8c74-7a3a3eb12438) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1560fea3-47a0-4480-99ae-7144e3ee2bbb)

 
      


___

## Operações [das Proposições]

- Negação (~): "é..." vs. "não é..."
- 

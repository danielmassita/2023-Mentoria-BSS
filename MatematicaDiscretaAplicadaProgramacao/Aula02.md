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

## Negação

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

## Conjunção

- Conjunção ( ∧ ): Proposição A é verdadeira apenas se ambas as proposições conectadas são verdadeiras.
- Exemplo:
  - P ∧ Q é verdadeiro apenas se P e também Q forem verdadeiros. Leitura do símbolo como **"E"**.
  - > Na negação existia um operador unário (apenas sobre um único elemento da sentença). Na Conjunção temos um Operador Binário (que deverá atuar em dois elementos da sentença), ou seja, sobre a conexão de duas proposições, relacionadas. Quando eu tenho duas proposições afirmativas encadeadas, o resultado só será verdadeira se AMBAS as proposições forem verdadeiras.
  - > Proposições de DeMorgan, que falam sobre afirmações compostas (o céu é azul e grande), como eu nego isso? Será assunto da próxima aula. Esse isqueiro A é azul. Esse isqueiro B é roxo. Esse isqueiro A é azul de fato E também o isqueiro B é roxo de fato. Então a **Conjunção de A e B é verdadeira.**
  - > ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c7eb8ec8-9e8f-48eb-8c74-7a3a3eb12438) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1560fea3-47a0-4480-99ae-7144e3ee2bbb)
  - > Na lógica, meia mentira é uma mentira inteira. Na proposição _"o Ed tem 55 anos e é cabeludo"_, a conjunção é falsa, pois embora o Ed tenha 55 anos, ele é careca. Se existe uma informação falsa no meio de uma conexão, o total da afirmação é falsa. Também em _"O Ed tem 100 anos e possui a barba branca."_ A afirmação é falsa, pois o Ed não tem essa idade muito embora tenha a barba branca. Na frase _"O Ed é cabeludo e tem 100 anos."_ a afirmação é falsa, pois ambas as proposições são falsas.
- Vejamos abaixo o diagrama da Conjunção (ou seja, ... E ..., ou A ∧ B):
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2c7c2154-b1c7-4ae3-a4c0-d64fb39a3198)
  - > A região amarela, é a Conjunção A ∧ B verdadeiras, mas mesmo A sendo verdadeira, estando fora de B, será falso. Mesmo B sendo verdadeiro, estando fora de A, a afirmação é falsa. Somente na **INTERSECÇÃO** entre A e B será verdadeira a afirmação. 

___

## Disjunção

- Disjunção ( ∨ ): A proposição é verdadeira se pelo menos uma das proposições conectadas for verdadeira. 
- Exemplo:
  - P ∨ Q é verdadeiro se P for verdadeiro, Q for verdadeiro OU ambos forem verdadeiros. Leitura do símbolo como **"OU"**. 
- Muito usado em eletrônica, vamos demonstrar que a Lógica Proposicional é homeomorfa à lógica/álgebra de Boole. O 1 está passando corrente, o 0 não está passando corrente. 
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/b5e8ae11-7208-4e80-96b9-7dc56d4c1b2d) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/f5c17466-f0ec-4f87-ae3f-a0fa0fd1065d) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/6f212c0b-13fb-447d-8f63-50fee9c78369) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/b61befe9-580e-49c3-9bea-fdb4d330f076) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/12834a22-6659-48a4-aebe-be8c9eb3c2de) ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a6eaa126-0b2a-49df-a867-506c49f88f96)


  - > OU esse isqueiro é azul OU esse isqueiro é roxo. (verdadeiro, fig. 1)
  - > OU esse isqueiro é roxo  OU essa caneta é branca. (verdadeiro, embora a caneta seja preta, fig. 2)
  - > OU esse isqueiro é amarelo OU esse isqueiro é vermelho. (falso, pois ambas as afirmações são falsas, fig. 3)
  - > OU o Ed passará férias na praia OU o Ed passará as férias na montanha. (verdadeiro, cedo ou tarde uma das duas sendo verdadeiras, fig. 4 ou 5) (ou falso, se o Ed ficar em casa pois tá sem dinheiro, fig. 6).

- Vejamos a imagem do conjunto:
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/006f992d-467e-4c4a-b455-01a2f7cee9c8)
- Conjunto amarelo é a UNIÃO de A com B, sendo ou A verdadeiro, ou B verdadeiro, ou A e B verdadeiros (intersecção do pontilhado). Trata-se do conjunto de União de A ∨ B. 

- Vejamos a imagem do Conjunto OU-EXCLUSIVO ( ⊕ ):
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c30d3f88-29e2-417d-bd83-6ada92a767a2)
- Ou-Exclusivo quer dizer _"um ou outro, mas não ambos"_, selecionando um, exclui-se o outro. Por exemplo, OU João está descansando, OU João está trabalhando, mas não os dois ao mesmo tempo.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1a6f7d62-8eb2-4d4c-93b8-5ee53a32843c)

___

## Implicação / Causalidade

- Implicação ( → ): A proposição é falsa apenas se a primeira proposição (antecedente) for verdadeira e a segunda (conseqüente) for falsa.
- Exemplo:
  - P → Q é falso se P for verdadeiro e Q for falso; caso contrário, é verdadeiro.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/179e26d8-b586-45b6-ab0f-e023507eb11b)
  - Se o Ed fumar, então morrerá de câncer no pulmão... Se acontecer a proposição A, então acontecerá a proposição B. A implicação ocorre quando a ANTECEDENTE gera a CONSEQÜENTE. A segunda proposição é uma conseqüencia da primeira. 
- Coisas absurdas podem ser ditas usando "Implicação". Por exemplo: "As rosas são vermelhas, então os elefantes são cinzas". O elefante não é cinza porque a rosa é vermelha.
- É muito difícil estabelecer relações de Causa e Efeito! Esse é um grande problema em ciências. Pra dizer que A implica B, sendo A a causa e B a conseqüência, eu preciso tirar todos os outros elementos e possíveis coisas que poderiam causar B. Tem um filósofo, Roger Bacon, criou o método dos resíduos. Implicação é Causalidade. Se A implica B, quando A acontecer então B inevitavelmente vai acontecer também.
  - Existe CORRELAÇÃO mas SEM CAUSALIDADE no exemplo do protetor solar. (Não é o aumento no uso do protetor solar que aumentou o número nos casos de câncer, mas o contrário).

- Dúvida: _"Eles precisam ter uma relação real pra ser verdadeiro?"_ Quando trabalhamos com lógica proposicional, procuramos abstrair a idéia de real. No filme Matrix, quando Neo e Morpheus se encontram, rola a pergunta: "Isso é real?" e a resposta "O que é real, pra você?".

- Dúvida: _"Se uma árvore cair na floresta e ninguém ouvir, ela fez barulho ou não?"_ No budismo, temos a idéia de KOAN (uma frase aparentemente contraditória). Em filosofia, a resposta dessa pergunta vai classificar o filósofo e sua postura filosófica entre Humanista (quem garante que não houve outro som, tipo ding-dong?, já que ninguém ouviu?) e Fenomenalista (a árvore faz o barulho com ou sem ouvintes) indica que os fenônemons acontecem independente da percepção humana, no último caso, ou então que as coisas (fenômenos) só existem dependendo da percepção humana.    

- Dúvida: _"Se P for falso e Q for verdadeiro, a implicação é verdadeira?"_ Sim, é horrível. Se o Ed disse que esse isqueiro é amarelo (esq.), então esse é roxo (dir.), isso é uma implicação verdadeira. Esquisito, sim! Só existe um caso de Implicação Falsa. No exemplo, se P for verdadeiro (antecedente verdadeira) e Q for falso (conseqüente falsa) a implicação é verdadeira. Se a Conseqüente for verdadeira, a implicação sempre será verdadeira.     
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d2f02d45-f72d-4bbb-93f6-57de4a3b4f7d)

```
Na lógica e na matemática, a implicação, ou condicional é a indicação do tipo "SE...ENTÃO", indicando que uma condição deve ser satisfeita necessariamente para que a outra seja verdadeira. Por exemplo, a expressão: "Se João esquia, Maria nada" é uma implicação. Na lógica booleana, as implicações retornam FALSO se, e somente se, o antecedente é VERDADEIRO e o conseqüente é FALSO.

Tabela Verdade (SE...ENTÃO / SI...TUNC / IF...THEN)
Entrada1	        Entrada2  	      Saída
-----------   +   -----------   +   -----------
VERDADEIRO	      VERDADEIRO	      VERDADEIRO
VERDADEIRO	      FALSO             FALSO
FALSO             VERDADEIRO      	VERDADEIRO
FALSO	            FALSO            	VERDADEIRO
```

___

## Operações [das Proposições]

- Negação (~): "é..." vs. "não é..."
- Estamos entrando num momento histórico nas nossas vidas. Estamos entrando numa etapa nova da consciência, pensando sobre o ato de pensar. Poderemos entender o ato de pensar, per si, e entender e organizar muito melhor nossa maneira de pensar.
  - > Muita gente acredita que pode usar o corpo treinando (academia, malhação), mas esquecem que pra usar o cérebro (órgão complexo e profundo) não precisamos treinar. Pelo contrário, treinando o ato de pensar, nos tornamos mais analíticos, analisando o discurso através da lógica e mais criteriosos (ou chato).  
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/116f7928-3d77-4b2c-b6df-3d53e2181594)

# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://www.youtube.com/live/t8uQPLrJJDA```

___

## Álgebra Linear - Aula 01

- A Álgebra Linear é um ramo da matemática que se concentra no estudo de espaços vetoriais, transformações lineares e sistemas de equações lineares.
- Ela desempenha um papel fundamental em várias áreas da matemática, ciencias, engenharias, sendo uma ferramenta essencial para resolver uma ampla gama de problemas. 

___ 

## Álgebra Linear será importante para:

- Fazermos operações com imagens, como rotações e translações.
  - > Arquivos de imagens gigantes, estratégias pra recuperar, comprimir, descomprimir, não lotar a memória do pc), gravar, rotacionar, verificar um tumor, através da tomografia, como um mapa 3D.

- Resolvermos problemas de otimização, como através do __Método Simplex__.
  - > Imagina uma fábrica com diferentes itens, diferentes custos, diferentes preços de vendas. Qual seria a melhor cesta de serviço, qual do produto A ou B deve ser priorizado pra otimizar a produtividade? Aí usamos o Método Simplex. 

- Entendermos melhor certas operações algébricas que podem ser úteis em vários ramos do conhecimento humano.
  - > Fenômenos lineares dentro de determinados escopos (mesmo os não-lineares, dependendo da perspectiva, como fenômeno local chamados de "quase-lineares").

___

## O que é uma Álgebra? 

- A palavra álgebra vem do árabe _"al jabr"_ que significa "reunião das partess quebradas".
- Na matemática dizemos que uma Álgebra é um terno, ou seja, a reunião de três coisas: um conjunto e duas operações que podem ser efetuadas sobre os elementos daquele conjunto, seguindo certas regras.
  - > O primeiro elemento é um conjunto + duas operações dentro. Um grupo e como um elemento interage com outro.

___

## Álgebra usual dos Números Reais < ℝ, +, x >

#### < ℝ, +, x >

1) Elemento Neutro Aditivo: `0 + a = a + 0 = a`
   - > Zero é um número real, que somado, não altera o outro fator. Krishna dizia que a matemática é um castelo de cartas de cabeça pra baixo, cada vez mais complexas (não complicadas). São regras que aprendemos no ensino básico.
2) Elemento Neutro Multiplicativo: `1 * a = a * 1 = a`
   - > Um fator que operado não altera o outro, o a continua o mesmo nesse caso da multiplicação.
3) Elemento Inverso Aditivo: `a + (-a) = (-a) + a = 0`
   - > Quando operamos um cara com o elemento A, vai resultar em um elemento neutro, no caso, o inverso aditivido de 3 seria -3, pois quando operamos eles o resultado é zero. No conjunto dos números reais, sempre existe um cara que somando com a, vai dar zero, no caso, -a. 
4) Elemento Inverso Multiplicativo: `a * (1/a) = (1/a) * a = 1`, com a != 0
   - > Um cara que eu multiplico por A, vai resultar em um elemento nuetro multiplicativo, no caso, resulta em 1. Nesse caso, existe CONDIÇÃO de a diferente de zero. Não existe divisão por zero. 
5) Comutatividade Aditiva: `a + b = b + a`
   - > A velha história de _"a ordem dos tratores não altera o viaduto"_ que falávamos no primário.
6) Comutatividade Multiplicativa: `a * b = b * a`
   - > A mesma coisa, só que na multiplicação. _"A ordem dos fatores não altera o resultado..."_ que também falávamos no primário.
7) Distributividade da Multiplicação sobre a Soma: `a * (b + c) = (a * b) + (a * c)`
   - > A multiplicação se distribui, o A se distribui sobre o binômio (B + C), sendo que resultará na distribuição da multiplicação que seria (A*B) + (A*C).
8) Associatividade Aditiva: `a + b + c = (a + b) + c = a + (b + C)`
   - > Em outras palavras, podemos colocar os parênteses onde quisermos, (A+B) + C é igual a A + (B+C). São apenas maneiras diferentes de descrever as operações, sendo mais fáceis de resolver problemas quando olhamos por outra ótica. Lembrando Carlos Dias, toda a história da matemática é uma questão de olhar de forma esperta e diferente pra entender e resolver.
9) Associatividade Multiplicativa: `a * b * c = (a * b) * c = a * (b * c)`
   - > Exatamente a mesma coisa da adição, sendo no caso uma escolha de qual operação vamos resolver primeiro pra poder trabalhar.
```
- O zero possui um papel diferente na multiplicação, transformando tudo em zero. Essas são propriedades de uma álgebra. O zero é um elemento "no potente" quando transforma todo mundo nele mesmo, no caso, em zero. 
- "A base sempre volta", muito importante e devemos retornar pro fundamento quando precisamos estudar. Propriedades numéricas do primeiro grau é melhor pra estudar do que os livros do Secundário ou Terciário.
- Na didática, devemos dar nomes aos bois (exceto se forem pro abatedouro, nesse caso, devemos salvar os bois! go vegan!).
- A idéia é fazer sentido e pensar _"aqui se encaixa o elemento neutro aditivo"_... 
- Álgebra é um terno.
```
___

## Condições de Linearidade 

- ƒ(0) = 0
  - > O ƒ de zero sempre vai ser zero. Numa função linear eu sempre levo o zero no zero.
- ƒ(a + b) = ƒ(a) + ƒ(b)
  - > Se eu aplicar uma função linear em cima da soma de dois elementos, vou obter a soma das funções lineares desses dois elementos. Podemos quebrar os elementos e aplicar isoladamente a álgebra, essa é a idéia de "quebrar em partes". 
- ƒ(k * a) = k * ƒ(a)
  - > O ƒ de um produto de um número real K multiplicado pelo número A, vai ser esse número real vezes o ƒ de A. Ou seja, eu sempre RETIRO o fator de multiplicação. 

- Use Alt+159 pra escrever o símbolo de Função ( ƒ ).
- Agora, isso é apenas uma visão abrangente.

___

## Espaços Vetoriais

- Espaços Vetoriais: Um espaço vetorial é uma coleção de objetos chamados vetores que __satisfazem certas propriedades__, como a adição de vetores e a multiplicação por escalares.
  - > No exemplo, o número K do exemplo anterior é um escalar. 
  - > Funções também são vetoriais, podemos ter um espaço linear, de funções que ao invés de operar com números, vamos operar com funções. Parece complexo no começo, mas é essencial pra programação. Usamos o __Paradigma da Programação Funcional__, no qual os objetos que lidamos são funções. Ao invés de trabalhar com número, trabalhamos com a função que modifica o número. Podemos aplicar a ação em cima de qualquer número que eu quiser. As linguagens se tornam cada vez mais funcionais (como JavaScript), ou são plenamente funcionais (como Ruby).

- Os exemplos mais comuns de espaços vetoriais são os espaços tridimensionais (3D) e os espaços de funções.
  - > Exemplo da sala. Pra identificar um ponto na sala, preciso de medir 3 distâncias X (altura em relação ao chão), (distância entre parede Y), (distância entre parede Z).
  - > Os livros "clássicos" serão formais demais (ler primeira página de livro de álgebra linear), não vão devagar e conceitos passo-a-passo. O fascista usava um livro muito denso, complexo por natureza, cuidado pra não ir no livro e perder a coragem. Coragem não é ausência de medo. É, mesmo com medo, o que podemos fazer... LAGES LIMA: A boa matemática começa com noções, depois exemplos, depois complexidades. Se inverter, ferrou. Dá até raiva. 
  - > Menos ansiedade, galera, a vida não é uma corrida de 100m. É como uma maratona, endurance, mais sobre ITERAR dia a dia a mudança, que SPRINT de ilusões.
    
- Os espaços vetoriais devem atender certas propriedades.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e13dbd3c-ddb2-48d7-b33a-6bc389433066)
  - > Veremos assim como no colégio, por exemplo, vetor V com vetor W, tem uma resultante V+W. Na imagem inferior, o vetor W é multiplicado por 2, dobrando o comprimento, alterando a resultante para V+(2*W). E assim vai... E assim observaremos as operações para além dos vetores...
  - > Hoje estamos trabalhando com ajustes, aulas antecipadas e abertas são oportunidade pra prototipar alguns ajustes finos ao estilo de aula. Perguntas pertinentes sobre o conteúdo, atenção e cuidado com os demais, inclusive neuro-divergentes (TDAH se ferra). 

___

## Transformações Lineares

- Transformações Lineares: Uma transformação linear é uma função que mapeia vetores de um espaço vetorial para vetores de outro espaço vetorial de forma que preserva as operações de adição e multiplicação escalar.
  - > Quando eu pego um conjunto de vetores, e transformo em outro. Por exemplo (bem prático): a capa de um livro, embora seja plana, podemos rotacionar, transladar, andar de lado, girar o livro sem alterar a planície da capa, apenas alterando algumas características.  
- Elas são representadas por matrizes e desempenham um papel importante na análise de sistemas lineares.

___

## Matrizes

- Matrizes: As matrizes são tabelas retangulares de números dispostos em linhas e colunas. Elas são usadas para representar transformações lineares e sistemas de equações lineares. As operações de matriz, como multiplicação de matriz e transposição, são fundamentais na Álgebra Linear.
  - > É como uma "tabelinha de números", pra representar as transformações lineares. Quando multiplicamos por um vetor, fazemos a transformação que queremos. No exemplo da cabeça humana no tomógrafo, cada pixel da imagem é um vetor. Multiplico a imagem inteira por uma matriz e eu giro a cabeça no eixo X, eixo Y, eixo Z, e suas relações. Alteramos as imagens e as "perspectivas". Vetor não é exclusivo à 3D. Todo número real é um Vetor no espaço R-1 (reta real). Todas as propriedades de vetor funcionam dentro da reta real (uma dimensão). A capa do livro seria 2D, girar, lado-lado. Em 3D teríamos a imagem do tomógrafo. Em 4D+ a gente perde a capacidade de imaginar no Espaço Vetorial. 
  - > Um matemático famoso e falecido dizia _"eu consigo enxergar na quarta dimensão, pois sou cego de nascimento..."_, pois ele não tinha a nossa perspectiva default tridimensional (nosso cérebro interpreta a visão em três dimensões, pois está viciado). 
  - > Exemplo da prateleira (3ª de baixo pra cima sendo ALTURA, desse lado no canto esquerdo da prateleira (LARGURA), ou talvez na parte do fundo dos livros de trás (duas camadas de livros, PROFUNDIDADE).
  - > Vamos calulcar Determinantes de matrizes, resolver Sistemas Lineares... 

___

## Sistemas de Equações Lineares

- Os sistemas de equações lineares envolvem um conjunto de equações lineares em várias variáveis, e a solução desse sistema é um conjunto de valores para as variáveis que satisfazem todas as equações simultaneamente.
- A Álgebra Linear fornece ferramentas para resolver esses sistemas de maneira eficaz. 
  - > Matrizes Esparsas em última análise. Matriz é uma tabela com linhas e colunas, cada cruzamente tem um valor (número), mas algumas situações são muitos números "zero", com alguns poucos elementos não-zero. Quase toda nula, mas com alguns locais onde não é nula. Vamos lidar com as Matrizes Esparsas, economizando espaço na memória ou menos operações, pra ter método mais eficiente onde pode-se ganhar eficiência.
  - > Vamos revisar S.E.L., usando Matrizes, inclusive aprenderemos métodos computacionais pra fazer isso. Até "Matrizes Esparsas" em álgebra linear. 

___

## Autovalores e Autovetores:  

- Esses conceitos estão relacionados às transformações lineares e são usados para analisar como os vetores podem ser esticados ou encolhidos por essas transformações.
  - > Conceitos relacionados com transformações lineares. São um Valor e Vetor com propriedades que sejam especiais dentro de uma determinada transformação. Dentro de um Espaço Vetorial, tenho uma Transformação Linear, e dentro desses espaços, encontramos AutoVetores com propriedades interessantes quanto às equações e transformações (com seus conjuntos de valores em comum).

___

## Comentários...

- > Definição: Álgebra é um conjunto com duas operações.
- > Em um ano, vamos tentar "perder essa noção de variável", pois é "infantil na matemática" (não é brincadeira de esconde-esconde com "vamos achar o X..."). Vamos trabalhar, realmente, com Objetos Matemáticos e Operações Matemáticas (e não com o X, variável, isso-aquilo).
- > Dificuldade ao associarmos _"com vetores é pq nós associamos dimensão com medidas de comprimento, mas é interessante pensar dimensões como informações guardadas a respeito de um objeto. ​Tipo na imagem pode ter os tamanhos, posições, cores, inclinação... cada informação guardada numa dimensão do vetor, certo Ed?"_ De fato, pode ter todas as informações, representar vários metadados como dimensões, embora tentemos simplificar o número de dimensões de tudo...
- > Aulas serão acessíveis somente essa Primeira Semana, com algumas aulas publicadas no canal oficial (mas a Mentoria continua! ;).
- > _"eu trabalho bastante com imagens em 3D mas é a primeira vez que associo os movimentos ao modelo de matriz achei bem interessante"_ Existe uma diferença trabalhar com CorelDraw, Blender, (softwares) e gira um eixo, você não está usando matrizes, está "puxando um eixo", mas por baixo do capô do motor existe um motor calculando matrizes (diferença entre Usuário vs. Programador): estamos preparando o cara que FAZ o programa FAZER a cena girar. O programador que só usa o framework, no fundo ACHA que programa em JavaScript, mas só está usando uma ferramenta (React).
- > Até tem ligação de "Tensores" com o conteúdo de Matemática, mas é um grau de complexidade maior e número de casos limitados. (Poderíamos fazer uma aula extra, mas foge do escopo da Mentoria).
- > O material da próxima aula é da próxima aula! ;) Sibila Trelawney fica na Torre e dá aula de Adivinhação em Hogwarts.
- > Novas mentorias, tudo mais constante e estável, seria em Dezembro... Mas no momento, nada certo (final de Setembro) ;)

FIM! 

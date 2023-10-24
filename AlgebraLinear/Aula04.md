# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://www.youtube.com/live/BQ-R5wVlRfU?si=K2IQHWAMKDEuUG4b```

___

## Álgebra Linear - Aula 04

- Na Aula 03, nós discutimos o conceito de **Vetor**.
- Nessa aula, sendo uma extensão da última, vamos falar sobre o conceito de **Espaço Linear**.
- Mas antes, algumas perguntas pertinentes que surgiram no decorrer da semana e que se somam à aula de hoje.
- Perguntas:
  - Ed, o vetor ao somar com outro vetor, o resultado é sempre um vetor? E no caso radical de um Vetor +2 com outro Vetor -2 (mesmo módulo, mesma direção da reta ℝ, sentidos opostos +/-), o resultado seria nulo?
    - Sim, existe sempre um **Vetor Nulo**.

___

## Por quê existem "Terraplanistas"?

- Razão #1 = estupidez. A palavra _"planeta"_ não vem de "plano", mas sim da idéia de "andarilho", pois os planetas "vagavam" na abóbada celeste enquanto as pessoas achavam que a Terra era fixa (movimento relativo do céu). Podemos também comprovar a curvatura da Terra com um eclipse (que aconteceu dia desses) que projeta a borda da terra na face da Lua. Além disso, as embarcações que se afastam da Terra no horizonte, "vão para baixo" na linha do horizonte.
- Contudo, tomemos o exemplo da curvatura da crosta terreste. A distância do raio do centro da Terra, e a vasta extensão da área da superfície faz com que a curvatura seja tão pequena, tão pouco sentida, que chamamos de **SEMI-LINEARES** ou **QUASI-LINEARES**. Esse arco de curva vai parecer (e até se comportar) como uma reta, com um grau tosco de precisão. Quando estamos sobre a Terra, enxergamos uma fração tão delimitada que não podemos entender que a grandeza física da terra faz com que o ângulo = θ (theta) do raio da Terra projetado até a crosta é considerado "quasi-linear". A base de um prédio teria que ter quilômetros de base (largura e extensão da base) pra poder sentir essa curvatura. 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/98979ac9-756d-4200-8be1-4827ceab274a)

___

## Espaço Vetorial

- Conjunto (C) que possui os Vetores como elementos. Não basta ter vetores, é necessário existir algumas "PROPRIEDADES" lá dentro.
- Se tivermos dois Vetores (a, b) pertencentes ao conjunto C, então o Vetor (a) + Vetor (b) também pertencem a C.
  - Vetor (a, b) ∈ C ⇒ (VetorA + VetorB) ∈ C
  - Para ser um **espaço vetorial**, preciso ter certeza de que SE DOIS VETORES PERTENCE AO CONJUNTO, TAMBÉM A SOMA DOS VETORES DEVE PERTENCER AO CONJUNTO.    
  - São chamadas de Operações de Fechamento. O Espaço Vetorial é um conjunto FECHADO para certas operações.
  - Se tiver um certo k pertencente aos números Reais, e tiver um certo Vetor A pertencente a C, tenho que ter certeza de que k * a pertence a C.
  - k ∈ ℝ, Vetor(a) ∈ C ⇒ k.Vetor(a) ∈ C  
- Ou seja, **o conjunto C é FECHADO em termos de Soma de Vetores e em termos de Multiplicação por Escalar** (isso é a própria definição de Linearidade Algébrica).
  - Se pegarmos uma função linear, pegando o  ƒ(a+b) = ƒ(a) + ƒ(b) e também ƒ(k.a) = k*ƒ(a).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ec400c9f-332a-4cd7-b30d-4bd75f25aa42)

___

- Temos a reta dos números Reais ( ℝ ) que é nosso primeiro espaço vetorial.
- Temos a reta Real ( ℝ ) com uma origem ( 0 ). Módulo +a = |a|, módulo -a = |a| {a, se a >= 0 e -a, se a < 0}.
  - O Vetor(v) tem módulo 1 = |1|, em roxo.
  - O Vetor(t) tem módulo 2 = |2|, o módulo representa o "comprimento" do vetor, em amarelo.
  - Ambos os vetores estão na mesma reta suporte dos Reais ( ℝ ) sendo essa última a Direção (ℝ), e possuem o mesmo Sentido (Positivo, no caso).
  - Calculamos a SOMA DE VETORES através de um simples expediente: pegamos um dos vetores e levamos junto à origem do outro.
    - Um vetor se repete.
    - O outro vetor, terá o mesmo módulo, ou seja, o comprimento do deslocamento será o mesmo, no caso, Vetor(t) = |2| (pois 0->2), e repetiremos o |2| na nova posição (agora, 1->3).
    - A direção é uma só, pois a reta suporte da direção é a própria Reta Real ( ℝ ).
    - Como o sentido é o mesmo, somamos os módulos (os deslocamentos se somam, ao invés de subtrair se fosse sentidos opostos). O Sentido é o mesmo da Reta Suporte.
    - Qualquer dois (ou -n) vetores que você somar na Reta R, vai continuar na reta R.
  - Pois R é um conjunto unidimensional (só precisa de um número pra caracterizar o vetor (número positivo ou negativo), mas a reta é mesma da direção e o módulo dependerá de cada vetor).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/962f3785-b1fd-4a7e-8488-8be90a4ab8b5)
 
___

### Outro exemplo...

- Tomemos uma única dimensão com direção sobre a reta suporte Real ( ℝ ).
- Temos um Vetor(a) = 3, sendo que o módulo = |3|, direção = ℝ, sentido = positivo (+).
- Temos um Vetor(b) = -4, sendo que o módulo = |4|, direção = ℝ, sentido = negativo (-). Não existe módulo negativo, módulo é uma grandeza sempre positiva, porém o sentido são outros quinhentos.
- Colocamos um Vetor(b) no final do Vetor(a), ou vice-versa. Vetor(a) = 3, Vetor(b) = -4, Vetor(a+b) = Vetor(b+a), (3)+(-4)=(-1), ou (-4)+(3)=(-1).
- Podemos pensar na matemática que a direção de uma reta quer dizer a inclinação (ângulo theta, θ ), e como só temos uma direção pois só temos uma reta suporte dos reais, vamos desconsiderar o ângulo aqui. 
  - Na matemática a direção de uma reta é inclinação da reta (no caso de unidimensional, horizontal = 0, mantemos a reta suporte real).
- Pensando em Módulos quando tratando vetores, PODEMOS pensar como um DESLOCAMENTO. Trazendo a origem do Vetor(a) em o Vetor(b), ou vice-versa.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/8b975858-4a04-4515-9c1a-d53b4299091d)
- Independentemente da ordem dos fatores, vamos voltar nos CONCEITOS de COMUTATIVIDADE (a + b) = (b + a).
  - Se o Espaço é Linear, a OPERAÇÃO TEM DE SER COMUTATIVA.
  - ƒ(a+b) = ƒ(a) + ƒ(b) e também ƒ(k.a) = k*ƒ(a).
    - A + B = B + A
    - ƒ(a + b) = ƒ(a) + ƒ(b)
    - ƒ(b + a) = ƒ(b) + ƒ(a)
  - **Quando não existe uma Propriedade Comutativa dentro do Espaço, diz-se que as operações não ficam bem definidas, pois a operação "indo" fica diferente da operação "voltando".**
  - Faz-se necessário ter uma Precisão na Definição. Até existem espaços não comutativos, mas não vamos estudar nesse curso de Álgebra Linear.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/4a56e84d-7666-4762-8b97-cf4baccab32c)
- Outra propriedade que vamos enxergar, será muito utilizada em Computação Gráfica, e portanto vamos aumentar a complexidade e trabalhar no Espaço R².

___

### Outro exemplo, agora no espaço ℝ²

- Temos o Espaço Vetorial com dois eixos, sendo x e y.
- Teremos ℝ² como um conjunto de pares (x, y) onde ambos são Reais.
- Pensemos num Vetor(a,b), de maneira abstrata, com eixo x = a, e eixo y = b.
- E imagine que tenho uma Função qualquer (f) que TRANSFORMA o Vetor(a,b) em um novo Vetor(c,d), ou seja, a afunção faz alguma coisa com ele, e transporta pra um novo lugar.
- O que se diz é EXTREMAMENTE IMPORTANTE. Se eu pegar um ponto pertinho do Vetor(a,b), e aplicar a mesma função, esse novo ponto ficará pertinho do Vetor(c,d).
  - **Isso quer dizer que o meu Espaço Vetorial é HOMOGÊNEO.** Ou seja, é contínuo, é homogêneo, tem uma propriedade que deixam as coisas agarradinhas umas nas outras.
  - Não é uma idéia de resultante.... Mas muito mais uma idéia de VIZINHANÇA. Se tivermos uma "bolinha" ao redor do vetor, se o vetor for pra outro lugar, a bolinha vai junto.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/0a3429fc-5040-479a-91ef-af142d994ed1)

- Hausdorf-Besikovich, citado por Carl Sagan em Cosmos (70's) explica as multidimensionalidades possíveis.
- Para nós, vamos trabalhar simples (com Álgebra Linear e Pares de Elementos):
  - ℝ     a
  - ℝ²    (a, b)
  - ℝ³    (a, b, c)  
  - ℝ^4   (a, b, c, d)
  - ℝ^n   (A1, A2, A3, A4, ..., An) - R com índice N, não se trata de exponenciação! 
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e9799087-3eb0-4875-ab4a-f64fec59606f)

___

### Novo exemplo, ainda em ℝ²

- A reta ℝx costuma ser a primeira coordenada. A reta ℝy costuma ser a segunda. Tanto faz, no futuro, basta ser COERENTE e manter a CONSISTÊNCIA. Ângulo de 90° também é relativo...
- Imagine um novo Vetor(a) com coordenadas (2, 2) na cor azul.
- Imagine um novo Vetor(b) com coordenadas (2, 1) na cor vermelha.
- Ao aplicarmos a Regra dos Paralelogramas, a SOMA dos dois Vetores vai ter um Vetor Resultante Vetor(resultante) = (4, 3).
- A própria Regra do Paralelogramas mostra **QUE A SOMA É COMUTATIVA**. Levando uma perna de um no braço do outro, e o oposto, chegamos nessa conclusão, ambos chegando no mesmo lugar.
- Agora vamos a uma Definição Formal:
  - Se o Vetor(a) possui coordenadas (a1, a2) sendo números reais.
  - Se o Vetor(b) possui coordenadas (b1, b2) sendo números reais.
  - Pra SOMAR DOIS VETORES basta somar as duas COORDENADAS.
  - Vetor(a) + Vetor(b) = (a1 + b1    ,    a2 + b2 )
  - Vetor(b) + Vetor(a) = (b1, + a1   ,    b2 + a2 )
  - a1, b1, a2, b2 ∈ ℝ, todos pertencem aos Reais e portanto todos também respondem às mesmas regras (regra das somas dos números reais)
  - Por isso são COMUTATIVOS, tanto faz a ordem que somamos.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/cc2ef51c-4d2a-49f8-81c2-75d22d0c2222)

___

- A escola padrão é como uma linha de montagem, tira do artesão/fabricante a visão geral do todo.
- Tempos Modernos (Charles Chaplin).
- Antigamente, os professores eram tutores, preceptores, mecenas, estudavam e ensinavam apenas para nobres, logo eram estudos 1:1
- Atualmente, há salas com na média ~30 pax, até +100 em casos extremos.
- 

# Programa de Mentoria BSS 2023
# Álgebra Linear

``` https://www.youtube.com/live/TKMFscl6g7k ```

___

## Álgebra Linear - Aula 07

- Marco Civil da Internet - Estamos gravando!
- Hoje, vamos estudar **"O Assunto dos assuntos"** na matéria de Álgebra Linear.
- A aula de hoje, **"Base de um Espaço Vetorial"**, é uma das principais aulas dessa disciplina, e com certeza, estaria listada entre, senão a mais, os assuntos mais fundamentais.
- Coisas popularizadas, quando cooptadas pelo Mercado, constumam perder qualidade... Por exemplo: uísques, vinhos, etc. que dependem de uma maturação, costumam perder qualidade quando produzidos em larga escala...
- Sair da aula, hoje, sem entender o assunto ocasionará no comprometimento do restante do curso! 
- Hoje, também vamos aprender a idéia do conceito de DIMENSÃO (no sentido de Espaço Vetorial).
  - Existem vários conceitos de "dimensão" na matemática.
  - Hoje vamos aprender apenas um deles... ;)
- Dimensão para um espaço, é uma quantidade, um valor associado com um conjunto. Ele fala sobre a maneira COMO eu represento ELEMENTOS desse conjunto.
- Um dos conceitos de "Dimensão" se relaciona com a BASE DESSE CONJUNTO.
- Espaço Vetorial é um conjunto (elementos, vetores):
  - munido de determinadas operações (operação-adição e operação-multiplicação).
  - Op. Adição permite somar dois elementos desse espaço;
  - Op. Multiplicação por Escalar, permite pegar um corpo, um elemento de um conjunto que me fornece itens isolados (escalares) e posso multiplicar por elementos desse conjunto;
  - E ainda assim (Op.Soma e Op.Multiplicação) obter **propriedades como FECHAMENTO**.
    - Quando SOMO dois vetores do espaço vetorial, ainda continua sendo um vetor do Espaço Vetorial;
    - Quando MULTIPLICO um vetor do espaço vetorial, por um Escalar daquele Corpo correspondente, ainda é um vetor daquele Espaço Vetorial - pertence ao conjunto;
&nbsp;
- Hoje, vamos entender a Dimensão num sentido mais próximo do Físico, Natural, de um conjunto...
- O que eu preciso pra representar um vetor dentro do meu espaço?
- Existem outros conceitos de dimensões nas Matemáticas (Dimensão de Hausdorf-Besikovicht mede a densidade de um conjunto, o espaço que ele ocupa dentro do conjunto onde ele está). Nessa dimensão, podemos ter dimensões de valor 1,5, 3,8, 4,9, dimensões fracionárias.
- No conceito que vamos abordar hoje, não existe isso, vamos trabalhar com DIMENSÕES INTEIRAS (parse INT).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/df980df9-4307-42d6-8246-f61f6f4faf36)


___

### O que é a Base de um Espaço Vetorial? 

- No começo, vamos começar com menos formalidades...
- Vamos começar pelo **CONJUNTO ℝ²**, é um produto de Conj. ℝ por Conj. ℝ,
  - ℝ² = reta Real (todos números reais) em produto de ℝ.x e ℝ.y, sendo um produto de espaços (vetores) pegando cada elemento de um eixo vs. outro eixo).
  - O elemento do ℝ² é um **PAR (a,b)**, onde "a" pertence ao conj. ℝ e também "b" pertence ao conjunto ℝ;
  - ``` ℝ² ```     
  - ``` ℝ * ℝ ``` reta suporte dos números Reais no eixo ℝ.x e reta suporte dos números Reais no eixo ℝ.y  
  - ``` (a, b) ``` par de elementos (a,b)
  - ``` a ∈ ℝ ``` ponto "a" é retirado do conjunto ℝ.x 
  - ``` b ∈ ℝ ``` ponto "b" é retirado do conjunto ℝ.y
- O ponto do par (a,b) é um ponto do cruzamento do eixo ℝ.x (a) e o cruzamento do eixo ℝ.y (b), no ponto (a,b).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/8bf98820-9f83-4d20-bfff-c2cd4a0ac6a1)

___

### Um Elemento do ℝ² é um PAR de elementos! 

- Um elemento do ℝ² é um parzinho (a,b).
  - Um elemento do ``` ℝ² ``` é um par formado pelos pontos ``` (a, b) ```, onde os pontos a e b pertencem ao conjunto ℝ ``` a, b ∈ ℝ ``` .
  - É como se eu tivesse duas retas reais, e estou tirando um elemento de um, um elemento de outra, e estou situando esse elemento no cruzamento de dois conjuntos.
- Vamos observar algo interessante...
- Poderíamos escrever esse elemento assim: ``` a*(1, 0) + b*(0, 1) ```, de acordo com aquelas regras de multiplicação por escalar, e das regras de soma de vetores, podemos escrever assim, pois isso é a mesma coisa que ``` (a, 0) + (0, b) ```, pois o escalar "a" multiplica o par (1, 0) e o escalar "b" multiplica o par (0, 1).
  - ``` a*(1, 0) + b*(0, 1) ``` = ``` (a, 0) + (0, b) ```
- _Galera, tentem entrar na aula no horário correto, pois o Ed fica parando pra autorizar a entrada (#lá-ele), e o caldo entorna pra todes... O gato pode virar, cedo ou tarde, um animal decorativo e empalhado. Piada sobre o nome do gato ser Astro, afinal, "Astro-no-mia"... Se tá ruim pra você ouvindo a aula, imagina pra mim transcrevendo..._
- Temos o Vetor.(AB), e vamos tentar escrever esse vetor assim: ``` a*(1, 0) + b*(0, 1) ```
  - Segundo a regra de multiplicação de escalar por vetor, quando multiplico "a" por (1, 0) tenho (a, 0) - ``` a*(1, 0) = (a, 0) ```
  - Segundo a regra de multiplicação de escalar por vetor, quando multiplico "b" por (0, 1) tenho (0, b) - ``` b*(0, 1) = (0, b) ```
  - Segundo a regra da soma de vetores que já fizemos, a gente soma as coordenadas eixo.x a+0 com a soma das coordenadas eixo.y 0+b, que vai resultar no vetor.(a, b).
  - ``` a*(1, 0) + b(0, 1) ``` = ``` (a, 0) + (0, b) ``` = ``` (a, b) ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/867f9dce-f00b-492e-a4cf-a3241cb2eba9)


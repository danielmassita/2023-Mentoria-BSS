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
  - Segundo a regra da soma de vetores que já fizemos, a gente soma as coordenadas eixo.x a+0 com a soma das coordenadas eixo.y 0+b, que vai resultar no Vetor.(a, b).
  - ``` a*(1, 0) + b(0, 1) ``` = ``` (a, 0) + (0, b) ``` = ``` (a, b) ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/867f9dce-f00b-492e-a4cf-a3241cb2eba9)

___

### Relembrando: a*(1,0) + b*(0,1) = (a, 0) + (0, b) = (a, b)

- Podemos enxergar isso em termos gráficos no plano cartesiano (ℝ²).
- ``` a*(1, 0) + b(0, 1) ``` = ``` (a, 0) + (0, b) ``` = ``` (a, b) ```
- Temos aqui o Vetor.1 que é representado pelo par (1,0), no eixo ℝ.x na posição 1, no eixo ℝ.y na posição 0, no ponto (1,0) na representação do plano de ℝ².
  - Falando no eixo ℝ.x, tenho o Vetor.(1,0)
- Temos aqui o Vetor.1 que é representado pelo par (0,1), no eixo ℝ.x na posição 0, no eixo ℝ.y na posição 1, no ponto (0,1) na representação do plano de ℝ².
  - Falando no eixo ℝ.y, tenho o Vetor.(0,1)   
- Ambos em vermelho.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/16b87eea-6421-49eb-9e24-0e3afd85afe5)
- &nbsp;
- Quando eu falo em um Vetor.(AB), estou falando em escrever esse Vetor.(AB) dessa forma:
- O Vetor.(AB) será escrito como:
  - Primeiro o par ``` a*(1, 0) ``` ou seja, "a" vezes o par (1,0) será "a" vezes 1 que é "a", e "a" vezes 0 que é zero ∴ temos:
    - ``` a*(1,0) ``` = ``` (a, 0) ```
  - Segundo o par ``` b*(0, 1) ``` ou seja, "b" vezes o par (0,1) será "b" vezes 0 que é 0, e "b" vezes 1 que é "b" ∴ temos:
    - ``` b*(0,1) ``` = ``` (0, b) ```
- Ambos em azul, Vetor.(a,0) e também o Vetor.(0,b).
  - Notemos que no eixo ℝ.x teremos o ponto (1,0) e também teremos o ponto (a,0) como equivalentes na reta de suporte ℝ.x;
  - Notemos que no eixo ℝ.y teremos o ponto (0,1) e também teremos o ponto (0,b) como equivalentes na reta de suporte ℝ.y;
- Numa terceira cor (roxo), temos o Vetor.AB, no ponto (a,b) da intersecção dos pontos (a,0) no eixo ℝ.x e no ponto (0,b) no eixo ℝ.y;
  - Temos o **Vetor.(AB), que é uma SOMA DE VETORES daqueles dois vetores nas suas respectivas retas suportes ℝ.x e ℝ.y que será o famoso ℝ²**.
    - Temos o Vetor.(a,0) que pode sofrer a SOMA DE VETORES com o Vetor.(0,b)
      - Vamos somar o Vetor.(a,0) com o Vetor.(0,b), vou no destino desse vetor e pego outro vetor que eu transporto para o outro lado.
      - O Vetor.(AB) é a SOMA do Vetor.(a,0) com o paralelo do Vetor.(0,b) transportado pela **Regra do Paralelograma**.
      - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/719a2c91-06d1-4bab-9a25-56d0d3eb7cf4)

___

### Base do ℝ² = { (1, 0) ; (0,1) }

- **Essencialmente, estamos fazendo uma multiplicação e depois uma soma de vetores.**
- O Vetor.(AB) é a SOMA do Vetor.(a,0) com o paralelo do Vetor.(0,b) transportado pela **Regra do Paralelograma**.
- A multiplicação de ``` a*(1,0) + b*(0,1) ``` é como se "a" e "b" fossem escalares multiplicando os vetores, no caso o Vetor.(1,0) em ℝ.x no ponto (1,0) com o Vetor.(0,1) em ℝ.y no ponto (0,1).
- Base do ``` ℝ² = { (1, 0) ; (0,1) } ```
- Isso quer dizer que **qualquer vetor de Base do ℝ² pode ser escrito como uma COMBINAÇÃO LINEAR**. Combinação Linear é exatamente isso:
  - Combinação Linear, pegamos dois **escalares "a" e "b"**, escolhemos outros **dois vetores da base** (que é ℝ²) no caso os vetores "(1,0)" e "(0,1)", e escrevemos a **resultante como sendo o Vetor.(AB)**.
  - Escrevemos o Vetor.(AB) ``` (a, b) ``` como sendo um produto de escalares ``` a*(1,0) + b*(0,1) ```, portanto isso é a Combinação Linear.
  - ``` (a, b) = a*(1, 0) + b*(0, 1) ```
  - Pegamos dois escalares "a" e "b";
  - Pegamos dois vetores "(1,0)" e "(0,1)";
  - Multiplicamos um escalar pelo primeiro vetor a*(1,0);
  - Multiplicamos um escalar pelo segundo vetor b*(0,1);
  - E estou somando ao final.
- ***Isso é uma Combinação Linear!**
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/f8ad1940-a469-420d-a54e-cebc71685374)

___

### Pergunta:

- _"A Regra do Paralelograma só funciona no ℝ²?"_
- **NÃO!**
  - A Regra do Paralelograma serve para QUALQUER ESPAÇO VETORIAL.

___

### Ponto (x,y) no Espaço Vetorial vs. Escalar "x' e "y" na reta suporte real

- Então assim, que fique claro a escrita do Vetor.(AB).
- Pego os dois vetores da Base = {(1,0) ; (0,1)}, e eles me permitem escrever qualquer vetor do espaço ℝ².
- Se eu tiver um vetor qualquer "(x, y)" do Espaço ℝ², isso significa que esses caras pertencem à ℝ, então o "x" e o "y" serão escalares que pertencem à ℝ. No caso, "x" e "y" são números reais escalares, e não pontos no espaço. O ponto "(x, y)" é um ponto no espaço. O valor de "x" e de "y" são escalares reais.  
  - ``` (x, y) ``` ponto no espaço vetorial 
  - ``` x ∈ ℝ ``` valor escalar na reta suporte real
  - ``` y ∈ ℝ ``` valor escalar na reta suporte real
- **Na forma de um par "(x,y)" eles formam um Vetor!**
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/85b471a9-0319-4291-8cfb-d17258d98b71)

___ 

### Conceito de "Espaço Vetorial"

- Espaço Vetorial é ``` <   > ```:
  - um **Conjunto** ``` C ```;
  - com **Duas Operações**:
    - operação Adição (não a soma normal); ``` (+) ```
    - operação Multiplicação (não a multiplicação normal); ``` (x) ```  
  - com um **corpo** sendo F (conjunto de escalares)
- Espaço Vetorial é ``` < C,(+),(x) > ```
&nbsp;
- **Espaço vetorial é um conjunto com duas operações, Op. Adição e Op. Multiplicação (com bolinhas ao redor), com um corpo "F" (conjunto de escalares) tirados pra garantir a linearidade.**
- Linearidade para ser garantida temos duas regras:
  - A soma de dois elementos (a,b)
    - Se "a" e "b" pertencem à C; ``` a, b ∈ C ``` 
  - Se "k" é um escalar do Corpo F; ``` k ∈ F ```
  - **Preciso de duas condições pra ser linear:**
    - ``` a + b ∈ C ``` e ``` (k * a) ∈ C ``` 
    - "a" mais "b" precisa pertencer à C, ou seja, ser **fechado pra adição** de vetores;
    - "k" vezes "a" precisa também pertencer à C, ou seja, ser **fechamento para multiplicação** de vetores;
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/12059f66-3dc2-47cb-9f12-96395afb9018)

- No caso, o conjunto C é o conjunto do ℝ² ``` C = ℝ² ``` para um Ponto (x,y) temos o Vetor.(x,y) e o F é o conjunto dos números reais ``` F = ℝ ``` enquanto escalar.
- Os escalares são reais (ℝ) e as coordenadas dos vetores em ℝ² também são números reais.
- Se você me der um Vetor.qualquer tipo Vetor.(AB):
  - esse "a" é um elemento de ℝ como escalar, e posso escolher multiplicar pelo Vetor.(1,0);
  - esse "b" é um elemento de ℝ como escalar, e posso escolher multiplicar pelo Vetor.(0,1);
  - Esstou pegando escalares de ℝ do Corpo (F), e multiplicando por Vetores de Base = { (1,0) ; (0,1) } que é a Base do Espaço Vetorial (ℝ²);
    - Podemos pensar no Ponto (a,b):
    - Esse cara, sendo ``` a ∈ ℝ ``` um escalar "a" do conjunto real, vezes um Vetor da base ℝ.x (1,0) do conjunto ℝ;
    - Esse cara, sendo ``` b ∈ ℝ ``` um escalar "b" do conjunto real, vezes um Vetor da base ℝ.y (0,1) do conjunto ℝ;
- Me parece natural um "a" ser escrito como ``` a * 1 = a ``` e também ``` a * 0 = 0 ``` logo temos ``` (a, 0) = a * (1,0) ```
- Me parece natural um "b" ser escrito como ``` b * 0 = 0 ``` e também ``` b * 1 = b ``` logo temos ``` (0, b) = b * (0,1) ```
- ``` (a, b) ``` = ``` a*(1,0) + b*(0,1) ```
-  ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/abb381b9-f6a3-418c-a97a-4e1e13a6b4bd)

___

### Pensando em termos numéricos...

- Vamos pensar em duas retas:
  - uma com um Vetor.(9,0) como valor 9 no eixo.x, e não possui altura sendo o valor 0 no eixo.y, na reta real;
  - outra com um Vetor.(0,9) como valor 9 no eixo.y, e não possui largura sendo o valor 0 no eixo.x, na reta real;
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a256a50c-eb68-4b0b-bc13-1160113b8c73)
- 
  - vamos pensar em duas retas, uma é um Vetor.(9,0) sendo a coordenada de x = 9, e a coordenada de altura y = 0, ambas na reta real, na cor azul;
  - aqui também está o ponto 1, que é também um Vetor.(1,0) sendo a coordenada de x = 1, e a coordenada de altura y = 0, ambas na reta real, na cor azul;
    - posso pensar no Vetor.(9,0) como sendo a multiplicação de 9 (escalar) vezes o Vetor.(1,0), ou seja: ``` 9 * (1,0) = 9*(1.x) soma 9*(0.y) = (9, 0) ```
-   
  - vamos pensar em outra reta, sendp um Vetor.(0,5) sendo a coordenada de x = 0, e a coordenada de altura y = 5, ambas na reta real, na cor azul;
  - aqui também está o ponto 1, que é também um Vetor.(0,1) sendo a coordenada de x = 0, e a coordenada de altura y = 1, ambas na reta real, na cor azul;
    - posso pensar no Vetor.(0,5) como sendo a multiplicação de 5 (escalar) vezes o Vetor.(0,1), ou seja: ``` 5 * (0,1) = 5*(0.x) soma 5*(1.y) = (0, 5) ```
- 
- O vetor resultante no Ponto (9,5) pode ser representado pela soma do Vetor.(0,5) com o Vetor.(9,0), cujos valores foram multiplicados os vetores (1,0) pelo escalar 9 e, multiplicados os vetores (0,1) pelo escalar 5.
- ``` (9,5) ``` = ``` (9,0) + (0,5) ``` =  ``` 9*(1,0) + 5*(0,1) ```
- ``` (a,b) ``` = ``` (a,0) + (0,b) ``` =  ``` a*(1,0) + b*(0,1) ```        
- Sendo ``` a, b ∈ ℝ ``` pertencendo aos reais, e também ``` F ∈ ℝ ``` como corpo dos escalares reais, aplicadas as condições de linearidade (Op. Adição e Op. Multiplicação), temos um Espaço Vetorial ``` C = ℝ² ``` com fechamento e manutenção da condição de linearidade.  

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
&nbsp; 
  - vamos pensar em duas retas, uma é um Vetor.(9,0) sendo a coordenada de x = 9, e a coordenada de altura y = 0, ambas na reta real, na cor azul;
    - aqui também está o ponto 1, que é também um Vetor.(1,0) sendo a coordenada de x = 1, e a coordenada de altura y = 0, ambas na reta real, na cor azul;
      - posso pensar no Vetor.(9,0) como sendo a multiplicação de 9 (escalar) vezes o Vetor.(1,0), ou seja: ``` 9 * (1,0) = 9*(1.x) soma 9*(0.y) = (9, 0) ```
&nbsp;
  - vamos pensar em outra reta, sendp um Vetor.(0,5) sendo a coordenada de x = 0, e a coordenada de altura y = 5, ambas na reta real, na cor azul;
    - aqui também está o ponto 1, que é também um Vetor.(0,1) sendo a coordenada de x = 0, e a coordenada de altura y = 1, ambas na reta real, na cor azul;
      - posso pensar no Vetor.(0,5) como sendo a multiplicação de 5 (escalar) vezes o Vetor.(0,1), ou seja: ``` 5 * (0,1) = 5*(0.x) soma 5*(1.y) = (0, 5) ```
&nbsp;
- O vetor resultante no Ponto (9,5) pode ser representado pela soma do Vetor.(0,5) com o Vetor.(9,0), cujos valores foram multiplicados os vetores (1,0) pelo escalar 9 e, multiplicados os vetores (0,1) pelo escalar 5.
- ``` (9,5) ``` = ``` (9,0) + (0,5) ``` =  ``` 9*(1,0) + 5*(0,1) ```
- ``` (a,b) ``` = ``` (a,0) + (0,b) ``` =  ``` a*(1,0) + b*(0,1) ```
- Base do Espaço Vetorial é ``` Base = {(1,0) ; (0,1)} ``` Canônica (conveniente pra trabalhar)         
- Sendo ``` a, b ∈ ℝ ``` pertencendo aos reais, e também ``` F ∈ ℝ ``` como corpo dos escalares reais, aplicadas as condições de linearidade (Op. Adição e Op. Multiplicação), temos um Espaço Vetorial ``` C = ℝ² ``` com fechamento e manutenção da condição de linearidade.
- Podemos olhar de cara e enxergar o vetor que queremos!
- BASE CANÔNICA = (1,0) e (0,1)  

___

### Base Canônica (ℝ²) = {(1,0);(0,1)}

- Por exemplo, tomemos o Vetor.(10,3) como sendo um Ponto no Espaço Vetorial de ℝ²:
- ``` (10, 3) ``` = ``` (10,0) + (0,3) ``` = ``` 10 * (1,0)   +   3 * (0,1) ```
- ``` (9, 5) ``` = ``` (9,0) + (0,5) ``` = ``` 9 * (1,0)   +   5 * (0,1) ```
- ``` (a, b) ``` = ``` (a,0) + (0,b) ``` = ``` a * (1,0)   +   b * (0,1) ```
- Base Canônica é uma base convencionada, é aceita como convenção.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/654069ab-563b-412c-8835-04ae8c3f17b2)

___ 

### E se a base fosse "fracionada"?

- Tomemos como exemplo a Base = {(1.5, 0) ; (0, 3.2)}
- ``` { (1.5, 0) ; (0, 3.2) } ```
- Vamos usar o mesmo Vetor.(10,5) pra representar essa base, qual número devemos colocar "em evidência" pra poder representar esse vetor?
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/3e291871-10c1-4f1a-b9ef-ed518525c18b)
- ``` (10, 5) ``` = ``` __*(1.5, 0)   +   __*(0, 3.2) ```
- Para o primeiro vetor a = 10, precisamos achar alguém que vezes 1,5 seja 10, então:
  - ``` 1.5 * x = 10 ``` = ``` (15/10) * x = 10 ``` = ``` x = 100/15 ``` = ``` (5*20) / (3*5) ``` = ``` 20/3 ``` = ``` ≅ 6,666... ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/6e75cf4c-7b95-46f3-a8ca-3a1620f16401)
- Para o segundo vetor b = 5, precisamos achar alguém que vezes 3,2 seja 5, então:
  - ``` 3,2 * y = 5 ``` = ``` (32/10) * y = 5 ``` = ``` y = 50/32 ``` = ``` (2*25) / (2*16) ``` = ``` 25/16 ``` = ``` 1,5625 ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c8a6aaf4-8f70-49a4-8569-d5c30c227d4e)
- FORA DA BASE CANÔNICA A PORCA TORCE O RABO! 🐷 🌀 🍑
- Funciona, só vai ser uma merda de usar.

___ 

### Base Não-Homogênea, como o amigo disse: "números quebrados"

- Característica engraçada nessa base não é homogênea.
- A medida dos dos lados não é igual quando usamos essa base sugerida {(1.5, 0);(0, 3.2)}
- Um vetor igual do tipo (5,5) é homogêneo na base canônica:
  - ``` (a, b) ``` = ``` (a, 0) + (0, b) ``` = ``` a * (1,0)   +   b * (0,1) ```
  - ``` (5, 5) ``` = ``` (5, 0) + (0, 5) ``` = ``` 5 * (1,0)   +   5 * (0,1) ```
- Vetores com coordenadas iguais terá multiplicadores iguais também.
  - ``` (a, b) ``` = ``` (a, 0) + (0, b) ``` = ``` a * (1,0)   +   b * (0,1) ```
  - ``` (1.5, 3.2) ``` = ``` (1.5, 0) + (0, 3.2) ``` = ``` 1.5 * (1,0)   +   5 * (0,1) ```
  - ``` (5, 5) ``` = ``` a * (1.5, 0) + b * (0, 3.2) ```
- Então temos que ``` 1,5 * a = 5 ``` e também que ``` 3,2 * b = 5 ```
  - Portanto teremos que ``` 1,5 * a = 5 ``` ∴ ``` (15/10)*a = 5 ``` ∴ ``` a = 50/15 ``` ∴ ``` a = (5*10) / (5*30) ``` ∴ ``` a = 10/3 ``` ∴ ``` a ≅ 3,333... ``` 
  - Também teremos que ``` 3,2 * b = 5 ``` ∴ ``` (32/10)*b = 5 ``` ∴ ``` b = 50/32 ``` ∴ ``` b = (2*25) / (2*16) ``` ∴ ``` b = 25/16 ``` ∴ ``` b = 1,5625 ```
- Logo, numa escala de proporção 1:1 ou 5,5, teríamos um vetor "normal" homogêneo.
- Logo, numa escala de proporção 3,333 : 1,5625, teríamos um vetor "torto" heterogêneo.
- **Nesse Espaço Vetorial** ``` Base = {(1.5, 0) ; (0, 3.2)}) ``` **medir no Eixo.X é diferente de medir no Eixo.y.**
- Porque o 'fator de multiplicação' no eixo x é maior que o 'fator de multiplicação' no eixo y são diferentes, logo as proporções são "achatadas", "alongadas".
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/357a8afa-7547-43bc-8c2f-edf90a136ee4)

___

### Base Homogênea (1:1) ou {(1,0);(0,1)}

- Nossa Base Canônica é Homogênea (mesmo valor e pêso para os dois eixos).
- Base Canônica:
  - Vetor de tamanho 1, ou seja o Módulo do Vetor (1,0) é 1, comprimento é 1;
    - ``` |Vetor.(1,0)| = 1 ``` é o mesmo que ``` |(1,0)| = 1 ``` 
  - Vetor de tamanho 1, ou seja o Módulo do Vetor.(0,1) é 1, comprimento é 1;
    - ``` |Vetor.(0,1)| = 1 ``` é o mesmo que ``` |(0,1)| = 1 ```
  - Não possui achatamento, proporções homogêneas.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/47217e29-2a65-40f4-8ae4-094b36a2d40e)
- Mais tarde poderemos "MUDAR DE BASE".
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2446e363-4d71-48d7-a7a8-fef96aa88867)

___ 

### "Mudar de Base" no futuro serão as "Transformações Lineares"

- No futuro, vamos aprender como "Mudar de Base" e então teremos uma operação (próximo assunto "Transformações Lineares"), que vai nos permitir mudar um vetor de base.
- A figura "qualquer" ao mudar de base vai "achatar", "rodar", "lá pra ponta".
- Pra piorar, essa Base {(1.5, 0) ; (0, 3.2)} ainda possui o centro na origem ``` {(_, 0);(0, _)} ```, pois a coordenada do primeiro vetor é zero e a coordenada do segundo vetor também é zero.
- Podemos usar transformações lineares pra enxergar, virar, comprimir, etc., a imagem.
- A Base do sistema (Espaço Vetorial) que utilizamos vai determinar a maneira como as coisas são visualizadas no exemplo.
- A base poderia também ser alterada, e ainda pior, pensada em outras dimensões, com Eixo.(x,y) ou Eixo.(x,y,z) ou Eixo.(j,k,l,m) ...
- Pausa pro Café e pro "Chá"!
  - The 4th Dimensions Shorts by Tibees [En]
    - https://www.youtube.com/watch?v=NwenCsCTwlc&list=PLATpsZGmpkg8PYPS8HEPehR0l9tZYwrCi
  - Explorando outras dimensões - Alex Rosenthal and George Zaidan [En; Pt-Br subs]
    - https://www.youtube.com/watch?v=C6kn6nXMWF0

___ 

### Dúvida sobre Projeções de Mapas (planificados vs. esféricos)

- Tudo que vemos como um plano achatado, pode ser interpretado como um conjunto de vetores.
- Infelizmente, toda projeção cartográfica é uma TENTATIVIA de ACHATAMENTO da esfera terreste para um plano. Logo, haverá distorções...
- A Projeção é como se fosse um Mergulho.
&nbsp;
- Projeção de Mercator (um dos primeiros mapas planificados da Terra);
- Projeção de Foco Único (um ponto superior que emite um raio de luz e projeta a imagem num plano de fundo);
  - Algumas vezes, essa linha vai "furar" algumas coisas, passando duas vezes pela crosta do globo... É como se fosse um feixe de luz, distorcido pela projeção, mas a mesma linha passando mais de uma vez pelo globo - notando a questão de "distorções" (conceito requer melhor elaboração - sou de humanas!)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d4e4d8a9-251e-46ed-8f11-29e517181a28)
- Pergunta sobre Geometria Euclidiana vs. Geometria Analítica:
  - ???
  - CALMA JOVEM! Ed tá tentando simplificar a vida, não vamos complicar ainda não, a Álgebra Linear pode trabalhar com vetores de qualquer ordem (eixos x, y, z).

___

### Um ponto no ℝ³ 

- Um ponto no ℝ³ seria um TERNO.
  - Um ponto no ℝ² era uma DUPLA (duas coordenadas).
- Um ponto no ℝ³ será x, y, z, com uma representação de coordenadas em 3 eixos.
- Minha representação do ℝ³ terá um Eixo.x, Eixo.y, Eixo.z (altura).
  - ``` ℝ³ ``` com pontos ``` (x, y, z) ∈ ℝ ```
- Um ponto aleatório sendo (a, b, c) terá uma coordenada de "a", "b" e "c". 
- Será uma CONJUNÇÃO DE PONTOS (largura, profundidade, altura).
- Álgebra Linear também trabalha com isso!
- **Base Canônica ℝ³** será ``` ℝ³ = { (1, 0, 0) ; (0, 1, 0); (0, 0, 1) } ``` 
- Base Canônica é amplamente utilizada por ser praticamente "espontânea", podemos escrever como um vetor facilmente.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/76592f9e-8d41-453a-a095-a5c6689fe123)


___

### Base Canônica e Conceito de Representação

- **Todas as BASES definem um ESPAÇO, sejam elas canônicas ou não.** - Prof. Ed
- A Base Canônica é apenas a "mais simples" pra gente poder representar as coisas.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/4f16f7b8-b6f8-45d1-8414-1b97ae9f71b3)
- **Necessidade de entendermos o CONCEITO DE REPRESENTAÇÃO!**
- Vamos imaginar um sistema cartesiano, com um Ponto.(a,b).
  - Temos uma reta que liga o Ponto.(a,b) ao centro-origem que terá o Módulo do Vetor.(A,B) representado por ``` |(a,b)| ```.
    - Esse |Módulo.(a,b)| é basicamente o "comprimento" do vetor. Vamos chamar de "r", de modo que ``` r = |(a,b)| ```. 
  - Esse ângulo da reta que liga a Origem ao Ponto.(A,B) será o ângulo theta (θ). ``` Ângulo Theta θ ``` 
    - R = Módulo do Vetor.(a,b) = |(a,b)| = Hipotenusa
    - O ponto "a" é representado no ``` Eixo.x = a ``` = Cateto Adjacente θ
    - O ponto "b" é representado no ``` Eixo.y = b ``` = Cateto Oposto θ
- Sabendo que, de acordo com as **Relações de Trigonometria**, podemos relacionar a Hipotenusa (H), o Cateto Adjacente (CA), o Cateto Oposto (CO) assim:
  - Cosseno de Theta = ``` Cos.θ = Cateto Adjacente / Hipotenusa ```
  - Seno de Theta = ``` Sen.θ = Cateto Oposto / Hipotenusa ```
- Do ponto.(a,b), temos uma projeção de "a" no Eixo.x., que pode ser representado por ``` a = r * Cos.θ ```
- Do ponto.(a,b), temos uma projeção de "b" no Eixo.y, que pode ser representado por ``` b = r * Sen.θ ```
  - Podemos tentar pensar assim:
  - ``` Hipotenusa = r ```
  - ``` Cateto Adjacente = a ``` ou talvez, ``` Eixo.x de "a" = (a, 0) ```
  - ``` Cateto Oposto = b ``` ou talvez, ``` Eixo.y de "b" = (0, b) ```  
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d360d161-2ac4-4e56-b593-c6f4b1397d87)
- Isso aqui se chama "Representação por Coordenadas Polares":
- ``` (a, b) = (r\*cos.θ, r\*sen.θ) ```
- A DUPLA de pontos (a, b) pode ser representada toda pelo tamanho do ``` vetor.(a,b) = r ```.
- Tudo isso pra provar que, em Matemáticas, podemos representar a mesma coisa (realidade) na matemática de VÁRIAS FORMAS DIFERENTES.
- Mas tem uma coisa que vai ser FODA:
  - Se eu quiser usar coordenadas polares, preciso de um "r" e um ângulo theta "θ".
  - Temos um PAR ``` ( r, θ ) ``` mas preciso saber o tamanho do vetor e um ângulo pra poder trabalhar com ele.
  - Eu preciso OBRIGATÓRIAMENTE de 2 valores, pois esse ponto está num PLANO!

___

### Dimensão ℝ² - PLANO

  - É aí quem vem o CONCEITO DE DIMENSÃO.
  - Um ponto no plano, num espaço de dimensão-2, sempre vai precisar de 2 valores pra representar ele, pode ser (x, y), pode ser (a, b), pode ser (r, θ), qualquer coisa... Mas sempre vai precisar de dois valores, pois o plano possui dimensão 2.
  - Sempre **precisamos de DUAS GRANDEZAS pra falar um UM PONTO** ```(a, b)``` no plano (Cartesiano, ℝ², etc.)
- **Na mesma forma, num Espaço ℝ³, vamos usar sempre 3 GRANDEZAS.**
- Existem outros sistemas (extensão da "coordenada polar") pra representar um ponto no ℝ³.
&nbsp;
- Um ponto qualquer no ℝ³ vamos pegar "a" que pode ser visto assim:
  - Agora vamos ter uma altura no Eixo.z
  - Teremos uma projeção no ponto (x,y) vai ter uma coordenada (a,b,c).
  - Preciso de três grandezas e poderia representar como ``` (r, θ, α) ``` o tamanho do Vetor.(ab) sendo "r", o ângulo theta "θ", e o ângulo alfa "α".
  - Poderíamos até representar esse ponto (a,b,c) com as coordenadas:
  ```
  - (a, b, c)
  - (r, θ, α)
  - a = r * Sen.θ
  - b = r * Cos.θ
  - c = r * Sen.α
  ```
- No fundo, vou precisar SEMPRE de 3 elementos pois temos um sistema de 3 Dimensões.
- Não sei quais são, posso até mudar de representação, escolher outros ângulos, mas no fundo sempre vou precisar de 3 elementos.
- Não posso representar com dois elementos esse ponto (a,b,c).
- Imagine o canto da sua sala...
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/98d45291-ca43-4f03-a6bd-745cf0b6370b)

___ 


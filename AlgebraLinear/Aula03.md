# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://youtu.be/taT2gdJgvSo?si=9Z8NGCyWux4XCfUZ```

___

## Álgebra Linear - Aula 03

- Hoje vamos definir "Vetor" e "Espaço Vetorial".
- Vamos à uma idéia intuitiva pra depois definir formalmente...
- Reta dos números Reais ( ℝ ), conjunto dos números Reais ( ℝ ). Por curiosidade, temos uma seqüência de conjuntos contidos uns dentro dos outros.
  
  - Conjunto dos números Naturais ( ℕ ), inteiros positivos sem o zero (1, 2, 3, 4, 5, ...).
    - O conjunto dos números naturais é representado por ℕ. Ele reúne os números que usamos para contar (incluindo ou não o zero, é uma questão debatida entre matemáticos, mas a historiografia mostra que o zero foi conceituado _a posteriori_ (vide números romanos sem haver zero), e antigamente não era tido como algo natural, tipo "não é nem contável, saca...?") e é infinito. 

  - Conjunto dos números Inteiros (	ℤ ), da palavra Zahlen (em alemão, número).
    - O conjunto dos números inteiros é representado por ℤ. Reúne todos os elementos dos números naturais (ℕ) e seus opostos (* -1). Assim, conclui-se que ℕ é um subconjunto de ℤ (ℕ ⊂ ℤ):
    - ℤ = {..., –4, –3, –2, –1, 0, 1, 2, 3, 4, ...} ou ℤ* = ℤ – {0} 

  - Conjunto dos números Racionais ( ℚ ), de Quociente, que pode ser escritos como uma fração/razão ( a / b ), onde a e b pertencem aos Inteiros ( a, b ∈ ℤ ).
    - O conjunto dos números racionais é representado por ℚ. Reúne todos os números que podem ser escritos na forma p/q, sendo p e q números inteiros e q ≠ 0.
    - ℚ = {0, ±1, ±1/2, ±1/3, ..., ±2, ±2/3, ±2/5, ..., ±3, ±3/2, ±3/4, ...}.
    - Note que todo número inteiro é também número racional. Assim, ℤ é um subconjunto de ℚ.
    - Importante ressaltar que as dízimas periódicas são números racionais. Elas são números decimais que se repetem após a vírgula, por exemplo: 1,4444444444... Embora possua infinitas casas decimais, pode ser escrito como a fração 13/9.

  - Números como Pi, E (log. Neperiano), não são Racionais e não existe uma fração exata, logo tais conjuntos são os Irracionais ( 𝕀 ).
    - O conjunto dos números irracionais é representado por 𝕀. Reúne os números decimais não exatos com uma representação infinita e não periódica, por exemplo: 3,141592... ou 1,203040...
        
- A soma, a União dos conjuntos Racionais ( ℚ ) com o Irracionais ( 𝕀 ), forma o conjunto dos números Reais ( ℚ ∪ 𝕀 = ℝ ). Não parece, mas há muito mais números Irracionais do que Racionais. Mais ou menos o que acontece com as pessoas.
  - O conjunto dos números reais é representado por ℝ. Esse conjunto é formado pelos números racionais (ℚ) e irracionais (𝕀). Assim, temos que ℝ = ℚ ∪ 𝕀.
  - Além disso, ℕ, ℤ, ℚ e 𝕀 são subconjuntos de ℝ.
  - Mas, observe que se um número real é racional, ele não pode ser também irracional. Da mesma maneira, se ele é irracional, não é racional. 

- Vamos trabalhar na Reta do conjunto ℝ, que é a União dos Racionais com Irracionais.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c740690a-46ab-4dce-be69-0c4d471dc6d4)

___

- Pensemos num deslocamento do zero ao três (andando 3 passos na direção positiva), na cor azul.
- Tomemos um deslocamento do zero ao dois (andando 2 passos na direção positiva), na cor amarela.
- Consideremos a soma do Azul com o Amarelo, somando o deslocamento do zero ao dois com o deslocamento do zero ao três, totalizando um deslocamento de 5 unidades (vermelho).
- Esse é o modo de somar vetores, qualquer vetor pode ser considerado como um deslocamento de um ponto ao outro. No caso da reta Real, todos os deslocamentos vão acontecer em cima da reta Real ( ℝ ).  
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ebbdbf74-9533-4f6d-ba8a-9de00f4bbf03)

- Outro exemplo, a soma do três (3) com o menos dois (-2). A soma de +3 com -2 será ( 3 + (-2) = 1 ).
- Podemos pensar nas somas e subtrações como deslocamentos da reta. Isso nos dá uma pista interessante sobre os vetores.
- Os vetores possuem um **Tamanho (ou Módulo)**, uma **Direção (sobre a reta Real)**, e um **Sentido (positivo ou negativo)**, andando pra depois ou antes do zero.
- Vetor é [Módulo, Direção e Sentido]. Isso vai nos ajudar a trabalhar num Plano (famoso R-dois).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/22f1de47-b8b2-48a1-a8e8-97bf1e972667)

___

## Quem é o famoso R-dois?

- Quem é o "Espaço-Produto"?
- Imagine um conjunto finito A = {1, 2, 3}
- Quem seria o produto da relação de A * A = (a1, a2)?
  - A vezes A, seria um conjunto de pares de pontos que possuem  
  - Conjunto de pares com (a1, a2 ∈ A), no caso A * A, ou A².
  - A * A = {
            (1,1); (1,2); (1,3);
            (2,1); (2,2); (2,3);
            (3,1); (3,2); (3,3);
            }
   
- Plotando os dados no gráfico, teremos os elementos de A no eixo x, e os elementos de A no eixo y.
- Tomamos os elementos: {(1,1); (1,2); (1,3); (2,1); (2,2); (2,3); (3,1); (3,2); (3,3)} que é A * A ou A² (vermelho).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/117d83da-5c42-4604-bbaf-1d4ba28be3fb)

___

## Conjunto dos números Reais (não é um conjunto finito...)

- Plano Cartesiano (René Des Cartes, cartógrafo). Quem não era da Nobreza, não era de "renome" tinha atribuídos aos nomes as suas funções profissionais (Shoe + Maker = Schumacher, 
- Logo, temos o Espaço R-dois, ou seja:
  - ℝ * ℝ = ℝ²
- Os pontos desse espaço são os números da reta ℝ1, com os números da reta ℝ2, e também com seus respectivos pares da reta ℝ². São os pares de pontos (ℝ1, ℝ2).
  - Tomemos em vermelho/roxo o ponto do par (3,1), podendo representar um vetor vermelho/roxo que sai do zero (origem) e vai até (3,1).
  - Tomemos em laranja o ponto do par (2,3), podendo representar um vetor laranja que sai do zero (origem) e vai até (2,3).
  - A Soma dos Vetores do ponto (3,1) com o ponto (2,3), será o novo ponto (5,4) com um vetor na cor verde...
    - Lembrando: uma álgebra é um conjunto com duas operações, com regras específicas, e estamos definindo a primeira regra. Uma operação (soma) que relaciona dois vetores (laranja, vermelho).
  - Podemos representar graficamente o seguinte paralelismo. Do vetor vermelho/roxo, vamos traçar uma linha paralela, no final do vetor laranja, e que coincide com o final do vetor verde, ainda assim, paralelo à origem (3,1) e com sua nova posição (2,3) -> (5,4). Trata-se do mesmo vetor vermelho/roxo, mas deslocado num novo ponto.
  - Também podemos representar graficamente o seguinte paralelismo. Da ponta do vetor laranja (2,3), vamos traçar uma linha paralela, no final do vetor vermelho/roxo (3,1), e que coincide com o final do vetor verde (5,4), ainda assim, paralelo à origem (2,3) e com sua nova posição (3,1) -> (5,4). Trata-se do mesmo vetor laranja, mas deslocado num novo ponto.
  - São os mesmos vetores trabalhando em paralelo, mas dois vetores começam na origem (0,0) e dois vetores começam no final dos vetores (3,1) e (2,3).
  - Essa é a **Regra do Paralelograma**. Os lados opostos são paralelos, e essa regra é a **SOMA DE VETORES**. A soma dos vetores formam uma *Figura Geométrica*. 

___

## Uma coisa interessante:

- Antes, por que isso não acontecia nos Números Reais ( ℝ )?
- Pois nos números Reais, todos ficam "dentro" da reta, somando o vetor 0->2 com o vetor 0->3, ainda estamos na RETA, estando num conjunto e sem conseguir sair de dentro dele.
*- Pra ser uma Álgebra, precisamos ter um conjunto com duas operações (A, +, *) que precisam ser FECHADAS, ou seja, o resultado das operações continuam dentro do próprio conjunto.*
  - Por exemplo, com um número real (2), com um número real (3), a soma deles tem de ser um número real (5), não posso sair dos números reais.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/f1122af7-6882-445b-b093-a93d53c9439b)
  - Temos um conjunto de regras pra criar objetos matemáticos.

- **Nessa altura, perguntamos: "Vetores existem?". Existir é uma concepção mental das nossas cabeças, não necessariamente um objeto no mundo, mas PODEMOS usar vetores pra representar COISAS no mundo.** Isso é um ponto importante da matemática. 
- Podemos criar uns objetos para representar coisas reais, que de fato existem.
- O que é um vetor (já visto)? O vetor possui algumas propriedades, representando uma espécie de deslocamento, primeiro saindo do (0,0) até o ponto (3,1) tendo caminhado três unidades no total. Caminhei também duas unidades em uma direção (x) e depois três unidades em outra direção (y), fazendo o vetor saindo do (0,0) e chegando no (2,3).
- Como vimos, **Vetores possuem Módulo, Direção e Sentido**.
  - Na reta Real ( ℝ ) a Direção não fazia diferença, pois todos os números estavam na mesma direção (reta suporte do vetor) no exemplo, com Sentido crescente ou Decrescente (linha preta). Vetor pode me levar pra um lado ou outro. Outro vetor na reta Real (origem até (2,3)), também possui Sentido (positivo ou negativo) e Direção (reta suporte do vetor), na cor preta. Também podemos traçar uma terceira reta (também na cor preta) que será o **Vetor Resultante**, que possui Direção e Sentido. 
  - Módulo é o "tamanho" do vetor (ou seja, o comprimento dele).
  - Todos os vetores possuem essas três grandezas associadas a ele (Módulo, Direção e Sentido).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c1040aab-d5c5-411b-9da9-203938af25db)

___

## Outros exemplos da Soma:

- Voltemos na reta Real ( ℝ ) com ponto zero, um, dois, três, etc., e também -1, -2, -3, etc.
- Se eu somar (dentro da reta, não podemos sair da reta) 1 com 2, estou medindo o Módulo de 1 com o Módulo de 2 (1 + 2) tenho um deslocamento de uma unidade somada com duas unidades de deslocamentos. No caso, pegando um número real ℝ = 1, somando com outro número real ℝ = 2, todos na mesma reta, cujo resultado é a soma de ambos com um número real ℝ = 3 como Módulo. Faz sim sentido falar em Módulo, pois é o "comprimento" do vetor.
- A Direção é a mesma reta Real (ℝ), a direção é única. E o Sentido vamos perceber ao somar, por exemplo +4 (-5).
- O Sentido do vetor (+4) somado ao vetor (-5) terá como resultante o vetor 4 + (-5) = -1, ou seja, o sentido do deslocamento diminuiu, parei num ponto anterior à origem.
- O Deslocamento somado (+4 passos) e o deslocamento quando voltei (-5 passos), vai resultar num ponto (-1 passo) de onde eu comecei (mais atrás).
  - No fundo, ainda estamos dentro de um paralelograma (todos sobre a mesma reta), mas pensando direitinho, temos um caminhar (3 passos) positivo, mesma Direção (reta Real) ℝ, com Módulo |3|, sendo a Direção a reta Real (ℝ) que dá suporte ao vetor que mora dentro dela, e o Sentido (+) é Positivo, partindo de 0 até 3. (em vermelho/roxo)
  - Na cor amarela, vamos ao vetor (-2), com Módulo = |2| que são duas unidades/passos, na Direção da reta Real ( ℝ ), mas com Sentido (-) Negativo, pois parte da origem e vai à esquerda dela.
  - A Resultante será o deslocamento em vermelho somado ao deslocamento em amarelo, Resultando no ponto 1. Por isso (+3) em vermelho somado a (-2) em amarelo, temos a Resultante = +1 (amarelo).
  - Por isso +3 +(-2) = +1, o Módulo é o deslocamento. A Direção é a reta suporte (onde passa o vetor na reta ℝ). O Sentido pode ser origem-direita (Positivos) ou origem-esquerda (Negativos).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/258ef862-1698-410e-9643-7752176198fc)
    
___

## Vamos ao Conjunto ℝ² (ℝ * ℝ)

- Temos um mundo bem maior, sendo a reta real (ℝx) com a outra reta real (ℝy), e formamos todo um Plano (ℝ²) infinitamente estendível aos 4 quadrantes (+,+) (+,-) (-,+) (-,-).
- O Espaço-Produto é o Plano Cartesiano e TODOS OS PONTOS DO PLANO são vetores do ℝ² (ℝ * ℝ).
- Vamos formalizar, com exemplos numéricos...
- Ponto (a,b) é um ponto (ℝa, ℝb) cujo vetor sai da Origem e termina o deslocamento em (a,b). Por representar um deslocamento, o vetor pode ser TRANSLADADO.
- Começar o ponto de início em outro lugar (em amarelo), com a mesma Direção e Sentido e Módulo, **até posso dizer que é O MESMO VETOR**. Teorema de Tales (teorema de feixes paralelos), com mesma inclinação (ângulo = θ), qualquer feixe de retas paralelas (cortado pelo vermelho/roxo), os ângulos serão sempre iguais. Teorema de Tales (de Mileto). 
- Vetores Paralelos são Vetores Iguais (Módulos iguais, Direções iguais, Sentidos iguais). Isso nos permitirá fazer a SOMA VETORIAL.
- Dois vetores, transladados em novas retas paralelas sobre os pontos de término, formam um Paralelograma com um Vetor Resultante da Soma (pequeno gráfico em vermelho/roxo menor e abaixo).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/b51948e0-632b-4522-b809-f2e8f12311da)

___

## Linearidade

- Lembra da história de LINEARIDADE da aula passada? Quando é Linear?
- A Função é Linear quando:
  - Aplicamos numa Soma, ou seja quando aplicamos numa soma ƒ(a + b) e obtemos ƒ(a) + ƒ(b), ou seja, ƒ(a+b) = ƒ(a) + ƒ(b).
  - Aplicamos num Produto, ou seja quando aplicamos essa operação sobre uma Constante (K, um "escalar") de um número real multiplicado por um elemento, obtemos ƒ(k * a) = k * ƒ(a).
- Essas são as **Condições de Linearidade** ƒ(a+b) = ƒ(a) + ƒ(b) e  ƒ(k.a) = k*ƒ(a).
- Vamos entender por que o elemento "K" é chamado de "escalar"...
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/89496a80-8299-4d86-a1f4-6701e457ba27)

___

## Escalar ( k )

- Tomemos o Plano Cartesiano (ℝ²).
- Vamos pegar o vetor em amarelo com ponto cartesiano em (2,1). Vamos multiplicar por 2 (onde k é um número real, da condição), onde ƒ(k.a) = k * ƒ(a), com k ∈ ℝ.
- Consideremos que vamos definir a multiplicação dizendo que a multiplicação do número pelo escalar é a multiplicação das coordenadas 2 * (2,1) = (4,2), resultando no ponto (4,2).
- O novo vetor em rosa (4,2) é o dobro do vetor em amarelo (2,1), e possui retas suportes (eixo x e y) com os ângulos iguais ( θ ), tanto no vetor (2,1) quanto no vetor (4,2).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2000a611-d0b4-422e-9cab-1da90fb1f59b)
- O Módulo do vetor (4,2) em rosa é o dobro do módulo do vetor (2,1) em amarelo, ou seja, quando multiplicamos um vetor pelo seu ESCALAR o vetor não sai da reta suporte ( ), continua na mesma reta suporte (inclinação dos θ constantes, será assim no futuro com trigonometria com os ângulos independentemente do tamanho do círculo).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/6c8845ad-906c-4d03-a1d5-9bb56e0207f3)

___

## Mais Escalar ( k )

- Vamos para um novo exemplo, com um vetor (3,1) em lilás. Vamos multiplicar por um escalar sendo o número real 2.
- No vetor (3,1) vamos multiplicar por 2, resultando em 2 * (3,1) = (6,2), com um novo vetor (em azul claro) no ponto (6,2). Trata-se da mesma reta, são vetores na mesma reta, pois são produtos dos mesmos vetores.
- No lado do eixo Y, na altura, temos o vetor ($_, 1) em lilás e o vetor ($_,2) em azul com a altura sendo o produto entre 1 * 2 = 2, ou (1/3) = (2/6), ou (2/6) = (2.1 / 2.3) = (1/3) simplificado.
- Essa medida, a divisão da Altura pelo Comprimento é constante. Se multiplicar por 3, teremos 3 * (3,1) = (9,3), ou seja, a mesma medida. E a altura 3 dividido pelo comprimento 9 = (1/3), estamos falando da mesma reta, e no caso (1/3).
- Logo, temos a (altura / comprimento) = (3/9) = (3.1 / 3.3) = (1/3)(tg), é a tangente da reta (divisão do seno pelo cosseno). A tangente é a mesma e medirá a inclinação (do ângulo θ), com a mesma abertura, mesmo que mudando os comprimentos e alturas.
- Observamos que o vetor quando multiplicamos, ele não saiu da reta suporte (continua na reta suporte).
- Porém, vai esticando, alongando, um deslocamento maior, faz sentido mentalmente, duplicar ele.
- Se o vetor é o deslocamento, duplicar ele é duplicar o deslocamento. Se saímos da origem e duplicar, sairemos de (0,0) até (3,1) até (6,2) até (9,3).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d0fe52da-2578-4e15-9047-21f7fbe9eeee)

___

## Na aula de hoje aprendemos...

- Sobre Vetores...
- Indiretamente sobre Espaço-Vetorial (próxima aula tem mais, com definição formal)...
- Em matemática, temos o Exemplo e a Definição Formal (explicado detalhadamente todas as coisas, objetos, operações)...
- Na aula de hoje tivemos a introdução de Vetores e Espaço-Vetorial e na próxima aula vamos Definir Formalmente.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/3ecb54c1-a7d6-448a-b2e2-0e696ea2585c)

FIM!

# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://youtu.be/taT2gdJgvSo?si=9Z8NGCyWux4XCfUZ```

___

## Álgebra Linear - Aula 03

- Hoje vamos definir "Vetor" e "Espaço Vetorial".
- Vamos à uma idéia intuitiva pra depois definir formalmente...
  - Reta dos números Reais ( ℝ ), conjunto dos números Reais ( ℝ ). Por curiosidade, temos uma seqüência de conjuntos contidos uns dentro dos outros.
  - Conjunto dos números Naturais ( ℕ ), inteiros positivos sem o zero (1, 2, 3, 4, 5, ...).
  - Conjunto dos números Inteiros (	ℤ ), da palavra Zahlen (em alemão, número), o conjunto dos números inteiros é representado por ℤ. Reúne todos os elementos dos números naturais (ℕ) e seus opostos (* -1). Assim, conclui-se que ℕ é um subconjunto de ℤ (ℕ ⊂ ℤ): 
  - Conjunto dos números Racionais ( ℚ ), de Quociente, que pode ser escritos como uma fração/razão ( a / b ), onde a e b pertencem aos Inteiros ( a, b ∈ ℤ ).
  - Números como Pi, E (log. Neperiano), não são Racionais e não existe uma fração exata, logo tais conjuntos são os Irracionais ( 𝕀 ).
- A soma, a União dos conjuntos Racionais ( ℚ ) com o Irracionais ( 𝕀 ), forma o conjunto dos números Reais ( ℚ ∪ 𝕀 = ℝ ). Não parece, mas há muito mais números Irracionais do que Racionais. Mais ou menos o que acontece com as pessoas.
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

- Uma coisa interessante:
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

## Outros exemplos:

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
    

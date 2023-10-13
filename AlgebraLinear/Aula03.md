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

- Plano Cartesiano (René Des Cartes, cartógrafo).
- 

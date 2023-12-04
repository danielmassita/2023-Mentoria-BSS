# Programa de Mentoria BSS 2023
# Álgebra Linear

``` https://www.youtube.com/live/E9QD15P2t64 ```

___

## Álgebra Linear - Aula 08

- Marco Civil da Internet - Estamos gravando!
- Ontem, nós estudamos **"O Assunto dos assuntos"** na matéria de Álgebra Linear (Dimensões, Grandezas).
- Discutimos BASES (de sistemas) DE ESPAÇOS VETORIAIS.
- Vamos falar um pouco mais hoje...

___

### O que é uma Base? 

- Exemplo do ℝ², como sendo um Espaço Vetorial, usando o próprio Conjunto dos números Reais ( ℝ ) como **Corpo para extrair os valores constantes (escalares)**.
- ``` ℝ ```  é o Conjunto dos Escalares
- ``` ℝ² ``` é o Espaço Vetorial formado pelos pares Ponto.(x,y)
- Temos em ``` ℝ² ```, um Par e/ou Ponto.(a,b) ``` (x, y) ```, onde ``` (x, y ∈ ℝ) ``` "x" e "y" pertencem aos Reais.
- A Base Canônica será ``` Base Canônica = {(1,0); (0,1)} ``` (a base canônica é um conjunto de dois pares (1,0) e (0,1)).
  - Essa não é a única base possível, porém é mais simples... Pois se tenho um ponto/par ``` (a, b) ``` eu posso representar como sendo ``` a*(1,0) + b*(0,1) ``` que é o mesmo que ``` (a,0) + (0,b) = (a, b) ```.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/95e72be1-7904-4217-aad0-2bbb792d7be1)

___ 

### Transformação Linear

- **Transformação Linear é uma FUNÇÃO que pega pontos de um espaço e leva em outro espaço, atendendo CONDIÇÕES DE LINEARIDADE.**
- A Função aplicada no Ponto.(A+B) vai ser igual à transformação de "A" mais à transformação de "B"; e a transformação de um escalar vezes um Vetor, precisa dar o Escalar * (Transformação do Vetor).
- Vamos para alguns exemplos!

___

### Transformação - Função T

- Vamos pegar uma Função T, que pega um Vetor.(x,y) e leva ele ao Vetor com Coordenadas (2x+y, x+y).
- ``` T(x,y) ``` = ``` (2x+y, x+y) ```
- Vamos ver como seria essa Transformação aqui?
  - Transformação é uma função (no caso, pegando elementos de ℝ² e levando em elementos de ℝ², pois tô pegando um par de números reais (x,y) e transformando em OUTRO par de números reais (2x+y, x+y)).  
- ``` T:ℝ² → ℝ² ```
  - Basicamente, nessa transformação estou pegando um ponto do Real (ℝ²) e levando em outro ponto do Real (ℝ²). Agora, vamos ver como ficam esse "pontos" após a transformação para se ter uma idéia.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5b85204a-f33d-46ef-b9d9-2fa465f7b322)
- Vamos pensar novamente, agora aplicando duas transformações ao vetor original!
- Vejamos, aplicando duas transformações: T(1,1), T(2,2).
  - ``` T(x,y) ``` = ``` (2x+y, x+y) ```
  - ``` T:ℝ² → ℝ² ```
  - T(1,1)
    - ``` T(x,y) ``` = ``` (2x+y, x+y) ``` 
    - ``` T(1,1) ``` = ``` (2(1)+(1), (1)+(1)) ```
    - ``` T(1,1) ``` = ``` (2+1, 1+1) ```
    - ``` T(1,1) ``` = ``` (3, 2) ``` 
  - T(2,2)
    - ``` T(x,y) ``` = ``` (2x+y, x+y) ``` 
    - ``` T(2,2) ``` = ``` (2(2)+(2), (2)+(2)) ```
    - ``` T(2,2) ``` = ``` (4+2, 2+2) ```
    - ``` T(2,2) ``` = ``` (6, 4) ```
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/232400e6-8a12-4274-81f0-844b013b95c2)
- O que podemos perceber desse momento no gráfico?
  - Uma das condições pra ser linear ``` T(k.V) = k * T(V) ```
  - **Existe uma relação do DOBRO de um vetor para outro**.
    - ``` T(x,y) ``` = ``` (2x+y, x+y) ``` 
    - ``` T(1,1) ``` = ``` (3, 2) ``` 
    - ``` T(2,2) ``` = ``` (6, 4) ```
    - De T(1,1) para T(2,2) temos uma relação de 2:1. Nos valores transformados, temos (3,2) e (6,4), também com uma relação de (6/3) = 2:1 no valor de "a" e (4/2) = 2:1 no valor de "b".
  - Devemos considerar que ``` T(K * Vetor.V) = K * T.(Vetor.V) ```.
  - O T(2,2) é a mesma coisa que dizer o T(2*(1,1)) = 2 * T(1,1), que é o dobro do valor do T(1,1) = (3,2). Vemos que T(2,2) = (6,4).
  - ``` T(K * Vetor.V) = K * T.(Vetor.V) ```
  - ``` T(2,2) = T(2*(1,1)) = 2 * T(1,1) = 2 * (3,2) = (6,4)```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/9cea057d-599a-4035-b8c3-55683739a184)
- **"A Transformação de "k" vezes "v", onde "k" é um escalar, é igual à "k" vezes a transformação de "v" (que é um vetor)."**
  - Podemos testar T(4,4) que é (12,8).
  - T(4,4) é o dobro de T(2,2).
  - T(2,2) = (6,4)
  - T(4,4) = (12,8)
  - ``` T(4,4) = T(2 * T(2,2)) = 2 * (6,4) = (12,8) ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/42533ab4-9946-4cbf-a880-4f1f68494a89)

___

### Transformando T(x,y) = ( 2x+y, x+y )

- ``` T(x, y) = ( 2x+y , x+y ) ```
- Vamos continuar trabalhando na mesma Transformação Linear T(x,y).
- Vamos pegar o ponto T(1,1) e T(1,0) e T(2,1):
  - ``` T*(1, 1) = (3, 2) ```
  - ``` T*(1, 0) = (2, 1) ```
  - ( + ) --------------------
  - ``` T*(2, 1) = (5, 3) ```
  - 

___

### Resumo Geral do Exemplo de Aula! 

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/963b28ab-5b02-4c7b-98f5-2bc45910f209)
- 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a8292185-47c9-48bd-b3ad-2b68f0679de1)

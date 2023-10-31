# Programa de Mentoria BSS 2023
# Álgebra Linear

``` https://www.youtube.com/watch?v=vDPVQ9FWvjg ```

___

## Álgebra Linear - Aula 05

- Marco Civil da Internet - Estamos gravando! 
- Na Aula 04, nós discutimos o conceito de **Espaço Vetorial**, mas de maneira informal. 
- Ou seja, demos uma idéia sobre o que era Espaço Vetorial, chegamos à conclusão de que:
  - Espaço Vetorial é um conjunto de vetores associado à um outro Conjunto (de onde tiramos os famosos) Escalares;
  - Existe todo um Conjunto de Operações que caracterizam esse conjunto como Espaço Vetorial;
  - Hoje vamos formalizar com maior rigor;
- Diálogos sobre a beleza, comer alfafa, xavecos e ganhar na lábia...

___

### Espaço Vetorial (definição formal)

- Definição Formal de Espaço Vetorial:
- ```"Um espaço vetorial V sobre um corpo F é um Conjunto, munido de duas operações (soma e multiplicação por escalar), que atende algumas propriedades."```
  - Espaço Vetorial V, Corpo F (de onde tiramos os escalares), duas operações (soma e multiplicação-escalar), atende algumas propriedades. 

- **SOMA VETORIAL**:
  - **Associatividade da Adição**
    - Essa propriedade, basicamente, diz que se eu pegar 3 vetores (u, v, w) pertencentes à V (espaço vetorial), ```(u+v)+w = u+(v+w)```, tanto faz a ordem que fazemos a operação, de modo que não há diferença se calculamos primeiro (u+v)+w ou u+(v+w), ambas as operações vão dar o mesmo resultado de acordo com a Regra do Paralelograma.
    - Vamos tomar como exemplo um vetor preto (vetor.u), um vetor amarelo (vetor.v) e um vetor vermelho (vetor.w). Podemos traçar uma paralela a (vetor.u) e (vetor.v), preto e amarelo, e a Soma será a resultante (u+v).
    - Depois, traçamos uma paralela ao vetor vermelho (vetor.w), com o vetor resultante (vetor.u+v), e teremos uma nova resultante vetor.((u+v)+w).
    - Podemos fazer o contrário (operação inversa), (v+w) e depois (v+w)+u. Não vai haver diferença.
    - Como não importa por onde começamos, podemos falar em "associatividade da soma", pois a regra do paralelograma vai gerar o mesmo resultado.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/439a5839-5436-4412-b806-b58c16355b2e)
  - **Comutatividade da Adição**
    - Lembremos, que estamos falando de somas vetoriais. A comutatividade diz basicamente que, se eu somar um vetor.u com um vetor.v, tanto faz por onde começo.
    - A regra dos paralelogramas já deixa claro que é irrelevante por onde começo. Vai no destino do vetor.u e traça uma paralela ao vetor.v.
    - Vai no destino do vetor.v e traçamos uma paralela ao vetor.u. Não faz diferença qual fazemos primeiro. ```Tanto faz somar (v+u) = (u+v)```. A própria operação adição de vetores é comutativa.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/54395b8e-4ea8-4748-9f4e-bead857effe2) 
  - **Identidade Aditiva**
    - Existe um vetor que se eu somar com qualquer outro vetor, não altero ele.
    - Vetor.Nulo + Vetor.a = Vetor.a
    - Imagine um (vetor.u), sozinho, e vamos adicionar um Vetor.Nulo, não começa nem termina. É só um ponto no início do vetor.u, ou no final do vetor.u, transportanto um ponto e uma paralela, NÃO altera o vetor, portanto o Vetor.Nulo não afeta o Vetor.A. Simplesmente não afeta o vetor.
    - ``` (v.0) + vetor.u = vetor.u ``` é o mesmo que ``` vetor.u + v.0 = vetor.u ``` pela comutatividade da soma.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/96b140ec-17ae-40aa-a117-d78cf57d7b48)
  - **Inverso Aditivo**
    - Temos um vetor.u (em preto), e traçamos um vetor.v (em vinho), que segue a mesma direção, mesmo módulo e direção oposta.
    - Vetor é caracterizado por três grandezas (Módulo = tamanho da distância), (Direção = inclinação da reta suporte que são paralelas {Teorema do Feixe de Paralelas}) e (Sentido = um vai/aumenta outro volta/diminui na reta).
    - Agora usamos a Regra do Paralelograma: Um vetor.u de módulo |m| que vai, com mesma direção (inclinação ângulo = θ (theta)), um vetor.v de módulo |m| que volta, com mesma direção, ambos com sentidos opostos (um vai, outro volta), vai resultar em uma "volta ao ponto de origem", com deslocamento total de zero.
    - É como andar 5m numa direção, voltar 5m dessa direção, mesmo tendo andado 10m, não houve deslocamento total (voltamos à origem). O deslocamento total é nulo.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/cd1574be-e376-4d58-8444-b0bd852cabe6)
    
- **MULTIPLICAÇÃO POR ESCALAR**:
  - Associatividade da Multiplicação
  - Identidade Multiplicativa
  - Distributividade da Multiplicação em relação à Adição de Vetores
  - Distributividade da Multiplicação em relação à Multiplicação de Escalares

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/edcb8295-f4b9-46cc-8b44-e163d350ef0e)

- Positivo e negativo são uma convenção. 

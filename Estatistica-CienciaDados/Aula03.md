# Programa de Mentoria BSS 2023
# Estatística e Ciência de Dados

```https://youtu.be/gMHd8GNTz4o?si=y5Z2xXd40e9jIJ5S```

## Estatística e Ciência de Dados - Aula 03

___

## Medidas de Dispersão (Variância e Desvio-Padrão)

- A Variância e o Desvio-Padrão são **Medidas de Dispersão**.
- Estudando a Amostragem (dados que estou coletando, dentro de um universo de dados (U)), no exemplo da montadora de automóveis de veículos, comprei 1 milhão de peças e vou testar uma amostra.
- Devemos estabelecer algumas medidas da amostra, que me permitam inferir algumas idéias que podem ser estendidas para o universo da amostragem, com certo rigor estatístico. De um conjunto (de 1 milhão) pegamos uma amostragem de 200 velas e testamos, pra saber se estão dentro dos padrões aceitáveis, ou não.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/b72dc1db-5628-48af-b994-ef70c890e58d)
- Na aula passada, tivmeos as medidas centrais: **Média, Mediana e Moda**. 
  - Média é a soma dos valores da amostra, dividida pelo número de elementos.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7a735db6-92b9-4e47-9a26-c5931638ca4f)
  - Mediana é o elemento central que divide um grupo obrigatoriamente ordenado em dois grupos iguais (meio-meio). Pode ser um elemento com amostra ímpar, ou uma média de um elemento de cada conjunto, sendo uma mediana composta.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d71eaccf-0553-4e5f-84ab-6dd57b89aab8)  
  - Moda é o(s) valor(es) que mais ocorreram na amostragem (ou a maior freqüência de sua ocorrência).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/38292f59-0034-42ef-bc22-e9f966705605)

___

## Medidas de Dispersão - Variância e Desvio-Padrão

- Tomemos o seguinte exemplo, da seguinte amostra, coletando cinco valores: A = {2, 3, 5, 1, 10}
- A média é indicada por x̅ (x-barra). No caso, vamos calcular a média do conjunto A.
- x̅A = (2+3+5+1+10) / 5 = (21/5) = 4,2.
- A média dessa amostra de cinco valores é de 4,2.
- A Variância vai usar o x̅A = 4,2.
- Variância é s² (para variância da amostra) ou sigma-² ou σ² (para variância da população).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/89242765-3ca4-4ead-af6b-5f68785782fe)
- s² = (SOMA (xi - x̅)²) / n-1
- s² = { (2 - 4,2)² + (3 - 4,2)² + (5 - 4,2)² + (1 - 4,2)² + (10 - 4,2)² } / 5-1
- O divisor é 5-1, pois existem 4 "espaços ocupados" entre os cinco valores da amostra. Entre 5 números, há 4 espaços entre eles.
- s² = { (-2,2)² + (-1,2)² + (0,8)² + (-3,2)² + (5,8)² } / (5-1) = {(4,84) + (1,44) + (0,64) + (10,24) + (33,64)} / 4 = {50,8}/4 = 12,7
- s² = 12,7 é minha Variância (da amostra)
- Na prática, o que isso representa? De certa forma, isso diz "como minha amostra se distribuiu...", no caso de uma reta...
- 0 --- 1 --- 2 --- 3 --- 4 --- 5 --- 6 --- 7 --- 8 --- 9 --- 10
- _ --- 1 --- 2 --- 3 --- _ --- 5 --- _ --- _ --- _ --- _ --- 10
- O valor 10 vai representar mais pra essa amostra, logo a Variância representará minha dispersão dos resultados...
- Agora, vamos visualizar o s = sqrt(variância).
- s = sqrt(s²)
- s = sqrt(12,7) = 3,563705936241092...
- s ou d ou desvio-padrão ~= 3,56
- Essa medida me dá uma idéia de como a amostra se distribuiu. No caso do exemplo, o desvio-padrão de 3,56 quer dizer que nessa amostra, a maioria dos valores estão orbitando perto do 3,56 (no caso 2, 3, 5, 1) e fica o 5 e o 10 mais pra longe... Significa que na amostra, os valores em geral estão mais próximos (oposto de dispersão, concentração) do 3,56. A maior parte dos valores "se espalham perto desse ponto".
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7c2256f3-5462-49ae-8790-f1d875e9ca06)

___

## Dois assuntos importantíssimos...

- Lei dos Grandes Números
- Distribuição Normal

- Lei dos Grandes Números: se eu tiver uma amostra suficientemente grande, mais as coisas vão ficar concentradas no entorno da média.
  - Num universo de 1 milhão (velas de automóveis), eu não poderia testar uma por uma. Quanto maior o número de valores, mais ocorrências se concentração próximo da média.
  - Quanto mais números eu coletar, mais eu fico perto e colado e atraído na média.
- Distribuição Normal (Curva Boca de Sino ou Curva de Gauss)
  - No centro dessa curva temos a média ( x̅ ou μ ). Dados intervalos de desvios-padrões (d ou s), a maioria dos valores, o grosso da amostra, se concentrará nessa região perto da média e com pouca variância e desvio-padrão.

- Por exemplo, tomemos um dado. O espaço amostral do dado é {1, 2, 3, 4, 5, 6} sendo as faces do dado D6.
- Os lados opostos do D6 somam sempre 7 (1+6, 2+5, 3+4).
- Espaço Amostral = Conjunto dos Valores Possíveis = {1, 2, 3, 4, 5, 6}
- O espaço amostral representa a possibilidade de escolhas, no caso de elições, dos candidatos - somente os que estão concorrendo, esse é o espaço amostral, e os resultados serão variáveis...
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e975958b-4d5c-48b2-ba3b-f2bf4b498ed8)
- No dado, se eu tenho os números de 1 a 6, se eu fizer mil lançamentos de dados, terei uma LISTA com mil valores entre 1 e 6, inclusivos. Essa lista com mil resultados se chamará AMOSTRA, enquanto o Espaço Amostral era o conjunto de possibilidades de resultados (conjunto de valores possíveis). Quanto maior o número de lançamentos, mais as curvas centrais da Normal irão se aproximar da média ( x̅ ou μ ).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7a7cad48-e931-4c59-903f-6aded002106d)
- Num exemplo hipotético, se perguntássemos para todos os habitantes da terra (8 bilhões) qual o número preferido, qual o espaço amostral (valores possíveis são muito variados, muito amplo, quiçá infinitos). Mas o grosso dos valores (8 bilhões somados e divididos) teremos uma tendência de ter a maior parte dos resultados proximos da média.
- **A média é uma medida de tendência central** (o grosso dos valores perto dela). Quanto mais números, maior a certeza da atração pra média.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d30f1f2f-24d9-40ce-a162-4b20f0a9eaf6)

___

- O desvio-padrão serve para nos mostrar a medida que a nossa amostra se dispersou. Não temos uma distribuição igual, os números de bilhões são raros, mas na média os resultados se encontram perto desses intervalos de + ou - 2 desvio-padrões (-2s até +2s).
- O desvio-padrão representa a forma como a amostra se dispersou em relação à média (curtose), nível de inclinação da amostra. Mais concentrado, menos concentrado, mas por regra, os valores serão mais concentrados e recorrentes próximos da média.
- Faz, então, um papel muito importante nas nossas análises. Pois vai representar a proximidade de onde estão os valores (o grosso dos valores) da amostra. Essa é a idéia por trás...
- A = {1, 8, 18, 15, 32, 1, 1, 8, 9, 16, 19, 1, 80, 51, 1, 3, 2, 8, 1, 5}
- Média ou x̅ ou μ = (SOMA(A)/20) = 290 / 20 = 14,5
- **Vamos plotar um gráfico chamado HISTOGRAMA**.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/3b2ad4f3-f5b9-4812-ab3d-43a5a64a0b6c)
- Histograma é um gráfico que diz "quem ocorreu" e "quantas vezes" ocorreu. O espaço amostral vai de 1 até 80 (min, max). Essa é a AMPLITUDE de uma Amostra (espaço entre menor e maior valor).
- Amplitude = 80 - 1 = 79 espaços no meio da reta de (espaço amostral).
- A Moda é 1, pois é o valor que mais se repetiu.
- A Média é aprox. 13,8, então aleatoriamente os valores do Espaço Amostral tendem a se concentrarem (ocorrerem mais vezes) próximos da média, o grosso está perto, embora tenha 51 ou 80, fogem do padrão.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ddcc9177-1eeb-4c0f-ba0c-da07feaedb01)


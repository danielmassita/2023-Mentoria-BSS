# Programa de Mentoria BSS 2023
# Estatística e Ciência de Dados

```[https://youtu.be/gMHd8GNTz4o?si=y5Z2xXd40e9jIJ5S](https://www.youtube.com/live/2y4jijQE5kI?si=cbIhWN-A3vpr7F_0)```

## Estatística e Ciência de Dados - Aula 04

___

### Retrospectiva

- Na última aula, tivemos alguns conceitos de medidas centrais (média, mediana, moda)...
  - Média é aquele somatório de todos os valores de uma amostragem, dividido pelo número de amostras;
  - Mediana é quando eu ordeno as minhas amostras e aí eu tenho um elemento CENTRAL, que equilibra os dois conjuntos (50-50), dividindo em dois o conjunto do todo...
  - Moda é o(s) valor(es) que acontecem com mais freqüência do que os outros... Podem haver amostras bi-modais, tri-modais ou multi-modais! ;)
- Depois, conversamos sobre o Desvio-Padrão e Variância, que são medidas de "como está distribuída" a minha amostragem. Com a média no centro, observamos como as coisas se distribuíam e estavam arranjadas ao redor da média.

-  Hoje, nós vamos discutir como
  
___

## Distribuição Normal (Gausiana)

### Distribuição Normal (Gausiana) - ou Curva Normal Padrão

- Média = Mediana = Moda
- Pode ser usada para aproximar outras distribuições
- Pode ser "convertida" para uma "curva normal padrão" para facilitar cálculos.
- Z-Escore
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/0aa601a7-343a-433c-9db8-b7f8299dbcfe)


- Agora, vamos começar a colocar "tudo num pacote só"...
- Distribuição de probabilidade é uma curva (ou curva boca de sino) normal, ou gausiana (do matemático Gauss).
- Característica importantíssima, é uma distribuição modal simples, na qual a Média, Mediana e Moda coincidem (e quando não, ajustamos! para caber, dentro de certa margem de erro).
- Agora, vamos usar pra medir coisas e probabilidades. Essa distribuição é muito usada para aproximar outras distribuições (como binomial), mas a D. Normal abrange um imenso leque de fenômenos.
  - Mesmo quando a D. não é normal, podemos aproximá-la através de uma d. normal, calcular a probabilidade, e adicionar uma margem de erro (pouco maior pois há aproximação), mas ainda assim, dependendo do tamanho da amostra será ainda uma margem aceitável de erro.
- Outra vantagem fantástica: Pode ser convertida pra uma "Curva Normal Padrão" (pra facilitar os cálculos).

- O que a Curva representa pra nós?
- Aqui no meio temos a média (x-barra), que é um somatório dos X (andar em todos os x) da amostra, dividido pelo n (número total da amostra). Somamos todos os elementos da amostra, coletando índices de 1-n, e temos a média (x-barra) no centro da curva.
- A PROBABILIDADE em relação à curva normal?
  - A área abaixo da curva! A área do gráfico será a probabilidade de ocorrência, sendo a distribuição da área e da curva em relação aos desvios-padrões.
  - Ou seja, entre -1d (desvio-padrão) e +1d, poderemos assegurar que esse "range" representa 68,26% dos resultados, estando ali dentro. E a probabilidade de não ser o caso, é de aprox. 31,...%
  - Adicionalmente, se considerarmos entre -2d e +2d, a áera de incidência da probabilidade será de -2d, -1d, média, +1d, +2d, ou seja, a probabilidade de ocorrer um evento dentro desse "range" de desvios-padrões será de 95,44%. Inversamente, as chances de ocorrerem eventos FORA desse desvio-padrão será de 100% - 95,44% = 4,66%.
  - Por fim, entre o "range" de -36d e +3d, teremos a probabilidade de 99,74% de ocorrências dos casos.
-   

___

### Exemplo Distribuição Normal

- Considere uma pesquisa de alturas de homens brasileiros.
- A média da altura dos homens brasileiros é de 1,70 cm, com desvio padrão de 10 cm.
  - Ou seja, entre -1d (1,60m) e +1d (1,80m) temos uma distribuição mais abundante e próxima da média (1,80m). Esse conjunto representa, em média e aproximadamente, 68,26%.
  - Adicionalmente, se considerarmos o range de -2d até +2d, teremos o conjunto de pessoas entre 1,50m (-2d) e 1,90m (+2d). Esse conjunto representa, em média e aproximadamente, 95,44%.
  - Some-se, se considerarmos o range de -3d e +3d, teremos o conjunto de pessoas entre 1,40m (mais raro, perto de -3d) e 2,00m (mais raro, perto de +3d). Esse conjunto representa, em média e aproximadamente, 99,74%.
- Pra facilitar, **qual seria a PROBABILIDADE de alguém ter mais de 1,90?** Ora, a chance disso ocorrer é a área sobre a curva e além de +2d, ou seja, ou seja, o indivíduo está duas vezes o desvio-padrão além da média ( 1,70m + 0,10m + 0,10m ).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/95908a19-ff91-494a-86e7-c193f81a956a)

- Porém, a Curva Normal é uma Integral incalculável, não tem como calcular sem métodos numéricos. Não há uma técnica de integração que me permita fazer uma integral direta e calcular a área da curva normal. Então, usamos Métodos Numéricos (discuivo no futuro), mas basicamente, vamos calcular pedacinhos, transformando a curva em "pequenas barrinhas", cada vez mais próximas, cada vez mais finas, tendendo para um Limite (que será a área). Mas isso é MUITO TRABALHOSO!
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7b6cc449-8546-4265-b067-aea6ec76e50b)

- Medida de erro muito grande, etc. Pois a cada "passo" preciso ver quanto eu perdi. Computadores eletrônicos digitais possuem um "erro" pra cada cálculo que fazemos, são os erros decimais (pi, 3,141592854367...) em algum ponto isso estará além da representação, então teremos uma aproximação do valor de pi no computador. Mesmo uma dízima periódica não será representada infinitamente, é uma limitação da maneira como os números são representados dentro dos computadores no registro de memória.
- Quando fazemos um cálculo muito longo, muito preciso, com muitas coisas, sempre tem uma margem de erro grande, vai aumentando, quanto mais eu calculo mais eu preciso "armazenar".
  - Um número real (float) ocupa uns 4 bytes, em linguagem C, C++, etc... O problema é que fica limitado aos 4 bytes, se não tiver um compilador pra permitir aumentar o espaço de memória (e ir colocando mais coisas). Existem artifícios de programação, mas sempre incorre-se em uma margem de erro, existe "precisões em relações à frações". 
-  Assim, pra facilitar a vida da gente, apareceu a Curva Normal Padrão.

___

### Curva Normal Padrão e Escore Z (z-score)

- Curva Normal medida em "unidades de desvio-padrão". 
  - Z = ( x - x.barra ) / d
    - x.barra = Média
    - d = desvio-padrão
    - x = valor da amostra
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/72c7380d-537d-411b-ae4a-0ccae45326f9)

- Imaginemos uma curva normal padrão, semelhante à cobra que comeu um elefante (O Pequeno Príncipe) e o chapéu.
- O formato dessa curva é igual, mesmo que as proporções sejam diferentes (se a média é grande, a curva fica mais alta, mas o formato geral é o mesmo).
- Os caras pensaram _"vamos criar uma curva normal onde a unidade de medida seja o desvio-padrão, a média=mediana=moda será o zero, e a curva vai ter área 1"_.
  - A curva tem área 1, a probabilidade abaixo da curva é de 100%, sendo a área total (-∞ até +∞) é 1. Tudo que pode acontecer está dentro dessa curva.
- Qual a vantagem da Curva Normal Padrão?
  - Podemos usar a Tabela Escore Z. Essa tabela representa a relação entre
  - Tabela: https://www.ime.unicamp.br/~cnaber/tabela_normal.pdf
  - A média é 0 (zero).
  - A unidade de medida é o desvio-padrão (0, +1d, +2d, +3d) e também o inverso (-1s, -2s, -3s).
  - No exemplo da altura, a média é 170 cm e o desvio-padrão era +/- 10 cm.
  - Não me interessa saber o valor do desvio-padrão, não sei e não interessa saber, pois ao calcular o z-score (escore Z) vamos anular a necessidade de saber o valor.
- O Escore Z é dado pela fórmula: ``` Z = ( x - média ) / desvio-padrão ```
- Pegamos o valor da amostra que queremos encontrar, subtraímos da média, e dividimos pelo desvio-padrão.
  - No exemplo da altura:
    - A média será 0, com o valor de 170 cm. O desvio-padrão é uma variação de 10 cm.
    - Vamos pensar numa variação de 1,5x desvio-padrão, ou seja, na tabela, para 1,5 x 0.00, temos o valor de 0,9332.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7465f783-776b-4466-89ab-d5752564716b)
    - Logo, isso representa que a probabilidade de -infinito, até o ponto onde quero achar (1,5 * desvio-padrão), ou seja, +1,5d, o somatório dessa probabilidade (-∞, -3d, -2d, -1d, 0, +1d, ..., +1,5d) será de 93,32% de chances de, aleatoriamente, encontrar alguém com 185 cm ou menos.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ba575aa3-7bb7-4ae9-b6da-92831984b4ee)

___

### Façamos mais um novo exemplo! 

- **Exemplo 1**
- Suponhamos que a média da altura da população masculina brasileira é de 170 cm, com desvio-padrão de 10 cm. Qual a probabilidade de um homem escolhido ao acaso em meio a essa população ter mais de 185 cm?
  - Começamos com os dados:
    - *Qual o **P(x > 1,85 m)**?* 
    - d = 0,1
    - (x.barra) ou média = 1,70
    - Vamos calcular, da média (metade da curva), até +1,5 desvio-padrão (no caso, 10 cm + 5 cm).
    - Ora, vamos medir o número em "desvios-padrões" de unidades, ou seja, +1,5d (ou +1,5s)
    - média   |---- +1,5 * desvio-padrão
    -   0     |---- +1,5d
    -  170cm  |---- +15cm
   
    
  - P ( x < 185 cm) é toda a área de -∞ até 1,85m.
  - Ora, sabemos que a soma da probabilidade total é 1, ou seja, é de 100%.
    - Então, estamos querendo calcular o complemento, ou seja, 1 - essa probabilidade (da tabela).
    - Tabela > -∞ até média = 0,5000, até 1,5d = 0,9332, ou seja, 93,32%.
    - Então, P = (1 - 0,9332) = (100% - 93,32%), ou seja, aproximadamente, 0,0668, ou seja, 6,68% de chances.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/547fc781-bd48-4c5e-b219-70ebed97dd54)
  - Usando as fórmulas, vamos para o Escore Z.
  - Vamos calcular um índice de Z que será o meu índice aqui nessa tabela (o Z), que é uma tabela medida em desvio-padrões.
  - Nosso Z será ``` Z = (amostra - média) / desvio-padrão ```
  - ``` Z = ( 185 - 170 ) / 10 ``` que vai resultar em ``` Z = 15 / 10 ``` então o Z será ``` Z = 1,500 ```
  - Na tabela, na vertical temos os valores inteiros ( 1,5 primeira decimal ) e, também à coluna Z horizontal ( segunda decimal do acréscimo ) + 0,0, ou seja 1,5 + 0.0 = 1,500.
  - Se procurássemos, por exemplo, Z = 2,23, teríamos de procurar na vertical 2,2 e na horizontal 0,03 = 2,23 que é uma Probabilidade de 0,9871 ou 98,71%.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/6ec16729-c5d9-43bd-adf9-77219340ef54)
  - Pergunta: "Ali na tabela de distribuição normal, no pdf, tem P ( Z < z ), e tem outra página com valores negativos.
    - O z (zezinho) é o valor que buscamos na tabela. 
    - Na primeira página, temos os valores positivos de Z. Na segunda página, temos os valores negativos de Z. Como a curva normal é simétrica, um lado é igual ao outro.
    - Se quiser calcular -0,3, é só imaginar que está do outro lado, e subtrair de um.
    - A segunda página representam as probabilidades "do lado de cá" da média (abaixo da média); por exemplo, em z = -2d, temos toda a área de -infinito até -2d.
    - É a mesma coisa que calcular tudo (dos dois lados) e subtrair de 1, sendo o resultado o restante (valor super baixo, pois tende de -∞ até -2d (no exemplo da altura, menores que 150 cm). Seria o total de Z = 2.00 (resultado é de 0,9772) e subtrair de 1, ou seja, ```1 - 0,9772 = 0,0228``` ou 2,28% de chances.  
    - Áreas equivalentes pois a curva é simétrica. A segunda página é o Índice Z negativo (desvio-padrão negativos).
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/0994c17a-5a3f-40e2-b42c-fc42233fd69a)

___

- Exemplo 2
- A média de acertos em um exame com 100 questões foi de 70 questões, com desvio-padrão de 5 questões. Qual a probabilidade da nota de um examinando aleatório ser de 90?
- Obtivemos eses dados, de média e desvio-padrão:
  - Usando a curva normal, sabemos que a média é de 70 questões.
  - Usando a curva normal, sabemos que o desvio-padrão é de 5 questões.

- **Pergunta-se:**
  - Qual a probabilidade de uma nota de um examinando aleatório ser de 90 questões?
  - E agora, qual a chance de encontrar ao acaso alguém com nota maior que 80 questõe?
  - Ademais, qual a chance de alguém, aleatoriamente, ter um resultado menor que 60 questões?

- Vamos resolver questão por questão:
  - Montamos a tabela, com média (x.barra) = 70. Pra cada desvio-padrão, aumentamos E reduzimos 5 questões, ou seja, para +1d e -1d, temos 65 e 75. Para +2d/-2d, temos 60 e 80. Vamos plotar essa curva num primeiro momento, e depois também uma nova curva normal padrão com x.barra (média) = 0. E desvios-padrões como +1s/-1s, +2s/-2s, +3s/-3s...
  -  
  - -------------------- | 70  questões | -------------------    ```x.barra = média```
  - -----------------|65q|-- | 70 q | --|75q|----------------    ``` -1d | 0 | +1d ```
  - ----------|60q|--|65q|-- | 70 q | --|75q|--|80q|---------    ``` -2d | -1d | 0 | +1d | +2d ```
  - ---|55q|--|60q|--|65q|-- | 70 q | --|75q|--|80q|--|85q|--    ``` -3d | -2d | -1d | 0 | +1d | +2d | +3d ``` 
  -
  
  - Para encontrar a probabilidade aleatória de um resultado de 90 questões?
    - ```P (x > 90 questões)```, usamos a tabela Escore-Z, ``` Z = (x - média)/desvio ``` que será ``` Z = (90-70)/5 ```, simplificando, ``` Z = (20/5) ``` então ``` Z = 4 ```, ora, para um Z igual a 4, não temos essa aproximação na tabela (vai somente até +3,99) sendo o total igual a 1 (área probabilística abaixo da curva). Então, temos uma chance de 0% (nulo) de alguém ter marcado 90 questões, aleatoriamente.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/47c72aa2-23b0-48e6-b3cd-7ae7bfabf0e9)

  - Para encontrar a probabilidade aleatória de um resultado maior (/igual?) 80 questões?
    - ```P (x > 80 questões)```, usamos a tabela Escore-Z, ``` Z = (x - x.barra)/desvio ``` que será ``` Z = (80-70)/5 ```, simplificando, ``` Z = (10/5) ``` então ``` Z = 2 ```, ora, para um Z igual a 2,00, temos aproximação na tabela (vertical 2,0 e horizontal *,00) sendo o total da área igual a 0,9772 ou **97,72%**. A área probabilística abaixo da curva, da diferença para além de +2d, é a diferença entre +2s até +∞. Como a área total de -∞ até +∞ é igual a 1, vamos calcular a área entre +∞ e +2d = ``` 1,0000 - 0,9772 ``` que é o mesmo de ``` 2,28% ```. Então, temos uma chance de 2,28% (+2d até +∞) de alguém ter marcado 80 questões ou mais, aleatoriamente.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c010198e-d162-4d27-8bb6-be609e66f2d1)

  - Para encontrar a probabilidade aleatória de um resultado menor (/igual?) 60 questões?
    - ```P (x < 60 questões)```, usamos a tabela Escore-Z, ``` Z = (x - média)/desvio ``` que será ``` Z = (60-70)/5 ```, simplificando, ``` Z = (-10/5) ``` então ``` Z = -2 ```, ora, para um Z igual a -2,00, temos aproximação na tabela (vertical -2,0 e horizontal 0,00) sendo o total da área igual a 0,0228 ou **2,28%**. A área probabilística abaixo da curva e à esquerda, da diferença para antes de -2d, é a diferença entre -∞ até -2d. Como a área total de -∞ até +∞ é igual a 1, vamos calcular a área entre -∞ e -2d = ``` 0,0000 + 0,0228 ``` que é o mesmo de ``` 2,28% ```. Então, temos uma chance de 2,28% (-∞ até -2s) de alguém ter marcado 60 questões ou menos, aleatoriamente.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e6bac909-2495-4268-a58a-cacf0315a1c0)

  

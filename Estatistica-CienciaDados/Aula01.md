# Programa de Mentoria BSS 2023
# Estatística e Ciência de Dados

```https://www.youtube.com/watch?v=duIjcjzEP8Y```

___

## Estatística e Ciência de Dados - Aula 01

- Estatística é a ciência que coleta, analisa e interpreta dados para tomar decisões informadas, identificar padrões e inferir conclusões a partir de amostras.
  - > [...] Esse curso é uma grande fonte de informações. Área de grande crescimento nos últimos anos. A Estatística é a parte Fundamental da Ciência de Dados (dado não é informação!). Os dados são informações brutas, as informações são as informações limadas, lapidadas, trabalhadas. O dado é importante, claro!, mas o maior é interpretar e compreender informações valiosas (gera valor). Estatística serve pra muitas coisas (peças aos milhares numa montadora industrial, não podemos testar cada unidade da peça, logo usamos e analisamos com estatística pra "Generalizar" = estabelecer um critério de aceitação, uma margem aceitável). Estatística também ajuda com Previsões (no caso da indústria, qual a margem de peças defeituosas eu poderia esperar, e antevendo, me resguardar?).
  - > Pergunta: Programador é necessariamente um Cientista de Dados? Não! Mas todo cientista de dados precisa saber programação! ;) Cientista de Dados pega seu conhecimento (Estatística + Programação + Conhecimento de Domínio) =>   
- Ciência de Dados combina estatística, programação e conhecimento de domínio para extrair _insights_ valiosos de grandes conjuntos de dados, impulsionando a tomada de decisões e a inovação.
  - > [...] Grande quantidade de dados públicos na web, muitas empresas e negócios procuram pessoas competentes capazes de trabalhar, coletar, processar, melhorar e extrair dessess dados conclusões úteis aos negócios. 

___

## 

- Um curso de estatística abrange conceitos fundamentais de Coleta, Análise e Interpretação de Dados.
  - > Conceitos basilares fundamentais. No caso das velas... (Coleta: como faço uma amostragem boa pra uma margem de segurança dentro do limite de erro aceitável? Qual seria a amostragem ideal? etc.)  
- Vocês aprenderão técnicas estatísticas, ferramentas de software e aplicações práticas para tomar decisões baseadas em evidências, identificar tendências e comunicar resultados de forma eficaz.
  - > Linguagem R, Linguagem Python, sistema como o Tableau (análise, separação de dados). Aprender a utilizar os dados que tiramos dali de maneira coerente e consistente.
  - > _"Com dados errados e com interpretações erradas, pode-se concluir coisas absurdas."_ Uso de protetor solar que causa câncer de pele. As curvas foram correlacionadas, e concluiu-se o absurdo. Devemos aprender a Correlação e Causalidade. Por exemplo, as curvas de Pluviosidade Média e Período do Ano // Número de enchentes e alagamentos no período... Relação de Causalidade (o que causa o alagamento é a chuva). Mas há coisas que andam juntas, Correlacionadas (protetor solar). À medida que aumentaram os casos de câncer de pele, mais pessoas começaram a usar mais protetor solar.
  - > Na Ciência nem sempre é fácil você separar Causa e Efeito das coisas. Existem muitros critérios e algumas vezes se tornam complexos ou fora de controle/mensuração. 

___

## Medidas Úteis na Estatística

- Média: Valor médio de um conjunto de dados.
  - > Medida de equilíbrio, no caso do pêso de determinados elementos... Calma! coração, vai ter exemplos práticos!  
- Mediana: Valor do meio de um conjunto de dados ordenado.
  - > É a linha que separa em dois os dados ordenados.  
- Moda: Valor mais freqüente em um conjunto de dados.
  - > Valor mais freqüente no conjunto de dados, o que aparece mais vezes (o que "geral tá usando é a moda", pois essa ocorrência se destaca pois se dá mais vezes). 
- Variância: Medida da dispersão dos dados.
  - > Dada uma média entre os dados, a variância é o quão distante os dados fogem da média, o quão distante está um dado da média. Com pouca dispersão, muitos pontos estão perto da média. Com grande variância, os pontos se espalham numa área maior... Por exemplo, se um dado dista (de ser distante) da média, considerando sua "área de dispersão", podemos pensar que uma linha de tamanho 4 unidades, e um ponto que dista 4 unidades da média, teremos uma área 16 de dispersão entre esses pontos...  
- Desvio Padrão: Raiz quadrada da variância indica a dispersão dos dados.
  - > Como a variância é a medida de dispersão de área dos dados, o desvio-padrão se torna o "lado" dessa área, sendo a raiz quadrada da variância. No exemplo anterior, nessa área de 16 unidades de dispersão, a distância da linha base e do ponto disperso será de 4 unidades (a distância do ponto vs. média, levando em conta toda a área de dispersão).   
- Coeficiente de Correlação: Mede a relação entre duas variáveis.
  - > Imagina um gráfico com uma série de pontos. A curva que melhor se ajusta nesses dados, será uma linha mais próxima possível da massa de dados. Esse será o coeficiente de correlação, estabelecendo uma relação entre duas variáveis e retornará uma espécie de inclinação de uma reta que fique perto dos dados da melhor maneira possível. 
- Regressão Linear: Modelagem da relação entre variáveis dependentes e independentes.
  - > Massa de dados, com uma relação estabelecida entre duas variáveis. Vamos achar uma curva (não necessariamente uma reta) que se ajusta bem aos dados que tenho. A partir dessa curva, podemos testar previsões minimamente aceitáveiss. Seria uma forma de extrapolar, com certo rigor, as tendências que mais se adequam (precisão) aos dados dispersos. 
- Percentis: Valores que dividem um conjunto de dados em partes iguais.
  - > São os "quartis", as fatias iguais dos dados, e localizamos onde se localiza o ponto em qual ponto da distribuição se encontra. 
- Intervalos de Confiança: Intervalos que estimam um parâmetro da população.
  - > No exemplo das peças industriais, a gente busca um intervalo de garantia que representaria, da melhor forma possível e aceitável, uma pedaço (amostra) dos dados que representaria adequadamente o conjunto (rol) total dos dados. Exemplo muito comum nas eleições, que busca uma certeza estatística minimamente calculado pra uma determinada margem de erro. Atenção e cuidado necessário com o "enviesamento" (viés de perspectiva) da amostra. Evita-se a amostra enviesada quando não fazemos distinção da "localização" dos dados coletados, por exemplo (quanto mais disperso e igual e aleatório)...
Viés da localização, grupo humano, racial, gênero, classe, etc. Precisa-se dispersar a coleta de dados.

___

## Medidas Úteis na Estatística (parte 2)

- Testes de Hipóteses: Avaliação da significância estatística de uma afirmação.
  - > No exemplo das peças industriais, partimos da hipótese que as velas estão boas com uma margem de erro de %. Criamos uma estratégia de testagem pra validar a hipótese ou não. Qual o tamanho do lote? Qual a margem de erro de defeitos? Monta-se um teste que permita verificar a hipótese. 
- Análise de Variância: Comparação de médias entre grupos.
  - > Também pode ser usada pra diminuir o viés. Se em uma pesquisa em determinada região, temos uma média. Vamos em outro local, pegamos uma nova amostra e comparamos.  
- Qui-Quadrado (χ²): Teste de independência entre variáveis categóricas.
  - > Ao analisar duas variáveis numa amostragem, buscamos refutar (garantir) que não há um coeficiente de correlação.  
- Distribuição de Probabilidade: Modelos teóricos para eventos aleatórios.
  - > Existem vários esquemas de distribuição de probabilidades. Vamos estudar a Curva de Gauss ou de Sino (Distribuição Normal) que orbita ao redor da média com uma maior abrangência dos casos, e somente poucas ocorrências quanto mais longe da média. 
- Teorema Central do Limite: Descreve a distribuição de médias amostrais.
  - > Que é justamente relacionado com a distribuição de probabilidadess... "Em teoria das probabilidades, esse teorema afirma que quando o tamanho da amostra aumenta, a distribuição amostral da sua média aproxima-se cada vez mais de uma distribuição normal. Este resultado é fundamental na teoria da inferência estatística."
- Estatística Não Paramétricas: Alternativas para dados não normais. 
  - > Adota-se usualmente a Distribuição Normal (~90%) quando consideramos determinados eventos aleatórios. Por exemplo, uma medida objetiva de aleatóriedade (por exemplo, o quão aleatório é um determinado algoritmo de _"randomização"_ de números num site de apostas/jogos).  

___

## Ciência de Dados

- Um curso de Ciência de Dados é um programa educacional que ensina as habilidades necessárias para coletar, limpar, analisar e interpretar grandes volumes de dados.
  - > ...
- Vocês aprenderão programação estatística, machine learning e visualização de dados para extrair _insights_ valiosos e tomar decisões informadas em diversos campos.
  - > ...

___

## Ciência de Dados

- Coleta e Limpeza de Dados
  - > Imaginemos um sensor que mede a umidade da terra em uma horta. Existe uma certa variância, mas dentro de um parâmetro razoável. Em um certo momento, um ponto fora da curva. Esse dado é pertinente? Como nulificar? Por que foi fora da curva? Probabilidade de falha do sensor está dentro da margem de erro do dado? Posso eliminar o dado fora da curva (dados anômalos)? Como ponderar? A partir de quantos dados fora da curva eles se tornam representativos?  
- Estatística Descritiva
  - > Passamos a usar esses dados do conjunto, das medições, pra descrever determinada situação ou contexto de negócios. 
- Análise de Séries Temporais
  - > Análise RS (método em particular que estudaremos) usado por uma companhia de água da Califórnia, a fim de destinar água pra plantio ou pra cidade, sem risco de faltar depois em escassez de chuvas. Era necessário ter uma análise pra saber até quando a estação iria (prolongar chuva, prolongar sêca, etc.) Qual era a tendência? A Análise RS é um índice/coeficiente baseado nessas séries temporais. Coeficiente varia de 0-1. De 0 até 0,5, a tendência é de o fenômeno se inverter (chuva vs. sêca). De 0,5 até 1, a tendência é continuar. O aparelho de ECG (eletro-cárdio-grama) com 17 sinais analisados, se a tendência da Análise RS for de contínuo crescente de freqüência cardíaca (tipo, máx. 200 bpm, então entre 160-170 começa a dar gatilhos). 
- Visualização de Dados
- Big Data
- Ferramentas e Frameworks
- Introdução ao Machine Learning
  - > Usando critérios estatísticos pra analisar e prever...

- Gráfico de Barras
- Histograma
- Gráfico de Pizza
- Gráfico de Linhas
- Gráfico de dispersão

FIM!

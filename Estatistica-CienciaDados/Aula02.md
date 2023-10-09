# Programa de Mentoria BSS 2023
# Estatística e Ciência de Dados

```https://www.youtube.com/live/C42tgLx6TzU?si=MNmuHThjmYPWz9dG```

## Estatística e Ciência de Dados - Aula 02

___

## Qualitativos vs. Quantitativos

- Começaremos fazendo uma taxonomia (classificação, gr. táx-), separando em dados qualitativos e quantitativos.
- Dados Qualitativos: Representam características ou qualidades (por exemplo, cores, nomes, sabores).
  - > Numa pesquisa de "Sabores de Sorvetes", organizar lista de sabores, escolher público, determinar quantidade de amostrar a serem coletadas para um estudo ser significativo. Tudo isso será estudado (pra um total de brasileiro, como eu escolheria as regiões e etc., não é aleatório, por exemplo a "pesquisa eleitoral" vs. o famigerado fakeado "data-povo" dos reaças, gados e afins).
  - > É uma qualidade, descreve um predicado. Mas que caraterizam o tema pesquisado, mais do que medir.    
- Dados Quantitativos: Representam quantidades numéricas (por exemplo, atura, pêso, idade).
  - > Quantos brasileiros já viajaram pra Argentina? Precisaríamos calcular uma margem de erro (e.g.: +/- 5%), e ver quais critérios selecionar para descobrir a quantidade de vezes que cada entrevistado já foi pra Argentina. Nesse exemplo, a quantidade é a CONTAGEM de ocorrências que temos na amostra selecionada.

___

## Discretos vs. Contínuos

- Dados Discretos: são contáveis (por exemplo, número de estudantes em uma sala de aula).
  - > Dados contáveis (countable), números inteiros, variáveis "inteiras" (mesmo que fracionadas, podem ser isolados sem se sobrepôr). Em matemática, formalmente, uma variável é discreta quando ela se apresenta na forma de pontos isolados (uma bolinha sem nenhum outro ponto/bolinha naquela medida). É o caso, por exemplo das quantidades inteiras (tipo INT em dados), de pegarmos o número 1 e colocar uma bolinha de raio 0,5 ao redor orbitando, e não vai esbarrar em nenhum outro elemento/número inteiro dentro dessa bolinha/raio/órbita. No exemplo do sistema solar, é como considerar os planetas e seus orbitantes (luas e afins) sem que esses colidam entre si. No caso, dos planetas, teríamos NOVE pontos (Plutão conta, tá? Não vou reescrever meu zodíaco por você...) discretos sendo cada planeta, sem colisões. Cada planeta seria um INTeiro. Como são uma contagem, os dados discretos possuem uma precisão maior sem uma margem de erro - naquela contagem.  
- Dados Contínuos: têm infinitas possibilidades (por exemplo, altura em centímetros).  
  - > Nos dados contínuos, temos uma menor precisão. Pois a altura, numa sala de aula, vai ter alguém com 1,52 cm, outra com 1,55 cm, outra como . O dado contínuo se espalha numa faixa de números reais, que não podemos isolar.
  - > Dúvida: _"Na questão da amostragem, existe uma quantidade definível a partir da qual eu deixo de pegar todos os elementos de um conjunto e passo a pegar as amostras?"_ Na verdade, é muito difícil pegar todos os elementos de um conjunto (espaço amostral grande). Se tivéssemos todos os elementos, não precisaríamos de estatística, teríamos apenas CERTEZA. Imagina uma caixa de 100 bolas, três cores de bolas (branca, vermelha, pretas), não sei quantas de cada uma. A caixa é fechada e não sabemos as cores. Se eu abrir a caixa, terei certeza quantas bolas de cada cor pois poderei contar. Imagina que CADA brasileiro tivesse uma caixa dessas, então preciso calcular QUANTAS caixas eu preciso examinar pra ter uma idéia - dentro de uma margem de erro selecionada - de quantas bolas de cada cor têm em cada caixa. Estatística é quando queremos INFERIR, DEDUZIR, dentro de certa margem de erro, quais as chances/estatísticas, equivalentes a população (rol total). Outro exemplo, em uma sala de aula, preciso saber qual a altura de cada aluno da 4ª série. É só pegar essa sala, contar os alunos e medir a altura de cada um. Mas e calcular a média, dentro de uma margem, da altura de todos os alunos da 4ª série?
  - > Espaço LIMITADO, ao invés de infinito. Cuidado com os termos, em matemática, pois existem infinitas possibilidades entre 0 e 1. Também existem infinitas alturas, ou infinitos números inteiros, embora a contagem seja infinita (podemos contar os inteiros positivos infinitamente pra frente), mas a altura de seres humanos será LIMITADA, dada uma margem e amostragem, não encontraremos seres humanos com 5m de altura, embora a distância medida poderia ser infinita. Estatística é um ótimo método de reduzir custos de análises, uma vez que trabalhamos com cenários tangíveis, sem avaliar todos os dados, vejo qual a amostra a ser trabalhada, com segurança e dentro de uma certa margem de erro.

___

## Medidas de Tendência Central

- Média: Soma de todos os valores dividida pelo número de valores.
  - > No jargão popular, virou sinônimo de "chute", "palpite". No passado, média é um (pão + café) na padóca.
  - > O "medíocre" é aquele que está na média, no valor de maior ocorrência, tem razão matemática de ser, estando no valor de maior ocorrência, eu sou comum. Coisas raras são valiosas, coisas comuns não são valiosas. Média sem análise de dados é um CHUTE, um PALPITE, em campanhas eleitorais de determinados grupos políticos. Quem faz estatística de verdade, precisam de rigor técnico, inclusive com registro no TSE, com testagens e validações matemáticas.
  - > Dúvida: _"Mas o "raro" à esquerda da média não é lá muito valioso, né?"_ Depende! Por exemplo, se pegarmos uma amostra de minérios, e pegarmos o peso específico (número atômico) isolando a amostra e seus números atômicos, na média ficaríamos pelo grupo dos metais. No entanto, os metais alcalinos terrosos ficam à esquerda, e são muito valiosos. São raros e estão à esquerda (com uma massa menor). 
  - > A análise PRECISA EVITAR GENERALIZAR, precisamos estudar o caso, o domínio da questão. Chute é para amadores. Estatística e Ciência de Dados buscam usar métodos, ciência! Precisamos estudar o caso, estudar o domínio do conhecimento.       
- Mediana: Valor no meio de um conjunto de dados quando organizados em ordem.
  - > É o valor bem do meio, quando ordenados.  
- Moda: Valor que aparece com maior freqüência.
  - > No exemplo da sala de aula, qual a idade das crianças, 5 crianças com 11 anos, 7 crianças com 12 anos, 3 crianças com 13 anos, 1 crianças com 14 anos, 1 crianças com 15 anos, 0 crianças com 16 anos. No exemplo, a moda foi de 12 anos - pois foi o valor que ocorreu o maior número de vezes.
  
___

## Todos os programas estarão na Área de Estudantes e no Repositório no Github!

```javascript
let lista = [
  2, 4, 6, 8, 10, 4, 6, 8, 10, 12, 14, 16, 18, 20, 10, 22, 24, 26, 28, 30, 32
];

let soma = 0;

lista.forEach(valor => {
  soma = soma + valor
})

let media = soma / lista.length

console.log(`A média é a soma ${soma}\ndividida pela quantidade de itens ${lista.length}\n${media} `)

# A média é a soma 310
# dividida pela quantidade de itens 21
# 14.761904761904763

```

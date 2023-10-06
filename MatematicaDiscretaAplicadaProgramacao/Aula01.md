# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

```https://www.youtube.com/watch?v=85jZdfownSM```

___

## Matemática Discreta Aplicada à Programação - Aula 01

> A Mentoria BSS aceita feedbacks, através da Plataforma. 
- Este curso explora conceitos matemáticos fundamentais, como lógica, teoria dos conjuntos e grafos, para resolver problemas computacionais.
- Capacita os estudantes a desenvolverem habilidades essenciais em algoritmos, estrutura de dados e otimização, fundamentais para a programação eficaz em diversas áreas da computação.
  - > É chamada de "Discreta" pois em matemática muito se faz a __"discretização"__ de problemas. Imaginem um gráfico no monitor (composto de pixels no eixo x,y). Ao tentar traçar um gráfico, posso fazer um programa percorrer todo um intervalo entre pixel 0 e pixel 1, percorrendo todos os pontos internos (imagem tipo contínua), assim podemos desenhar o gráfico varrendo um conjunto de números Reais com um intervalo muito pequeno. __OU__ Podemos tentar calcular, por exemplo, dado um pixel sendo representado por um sistema de coordenadas virtual (com os números reais), pegamos o valor do pixel, calculamos o valor e a função de X e convertemos pro pixel Y. Tornamos a variável DISCRETA (oposto da CONTÍNUA), com "espaços" entre os números, mas que não afetam a análise (frações, arredondamentos, etc.). Em última instância tem a ver com Limites e Pontos de Acumulação. Vamos usar essas estratégias pra DISCRETIZAR a matemática, acelerar os ALGORITMOS, fazer algo mais EFICIENTE na tela do computador (sobretudo quem atua com computação gráfica).
  - > Vamos estudar: Lógica; Teoria dos Conjuntos; Teoria dos Grafos; Teoria dos Números (cf. aulas no Youtube de matemática discreta) entre outros.    

___

## Lógica

- Lógica Proposicional
  - > Se tal e tal coisa acontecer... então tal e tal coisa pode acontecer. Encadeamento de raciocínios e aprendemos a tirar conclusões a partir de proposições. Fazemos afirmações (se A e B são inteiros, então lá na frente...) (se o máximo divisor comum de A e B é um...) Estamos propondo hipóteses pra desencadear um certo raciocínio...  
- Lógica de Predicados
  - > Predicado, em Língua Portuguêsa é uma coisa que qualifica um elemento da frase ("A casa amarela", amarela está predicando a casa, dando uma qualidade). Também vamos utilizar em Estatística para "criar" grupos, no caso colocando a casa no "Conjunto de Casas Amarelas", para ordenar, separar elementos, etc.
- Demonstração de Teoremas
  - > Todo teorema é um cálculo proposicional... 
- Álgebra Booleana
  - > Vem do Boole (matemático) que no Sec. XIX criou uma álgebra dos elementos 0 e 1 (conjunto de duas operações) e usamos a "Álgebra Binária" na computação, totalmente ligada ao cálculo proposicional, associando o valor 1 como verdade e o valor 0 como falso. 
- Lógica de Programação
  - > Embora veremos em outra disciplina, vamos também passar pelo conteúdo aqui para complementar conceitos e aplicabilidades.
  - > [Pergunta aluno] Axiomas são fundamentos a partir dos quais desenvolvemos as teses em diante. Antigamente, pensava-se a matemática como uma ferramenta que nos permitia entender leis da natureza. Atualmente (séc. XX) não acreditamos em "leis da natureza", ou melhor, nós construímos modelos (objetos matemáticos) que simulam as coisas da natureza. Desde Kepler e Bryhe, tinha-se a idéia que os planetas giravam ao redor do sol fazendo elipses... Hoje em dia, temos um modelo pra representar o movimento dos planetas ao redor do sol (propriedades físicas, gravitacional, deformação do espaço ao redor do sol, etc. que nos fez PERCEBER a noção de elipse).  
- Teoria dos Conjuntos
  - > [...] 
- Grafos e Teoria dos Grafos
  - > [...]

 ___

 ## Teoria dos Conjuntos

 - Elementos e Conjuntos
 - Operações de Conjuntos
   - > Pertence e Não-Pertence... 
 - Conjuntos Especiais
   - > União, Intersecção, Uniões Inifinitas, Somatórias de Uniões, Coberturas (dado um conjunto e um grupo de sub-conjuntos, só é cobertura se todo ponto do conjunto pertencer a um, e apenas um, daquele subconjunto (não-intersecção)).
   - > Conjunto Nulo. Conjunto Unitário.
   - > Conjunto Vazio é aberto (não contém sua fronteira) e fechado (contém sua fronteira) ao mesmo tempo. Quando não tem nenhum ponto na fronteira que pertença a ele, logo é aberto. Seria fechado quando todos os pontos da fronteira estão dentro dele, como não tem pontos pra fazer fronteira dentro dele e todos os pontos lá dentro, ele é vazio.      
 - Diagramas de Venn
   - > [...] 
 - Produto Cartesiano
 - Conjuntos Numéricos
   - > Naturais, Inteiros, Racionais, Reais e Complexos (na engenharia com trigonometria e números complexos em circuitos elétricos e correntes).   
 - Teoria dos Conjuntos em Programação
   - > [...] 
 - Princípio da Inclusão e Exclusão
   - > [...] 
 - Conjuntos e Lógica
   - > Curiosamente, toda a lógica proposicional e de predicados pode ser expressada na forma de conjuntos (reduzindo o esforço do pensamento usando conjuntos e simbologia).  

___

## Teoria dos Grafos

- Grafos e seus Componentes
- Grafos Ponderados
- Representações de Grafos
  - > Poderemos representar com Listas Encadeadas, Matrizes (da disciplina de algoritmos e estrutura de dados)
- Caminhos e Ciclos
- Árvores
  - > Grafos especiais, sendo um tipo das Estruturas de Dados, também com a outra disciplina.  
- Grafos Eülerianos e Hamiltonianos
- Algoritmos de Grafos
- Aplicações Práticas
  - > Pra quem achou que não teria... heheh Calma coração jovem!  

___

## Exemplo de Problema de Grafos (mapa de Königsberg)

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e475bd9f-bd73-4c2e-9a92-c2881331301b)
- Como visitar as quatro partes de terra da cidade, passando por todas as pontes, sem repetí-las?
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/26099f24-2437-49fc-835a-11264b4b899e)
- A resolução foi proposta usando a Teoria dos Grafos.
- Podemos representar o mesmo princípio e fim (abstração) da primeira bolinha (a esquerda) e simplificar as massas de terra (se não for essencial), então simplificamos e/ou abstraímos. As massas de terra não devem ser um problema, pois a questão proposta foi em relação às pontes (no caso, as linhas dos grafos). Por exemplo, a rota mais rápida do Google Maps que usa essa estrutura pra traçar rotas.
  - > Exemplo profissional do Ed na Cargil (agro é pop, agro é tech, agro é veneno, agro é morte). As unidades da Cargil compram soja e milho, a soja passa pelo processo nos silos de secagem (com ventiladores), até serem transportadas para outros lugares. Com 23 unidades, precisavam otimizar as entregas de sojas e milhos, levando ao local mais perto, mas muitas vezes aquela soja não poderia ficar naquela unidade pois há um porto, uma posição de transporte, entrega, etc. Foi necessário um algoritmo pra achar os entrepostos provisórios e definitivos pra aumentar a eficência e reduzir os riscos do processo. Haviam "constraints" (condições limitadoras), por exemplo capacidade máxima ao chegar um novo carregamento, pra esperar secar ainda outro lote, etc... Cada grafo não é apenas uma bolinha, mas sim um conjunto de informações sobre cada unidade, com caminhos de simulação dentro desses circuitos pra buscar a solução ótima.
  - > Programar não é apenas saber uma linguagem de programação. Não adianta saber a linguagem A ou B, mas não entender o conceito por trás da teoria, e a solução possível. Em Matemática, muitas vezes a abstração matemática não era aplicada e, por isso, não era visualizada nem aprendida. Ao invés de ensinar a ferramenta, é melhor mostrar a necessidade, e depois trabalhar a ferramenta específica que trará a melhor praticidade.
  - > O esforço pra "decorar" é mal gasto... Muito melhor entender o "por quê" foi criada... A "equação da freada" usada pelo Detran na perícia é a relação entre velocidade inicial e final, com o deslocamento durante a freada: (V)² - (Vzero)² = 2 * a * (Delta S).

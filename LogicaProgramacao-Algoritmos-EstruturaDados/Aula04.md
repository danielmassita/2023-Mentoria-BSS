# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

```https://www.youtube.com/live/gws35cgXqfA?si=nfn2b17sKqGObXO7```

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 04

- Códigos (Scripts), vamos usar e testar! Programar não se aprender somente com teoria, mas sobretudo com prática!
- O mais importante nos algoritmos é saber COMO EXPRESSÁ-LOS, e pra isso vamos usar o PORTUGOL.
- Perguntas e Comentários:
  - GOTO (foi um comando antigo que foi descontinuado). A linguagem é expressa em seqüência. Em alguns momentos, precisávamos voltar pra um certo ponto. Haviam 2 comandos de GOTO, por Nº de Linha (Fortran) e por Rótulo.
  - Fortran (Formula Translation) seria uma linguagem de médio nível (linguagem usada muito pra processar números, ou _numbers crhunching_).
    - A linguagem só começava na 8ª coluna, pois antes se colocavam as númerações (indexações). Programar em Fortran usava a perfuratriz de cartão, e usava cartões perfurados.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/78ad5787-84f3-449a-b202-88c680708fb0)
    - 1984 o Ed estudou Fortran. Usava-se papel de cartões perfurados, e quando molhava não funcionava. Não existia terminal, não existia tela, só a impressão em papel dos resultados.
    - As máquinas pareciam geladeiras, ou antigamente eram do tamanho de cômodos inteiros.
    - Se estava na linha 128, e precisava voltar pra Linha 30, voltava com "GOTO 30".
    - IF ( x GT 10 ) 30 = IF greater than, linha 30
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2d34ac19-7c88-4007-8e82-375b541cc6ab)

  - Em Pascal, linguagem mais sofisticada, trabalhava com "goto" baseado em um LABEL (ou Rótulo).
  - No script, na linha poderíamos escrever "Return1: " e essa linha adquiria um rótulo, assim eu poderia referenciar o rótulo em outro momento do script.
  - Foi abandonado o GOTO pois deixava os programadores malucos, pois a lógica do GOTO criava programas quase ilegíveis.
  - Hoje em dia, utilizamos o DEBUGGER, mas antigamente o método era "fazer-o-chinês", ou seja, seguir comando por comando até encontrar o erro, o que resultava num código "espaguete", todo enrolado.
  - Vai pra linha tal... Vai pra outra linha... Vai pra linha xyz... Etc...
  - Djistra foi um programador sueco na década de 90 que provou que GOTO beirava o perigoso, e propôs novas estruturas de controle como: while, repeat, switch, etc...
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7afaad50-26b9-4030-b1c1-cfa07838f772)

___

## PORTUGOL

- Portugol é você expressar as idéias, estruturas de controle, usando linguagem natural.
- Ao invés de dizer: x = x + 1, podemos dizer "some 1 em x".
  - Pessoas acham que x = x + 1 é uma equação. Está errado. Isso se trata de um COMANDO DE ATRIBUIÇÃO (atribuir, designar, nomear, etc...)
  - Em programas de computadores, uma variável é um cantinho, uma caixa na memória, onde se armazena valores. A caixa precisa ter um rótulo, pra lembrarmos depois do nome dela.
  - A idéia da variável é que o computador precisar armazenar em algum lugar da memória as informações inputadas pelo usuário.
  - A idéia de variável é uma caixa que, quando necessário, vou lá e leio o valor contido nela (read/write).
  - Então dizer x = x + 1, é na verdade um LEFT SIDE = RIGHT SIDE, como sendo atribuído novo valor (não é igualdade matemática).
  - Left Side, Write    ( x )    =    ( x' + 1 )    Right Side, Read
  - Se x' = 10, então atualizaremos o valor de x'=10, adicionando +1, e vamos ESCREVER esse NOVO valor do lado esquerdo com X passando a valer 11.
  - Trata-se de uma ATRIBUIÇÃO. Pegue o valor de x', sendo x'=10, some + 1, totalizando 11, pegue o valor de 11 e ATRIBUA ao valor de X que, daqui em diante, passa a ser 11. X RECEBE o valor de X + 1.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/9b22b4a4-de95-4ccb-8a2d-98c07625a854)

___

  - Pergunta: _"Em microcontroladores a solução pro goto são as interrupções, é usado também em javascript?"_
    - Não. Interrupções são ações de "baixo nível", pois acontecem a nível de processador mesmo. Existem estruturas de programação que criamos situações pro programa ser processado na ordem correta (listener?).
    - A Interrupção pode ser de Software ou de Hardware. Existe um evento de hardware (tecla, mouse, etc.) que interrompe o que estava fazendo e processa o novo input. Isso acontece em nível de Sistema Operacional, e não de software (que é algo bem diferente). Interrupções acontecem bastante no "chão de fábrica", com automação industrial e etc.
  - Pergunta: _"Do lado esquerdo é write e do lado direito é read?"_ Sim, é possível interpretar assim!
  - Pergunta: _"Nesse caso, faz diferença usar x minúsculo ou X maiúsculo?"_ Sim, na maioria das linguagens de programação, faz diferença. Algumas não faz, contudo, por padrão, vamos nos atentar ao caso de que hoje não faz diferença, mas pensando no futuro, vamos manter a coerência visual do programa por inteiro, pra trabalhar junto a máquina com nosso cérebro (faz diferença o que vemos!).
  - Pergutna: _"Uma dúvida que sempre tive, esse espaço de memória é usado só durante o processamento da variável ou declaração dela?"_ Não, a variável fica lá até que se libere. Algumas linguagens possuem mecanismos pra liberar os valores. Outras linguagens, não, só vai criando e vai deixando as variáveis lá. Pra nós, nesse momento agora, não faz diferença.  

___

## Portugol

### ARMAZENE
- ARMAZENE 1 EM X:
```portugol
ARMAZENE    (valor_designado)    EM    (variável):       
```
  - Vai criar uma caixinha na memória, dando o rótulo de X, e colocando dentro da caixinha o valor "1". Pega um "endereço da memória", pra nós é um mero X, mas pro interpretador/compilador, se trata de um "endereço de memória", que é dividido em blocos de endereços (essa é a diferença entre uma linguagem de baixo-nível e alto-nível;
    - na Primeira, eu trabalho a nível de máquina (preciso saber o endereço da posição de memória - armazene 1 no endereço hexadecima 3BA5... da posição de memória, mas tem um problema, só serve para aquela máquina em específico (história dos computadores e processadores limitados, antigamente os circuitos e fiação eram relevantes, um programa de um computador não funcionava em outro, ou apenas com adição de hardware como ++RAM...));
    - na Segunda, eu trabalho num nível de abstrações (no caso, abstraímos o endereço da posição da memória, pensando somente na "variável x" como um mnemônico) - se precisar mudar o programa, re-compilar o programa, isso não vai trazer problemas que antigamente existiam...; 
  - Armazene TAL COISA em TAL LUGAR;
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/f9f4c02f-d6af-4389-8c66-5125570908d9)

### FAÇA
- FAÇA X IGUAL A X + 1:
```portugol
FAÇA    (nome_variável)    IGUAL A    (valor_atribuído):       
```
  - Também semelhante a dizer "ARMAZENE X + 1 EM X". Portugol não é uma linguagem de programação, mas sim uma maneira de se expressar de modo que possamos entender. Pode ser ambínguo, ATÉ CERTO PONTO, mas precisa manter a consistência. Não posso confundir, pois apesar de falarmos com humanos, nossa programação é direcionado pra máquina, que não tem a nossa percepção (por exemplo, não poderia escrever uma ordem pra armazenar dois valores distintos em uma única variável: "ARMAZENE X + 1 E X + 2 EM X", pois a lógica será truncada). 
  - O valor antigo de X, ao ser atribuído novo valor, vai desaparecer! ;) Por isso se chama "variável"...
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/781c088d-2832-41f0-ab91-26376adbbdc3)

### ESTRUTURA DE CONTROLE

- SE:
```portugol
SE [    condição de teste TRUE    ] ENTÃO
    lista de comandos 1 (aninhado nesse bloco)
    lista de comandos 2 (aninhado nesse bloco)
    lista de comandos 3 (aninhado nesse bloco)
FIM
```
  - As 3 últimas linhas são chamados de BLOCO DE COMANDOS que só será executado se a condição for VERDDEIRA (true).
  - Ou então, se não for VERDADEIRA (false), então o script vai pular o bloco de comandos (listas 1 até 3) e vai continuar a execução do código "pulando" esse bloco, e continuando de FIM em diante...
  - Por exemplo:
```portugol
SE x = 1 ENTÃO:
    x = 2
FIM
```
  - A questão visual, a IDENTAÇÃO DO BLOCO é fundamental, não pode ser negligenciada! Precisamos usar vários níveis de identação, vários níveis de aninhamento! Não podemos perder a noção de onde se está!
  - (Inclusive, existe uma contenda entre Tab vs. Spaces no mundo da programação - https://www.youtube.com/watch?v=V7PLxL8jIl8 )
  - No caso do exemplo, o SE não é uma atribuição, mas sim estou perguntando se "é X igual a UM?", então (bloco de comandos).
  - Contudo, em JavaScript, quando temos uma atribuição, usamos apenas um sinal de ( x = 3 ), porém pra TESTAR um IF, usamos IF ( x == 3 ).
    ```javascript
    if ( x == 3 ) {
      // lista de comandos 1
      // lista de comandos 2
      // lista de comandos 3
      // Observe que apesar de eu ter IDENTADO o bloco de comandos, existe um controle de sinais que {inicia e termina o bloco - mesmo que em outra linha porém no mesmo nível de identação} após o (teste de verdade). E no Portugol, usamos o FIM pra finalizar o conjunto, mas no JavaScript (JS) usamos a estrutura {    } identado.
    }
    ```
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/831ee16c-0094-46c0-9655-ec034025488a)


___

### Detalhes sobre =, ==, ===, linguagens Tipadas e Não-Tipadas:

- Apenas no nosso caso de uso do JAVASCRIPT!:
  - Quando temos x = 3, estamos atribuindo o valor 3 na variável x.
  - Quando temos x == 3, estamos testando a igualdade do valor 3 com o conceito de "3", mas sem testar o tipo (e.g.: "3" == 3 retornará True) (== verifica o conteúdo apenas).
  - Quando temos x === 3, estamos testando a igualdade do valor 3 com o conceito de "3", mas TAMBÉM TESTANDO IGUALDADE entre o TIPO (e.g.: "3" === 3 (string != integer) retornará False) (=== verifica o conteúdo E o tipo).
- Existe uma história da Linguagens Tipadas vs. Linguagens Não-Tipadas:
  - Linguagem C, C++, Pascal, muitas linguagens compiladas... são tipada, pois dizemos _"int x = 0;"_, estou declarando que a variável X é do tipo INTeiro, diferente do tipo CHARactere, no qual usaríamos _"char y = "0"_;
  - Algumas pessoas cortam o número 7, por causa do 7º Mandamento, pois Deus ao entregar os Mandamentos pra Moisés, no 7º dizia "Não cobiçarás a mulher do próximo" e a galera gritou: "CORTA O SETE!" (tu-dum-pxt-tzz);
  - Todavia, algumas linguagens como o Typescript são de fato TIPADAS.
  - JavaScript é menos rígido, o JS é NÃO-TIPADA. O PHP não é tipado (mas algumas versões como PHP8, pode ser delcarado o tipo se quiser). 
    - Por exemplo, em JS usa-se um "let = 0" para criar uma variável x e dentro dela atribuímos o valor de zero (no caso, por padrão, será float), mas sem informar o tipo. Podemos, depois, alterar o x = "a" para representar uma cadeia de caracteres (string) sem nenhum problema.
  - No Typescript, int x = 0, impedirá que futuramente eu utilizasse i = "a", pois iria gerar conflito entre INT e STR.
  - JAVA é uma linguagem FORTEMENTE TIPADA, ou seja, quando declaramos um tipo, não podemos mudá-lo, via de regra.
  - Existem linguagens FRACAMENTE TIPADAS, que permitem alterar depois o tipo (re-declarando o tipo). Basicamente, quase não usamos...
  - Em linguagem de programação não tem "uma melhor". C, C++, Pascal são linguagens COMPILADAS.
    - Existe um programa chamado COMPILADOR. Eu dou/escrevo meu programa para o Compilador. O Compilador executa o programa e faz diversas Verificações em tempo de compilação (enquanto prepara o programa pra rodar). Nesses casos, variáveis tipadas são praticamente uma obrigação pois devemos informar para o compilador "o que está acontecendo"...
    - Linguagens não tipadas (como JavaScript ou PHP), geralmente são linguagens INTERPRETADAS, no browser existe um programinha que INTERPRETA o JavaScript, ocorre na medida que o programa vai sendo executado. Logo, com mais possibilidades de erros, 
  - **Declarar TIPOS tem uma vantagem: costuma-se errar menos, pois evitam-se conflitos entre operações de tipos diferentes, já na premissa.**
  - No caso do TypeScript, não tem um compilador, mas tem uma espécie CONVERSOR, TypeScript não roda em máquina nenhuma, primeiro ele é traduzido para JavaScript pra ser executado, e nessa tradução se verificam os tipos. Então, fica-se mais perto de "livrar-se de potenciais erros". O TypeScript precisa de muitas configurações para ser usado, já o JavaScript é muito mais fácil ver e tangibilizar os resultados.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/22635abd-fc52-4ae9-b8ee-52156510fdc1)

___

### Voltando no Portugol

- ARMAZENE 1 em X
- ENQUANTO ( X < 10):
  - ARMAZENE X.cos(x) em Y  
  - FAÇA X = X + 1 
- FIM

- Nesse exemplo, testamos no início uma condição de controle ( x < 10 ), e enquanto essa condição for verdadeira, o bloco será executado ( Y receberá o resultado de X.cos(x)), e depois faremos o incremento (X = X + 1, ou X++ em JavaScript).
- Esse loop se repetirá enquanto a condição de teste for Verdadeira.
- Ao final, quando o teste retornar Falso, o script vai sair do loop (graças ao incremento de X, que atualizava o valor e evitava um loop infinito).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/afe7bc12-23ad-4821-8f39-5d30e2c00e3b)
  
- ENQUANTO:
```portugol
ENQUANTO [    condição de teste TRUE    ]:
    lista de comandos 1 (aninhado nesse bloco)
    lista de comandos 2 (aninhado nesse bloco)
    lista de comandos 3 (aninhado nesse bloco)
    [  condição de incremento do teste (x++) para, em algum momento, quebrar o loop infinito  ]
FIM
```
- Ao final, após o FIM, considerando que o teste é FALSO, sairemos do bloco.
- Podemos também, criar uma CONDIÇÃO INALCANÇÁVEL, por exemplo rolando eternamente o script adiante antes do teste atingí-lo, somamos o X somente dentro do IF, então nunca atualizaremos o X fora do IF e não sairemos do bloco.  

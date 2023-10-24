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
    lista de comandos 1
    lista de comandos 2
    lista de comandos 3
FIM
```
  - As 3 últimas linhas são chamados de BLOCO DE COMANDOS que só será executado se a condição for VERDDEIRA (true).
  - Ou então, se não for VERDADEIRA (false), então o script vai pular o bloco de comandos (listas 1 até 3) e vai continuar a execução do código "pulando" esse bloco.
  - 
___


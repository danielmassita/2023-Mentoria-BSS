# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

```https://www.youtube.com/live/hTrflXcVZTg?si=Zb9LgDEgraCA3k8P```

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 03

- Códigos (Scripts), vamos usar e testar! Programar não se aprender somente com teoria, mas sobretudo com prática! 
- Sugestão do Node.js
- Ed gravará um novo vídeo no futuro com mais orientações pra instalar programas.

___ 

## sequencia01.js

- Usar o // no JavaScript é uma forma de transformar a linha em um comentário.
- Pessoas adeptas da filosofia do "clean code" divergem sobre o uso dos comentários.
- No JavaScript vamos usar o "Console" pra ver/visualizar (também no browser) alguns comandos.
- VS Code > Ver > Terminal (ou usar o atalho Ctrl + ' ).
- No Linux, o comando ls vai listar os arquivos naquele diretório específico.
- O script é executado linha após linha, em seqüência, de cima pra baixo...
- 
- Script de **sequencia01.js**
 
  ```javascript
  // Seqüência 01
  
  console.log("Primeira linha")
  console.log("Segunda linha")
  console.log("Terceira linha")
  ```
- Output de **sequencia01.js**

  ```
  >>> Primeira linha
  >>> Segunda linha
  >>> Terceira linha
  ```

___

## Estruturas de Controle - If

- Vamos apertar Ctrl + N para uma "Novo programa", e vamos usar uma Estrutura de Controle.
- IF é a palavra inglêsa para "se".
- Se uma coisa acontecer... Faça isso...
- Em JavaScript, nas versões mais modernas, vamos criar variáveis com o termo "let" (ao invés de "var"). Essas variáveis serão alteradas, diferente de "const".

- Script de **if01.js**
 
  ```javascript
  // IF 01

  let i = 23

  const a = 1
  a = a + 1
  ```
- Output de **if01.js**

  ```
  >>> TypeError: Assignment to constant variable.
  ```
  - Esse erro se deve ao fato de que ao "declarar uma constante de valor 1" o valor não poderá ser alterado pois se trata de uma constante.

- Outro Script de **if01.js**
 
  ```javascript
  // IF 01
  let i = 23

  var a = 3
  a = a + 2

  console.log(a)
  ```
- Output de **if01.js**

  ```
  >>> 5
  ```
  - De uns anos pra cá, de acordo com as especificações do JavaScript, passamos a declarar as variáveis com "let" ao invés de "var", pois o "let" tem uma série de vantagens sobre o "var". Porque o escopo de "var" é global, acontece onde foi declarada e todas as funções abaixo dela.
  - Quando declaro com "let" o escopo é local, melhor definido, vamos entender melhor posteriormente. Resumindo, "let" > "var", "const" é caso a caso.
 
  - Mais um outro Script de **if01.js**
  ```javascript
  // IF 01
  let i = 23

  if ( i < 20 ) {
      console.log("Menor que 20")
  }
  ```
- Output de **if01.js**

  ```
  >>> 
  ```
- Nada aparece, pois como o bloco de código só seria executado se i < 20, e o valor de i == 23 (no caso, False é a condição), como foi designado no let, então nada acontece.
- Mais um outro script, agora corrigido, de **if01.js**
 
  ```javascript
  // IF 01

  let i = 23
  if ( i < 25 ) {
      console.log("Menor que 25")
  }
  ```
- Output de **if01.js**

  ```
  >>> Menor que 25
  ```
- Agora, o programa executa o bloco abaixo do "if", pois a condição é verdadeira (True) e então o script vai correr por dentro do bloco de controle.
  
___

## Estruturas de Controle - If-Else

- Vamos trabalhar um novo script, de **if02.js**
  ```javascript
  // IF 02

  let i = 23

  if ( i < 30 ) {
      console.log("Menor que 30")
  } else {
      console.log("Maior ou igual a 30")
  }
  ```
- Output de **if02.js**
  ```
  >>> Menor que 30
  ```
- A pergunta (i < 30 ?) enão a condição inicial é verdadeira (True), então o script vai executar o primeiro bloco (do if) e depois vai pular (o else).
- Na aula de Matemática Discreta, aprendemos que uma proposição pode ser Verdadeira ou Falsa.
- Programar é apenas falar, consigo mesmo, pra mostrar pra si mesmo como resolvemos um problemas. E então, traduzimos pra um computador em uma linguagem de programação.
- Por exemplo, num ATM, se o saldo da pessoa for menor que o valor do saque, diga "não pode".
- O ELSE é o "se-não", caso contrário... Se a condição 1 for verdadeira, eu executo o bloco 1. Senão (for verdadeira, no caso é Falsa), eu executo o bloco 2.

- Vamos trabalhar um novo script, de **if02.js**
  ```javascript
  // IF 02

  let i = 32

  if ( i < 30 ) {
      console.log("Menor que 30")
  } else {
      console.log("Maior ou igual a 30")
  }
  ```
- Output de **if02.js**
  ```
  >>> Maior ou igual a 30
  ```
- Agora, diante da condição/bifurcação, teremos a pergunta: "O valor de i é menor que 30?". Não, não é. Então é Falso. Pula o primeiro bloco (False) e executa o segundo bloco do ELSE (True, 32 > 30).
- If-Else é a primeira ESTRUTURA DE CONTROLE que estamos estudando.
- Com o tempo, vamos aumentar a complexidade dos conceitos.

___

## Estruturas de Repetições - WHILE

- No exemplo da BSS, precisaríamos verificar quem já pagou ou não a mensalidade do mês atual.
- WHILE quer dizer "Enquanto". Vamos usar como uma estrutura de repetição (LOOP).

- No script, de **while01.js**
  ```javascript
  // WHILE 01

  let i = 0

  while ( i < 10 ) {
      console.log(`O valor de i é ${i}`)
  } 
  ```
- Output de **while01.js**
  ```
  >>> O valor de i é 0
  >>> O valor de i é 0
  >>> O valor de i é 0
  >>> O valor de i é 0
  >>> O valor de i é 0
  >>> O valor de i é 0
  (infinitamente até cancelar com Ctrl + C no Terminal)
  ```
- No JavaScript, usamos o acento grave (crase) pra usar uma String especial no caso, f-string, que será uma string de formatação.
- `bla bla bla bla mas eu posso mudar o valor de ${variável} bla bla bla...`
- Esse formato, na parte ${variável} vai aparecer apenas o valor da variável como se ainda fosse parte da frase/string, em cada passada
- Para cancelar um loop infinito, usamos Ctrl + C no Terminal.
- Devemos utilizar um método de saída do loop infinito (no caso, usando uma nova atribuição de valor, que atualizará o valor de i (inicialmente zero) para i + 1 (posteriormente 1, 2, 3, ... pra cada loop).
- Podemos usar a expressão i = i + 1 (atribuímos o valor de i + 1 ao valor anterior de i, no caso = quer dizer atribuição). Ou podemos usar i++.
- Corrigindo **while01.js**
  ```javascript
  // WHILE 01

  let i = 0

  while ( i < 10 ) {
      console.log(`O valor de i é ${i}`)
      i = i + 1 
  } 
  ```
- Output de **while01.js**
  ```
  >>> O valor de i é 0
  >>> O valor de i é 1
  >>> O valor de i é 2
  >>> O valor de i é 3
  >>> O valor de i é 4
  >>> O valor de i é 5
  >>> O valor de i é 6
  >>> O valor de i é 7
  >>> O valor de i é 8
  >>> O valor de i é 9
  (Muito embora o script tenha atualizado o valor de i para 10, ao final do loop, o programa não vai executar o console pois o valor 10 excede a condição i<10), saindo do loop e finalizando o script).
  ```
- Esse processo de atribuir um valor, em loop, e atualizar esse valor, e verificar passo a passo, se chama DEPURAR ou DEPURAÇÃO.

___

## Estruturas de Repetições - While

- Vamos ao código de while.02. Tudo é uma questão de sofisticação. Conforme Darwin, um Bonobo não vira um Chimpanzé, tampouco vira um Humano.
- Na natureza, tudo muda de pouquinho em pouquinho, de maneira lenta e gradual... Mudando, aumentando a complexidade e sofisticação aos poucos.
- Vamos adicionar Controle (if) e Loop (while), com uma condição de Operador (resto da divisão inteira).
- A condição (i % 2 === 0) quer dizer i dividido por dois e o resto da divisão for zero... 
- Corrigindo **while02.js**
  ```javascript
  // WHILE 02

  let i = 0
  while ( i < 10 ) {
      if ((i % 2 === 0) {
          console.log(`${i} é par`)
      } else {
          console.log(`${i} é ímpar`)
      }
      i++ 
  } 
  ```
- Output de **while02.js**
  ```
  >>> 0 é par
  >>> 1 é ímpar
  >>> 2 é par
  >>> 3 é ímpar
  >>> 4 é par
  >>> 5 é ímpar
  >>> 6 é par
  >>> 7 é ímpar
  >>> 8 é par
  >>> 9 é ímpar
  (Muito embora o script tenha atualizado o valor de i para 10, ao final do loop, o programa não vai executar o console pois o valor 10 excede a condição i<10), saindo do loop e finalizando o script).
  ```
- Esse mesmo script poderia ser usado com i < 1000 e de fato seria executado até o valor de 999.

___

## DESAFIO E EXERCÍCIO! 

- Até 10.000, dizer quais números são múltiplos de três.
- Desafio **while03.js**
  ```javascript
  // WHILE 03 Desafio - De 0 até 10.000, quais números são múltiplos de três.

  let i = 0 // Designamos uma variável i como contador que se inicia em zero...
  while ( i < 10000 ) { // Ativamos um loop enquanto i < dez mil, e atualizamos i ao final do if-else com i++...
      if ((i % 3 === 0) { // Condição TRUE para divisão de resto zero para múltiplos de 3... Três iguais representa comparação de Valor E também Type.
          console.log(`O valor de i, no caso ${i}, é múltiplo de 3, pois (i % 3) tem como resto zero, então é divisível por três.`) // Usando format-string no console.log...
      } else { // Condição FALSE que acontecerá em casos em que a divisão ( i % 3 !== 0 )
          console.log(`${i}`) // Retorno visual do console.log com o valor atual do i
      }
      i++ // Incremento do valor de i, a fim de evitar o loop infinito (sem condição de saída)
  } 
  ```

FIM!

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

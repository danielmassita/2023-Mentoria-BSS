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



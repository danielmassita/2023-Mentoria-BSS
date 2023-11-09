# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

``` https://www.youtube.com/watch?v=MmdYcmxrxMU ```

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 06

- Na aula passada, começamos a falar sobre **Estruturas de Controle** (Enquanto, If-simples, Repita, Switch).
- Agora, vamos falar do SE "composto", ou seja, mais sofisticado.
- Na última aula nós vimos:
  - SE (IF) simples
  ```portugol
  SE (condição_teste_true) {
      bloco teste True
      bloco indentado linha 1
      bloco indentado linha 2
      ...
  } CASO CONTRÁRIO {
      bloco teste False
      ...
  }
  ```
  - ELSE-IF (se-composto)
  ```portugol
  SE (condição_1_true) {
      bloco condição 1 verdadeira
      ...
  } SENÃO, SE (condição_2_true) {
      bloco condição 1 falsa mas 2 verdadeira
      ...
  } 
  ``` 
  - Essas condicionais (IF-ELIF) passam a impressão de serem interdependentes, mas podem gerar confusão...
  - Por exemplo: Condição de SE (a > 0) {pipipi} SENÃO, SE (B < 0) {pópópó}. Ao testar a primeira condição, sendo a > 0 True, o script executaria o primeiro bloco {pipipi}, e pularia o segundo bloco. Porém, se A for False (menor ou igual a zero), porém B for True, eu executo o bloco {pópópó}, mas NÃO NECESSARIAMENTE existe relação de A com B. Por isso, fica confuso.
  - Com muitos níveis de IF-ELIF, fica complicado trabalhar.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5e90cc2f-7511-4e8f-91ac-ed3b0de6f239)

&nbsp;
  - **"Teoria do 7 ± 2"**, relação com a complexidade das coisas que eu consigo lembrar. Por exemplo, se pedissem pra 100 pessoas memorizarem um único número, a maioria lembraria depois de 30 minutos. Se pedissem pra 100 pessoas memorizarem dois números, a maioria lembraria depois de 30 minutos. A partir de 5, a queda de memorização é drástica. É como se nosso cérebro fosse uma "LIST" que tem alta performance até índice 4 (de 0 até 4), depois começa a falhar...
  - [The Magical Number 7+/-2 - How to Grab Attention?](https://medium.com/stylumia/the-magical-number-7-2-how-to-grab-attention-8864e0f5592b)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2b265a6b-821e-44df-a6a3-1f8ba0370790)
  - Em sistemas complexos, lembrem-se desse fator importante! Se o sistema possui diversos casos possíveis, ao final dessa árvore, teremos dificuldades de associação.
  - JAMAIS PROGRAME PENSANDO NO CÓDIGO (em programar), MAS SIM NA HORA DE DEPURAR (evitar o erro futuro)! Vamos reduzir a complexidade ao máximo possível.
    - Filme: O Patriota - "Mire pequeno, erre pequeno!" Se o código for pequeno, pouco complexo, fácil de debugar.
    - **Regra dos 6 Meses** - se daqui a 6 meses eu for convidado a ler uma peça de código e não achar ruim, então evoluímos pouco nesse tempo.
  &nbsp;
  - Assim, encerramos basicamente as estruturas de controle. Complexidade só deve ser acrescentada se houver uma vantagem visível. Caso contrário, evite. Podemos ter 4 possibilidades diferentes com apenas 2 IF's.
  - **"Navalha de Ockham"** - Se eu tiver duas hipóteses pra explicar um fenômeno, a mais simples é sempre a melhor (corta uma hipótese fora). Se tiver que ser mais complexa, descobriremos logo no começo o problema pois a mais simples vai mostrar antes o problema. 

___ 

### Estruturas de Dados

- Esse é um dos aspectos mais importantes da programação. A escolha entre uma ou outra estrutura de dados poderá ser a diferença entre um programa complicado e um simples.
- Estruturas de Controle servem para TESTAR, não vamos pensar o CONTROLE do programa, mas sim COMO REPRESENTAR os dados no programa (envolvendo vários aspectos).
- Uma das primeiras Estruturas de Dados serão as **Estrutura FIFO** (_First In First Out_) e **Estrutura LIFO** (_Last In First Out_).
  - **FIFO** (First In, First Out) = primeiro que entra é o primeiro que sai, por exemplo, fila do banco...
  - **LIFO** (Last In, First Out) = último que entra é o primeiro que sai, por exemplo, pilha de pratos na hora de lavar a louça... (fila invertida)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/b1027436-529a-44e9-b224-70d8c5e136b8)

___

### FIFO - First In First Out

- Programa que recebe os dados de várias pessoas, por exemplo o Apache Kafka que faz um enfileiramento (e.g.: RabbitMQ, Pulsar).
- Recebemos os dados em uma determinada ordem, mas não podemos processar todos os dados relativo à nossa capacidade de consumo de dados.
- Imagine uma fila que produz 5 registros por minutos, mas o programa que consome os dados só dá conta de 2 registros/minuto.
  - No primeiro minuto, produzimos 5 registros e consumimos apenas 2 registros.
  - No segundo minuto, teremos +5 registros e consumiremos apenas o 3º e 4º registro.
  - São exemplos de Problemas Produtor-Consumidor, que dizem respeito à questão de Filas.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/03398d61-e482-4f67-a51c-d98ec8b4af28)
&nbsp;
- Por exemplo, quando programas "competem" pelo mesmo recurso (no passado era mais comum, hoje temos dispositivos pra evitar tal situação nos BD's - Banco de Dados)...     
- Imagine um tabela num banco de dados. Cada nova linha é um novo registro, que está sendo gerado.
  - Por exemplo, um formulário de matrícula da mentoria. Cada novo usuário, uma nova linha era acrescentada.
  - Antigamente, havia uma TRAVA que, quando chegava um novo registro (query) e alguém tava usando a tabela, havia uma trava e uma sinalização. Uma segunda pessoa chegou e preencheu. Porém, era necessário esperar liberar a primeira trava. Nesse meio tempo, outras pessoas também chegaram com novos registros. O segundo da fila acessa a tabela, gerando uma NOVA TRAVA. Nesse ínterim, novos registros foram recebidos. Ao final do processo da segunda pessoa, a terceira pessoa chegava e começava um novo processo, travando o registro, sendo atendido, liberando o registro, e assim sucessivamente.
  - A natureza do problema é um problema FIFO.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/60fe1cfa-ca17-411a-9692-191763e443c8)

___ 

### LIFO - Last In First Out

- Um outro problema, mas ao contrário, é quando estamos processando FUNÇÕES em um programa de computador.
- Imagine uma função que chama outras funções. A primeira função realiza um pedaço do cálculo e chama OUTRA função para realizar outros cálculos. Como isso é realizado na memória do computador?
  - Aula de Dízimas Periódicas - Parte 1 - https://www.youtube.com/watch?v=yXWUL2hYDGo
  - Aula de Dízimas Periódicas - Parte 2 - https://www.youtube.com/watch?v=p5KLSyd9ePA 
- Por exemplo, calcular o valor de PI (através de uma série numérica). Ou melhor, ESQUECE O PI, vamos ser mais simples...
- Tomemos como exemplo o número: 0,35353535...
  - Qual a fração que gera essa dízima periódica? Vamos usar um artifício... Chamar a dízima periódica (s) e dividir em pedacinhos...
    ```
    s = 0,35353535...
      = .,35..... = 35/100 = 0,35
      = .,..35... = 35/10000 = 0,0035
      = .,....35. = 35/1000000 = 0,000035
      = SOMATÓRIO = 0,35 + 0,0035 + 0,000035 ...
    ```
  - Imagina, que toda vez que vamos calcular essa dízima periódica, tivéssemos uma FUNÇÃO (n) que calcula a SOMA de: ```(35)/10^n```, onde n varia de 2 em 2 até infinito, e a SOMA se dá por: ``` 35/10² + 35/10^4 + 35/10^6 + ... ```
  - O que o computador faz ao chamar essa função?
    - O computador vai e armazena o endereço da função numa pilha; a próxima função que vier, será armazenada e colocada sobre a pilha, quando chega num ponto limite do resultado (definida a aproximação limite), a função sai DESEMPILHANDO os valores, e vai retrocedendo a medida que retorna o [pedaço] do valor desejado...
    - Por exemplo, o último cálculo foi de 35/10^6, a memória busca essa variável e retorna pra função inicial esse pedaço de informação, e libera a memória do 35/10^6 (desempilha um prato). Aí a penúltima função calculou o 35/10^4, a memória junta esse valor com o último (35/10^6), retorna o novo valor (35/10^4 + 35/10^6), empacota o valor e devolve pra ante-penúltima função, e libera a memória (retira outro prato da pilha). Essa ante-penúltima função pega o resultado até agora retornado, e calcula com o seu 35/10², e soma com os retornos (35/10^4 + 35/10^6). Ou seja, no final, vamos desempacotando o resultado e liberando a memória, sendo: 0,000035 + 0,003500 + 0,350000, que vai retornar 0,353535... até o limite estipaldo.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e4b56c46-bfa2-45fa-8f4c-8ec0219d54f9)

___

### asdf

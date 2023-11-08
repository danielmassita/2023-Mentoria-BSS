# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

``` https://www.youtube.com/watch?v=MmdYcmxrxMU ```

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 06

- Na aula passada, começamos a falar sobre **Estruturas de Controle** (Enquanto, If-simples, Repita, Switch).
- Agora, vamos falar do SE "composto", ou seja, mais sofisticado.
- Na última aula nós vimos:
  - SE (IF)
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
  - ELSE-IF
  ```portugol
  SE (condição_1_true) {
      bloco condição 1 verdadeira
      ...
  } SENÃO, SE (condição_2_true) {
      bloco condição 1 falsa mas 2 verdadeira
      ...
  } 
  ``` 
  - Essas condicionais (ELIF) passam a impressão de serem interdependentes, mas podem gerar confusão...
  - Por exemplo: Condição de SE (a > 0) {pipipi} SENÃO, SE (B < 0) {pópópó}. Ao testar a primeira condição, sendo a > 0 True, o script executaria o primeiro bloco {pipipi}, e pularia o segundo bloco. Porém, se A for False (menor ou igual a zero), porém B for True, eu executo o bloco {pópópó}, mas NÃO NECESSARIAMENTE existe relação de A com B. Por isso, fica confuso.
  - Com muitos níveis de IF-ELIF, fica complicado trabalhar.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5e90cc2f-7511-4e8f-91ac-ed3b0de6f239)

&nbsp;
  - **"Teoria do 7 ± 2"**, relação com a complexidade das coisas que eu consigo lembrar. Por exemplo, se pedissem pra 100 pessoas memorizarem um único número, a maioria lembraria depois de 30 minutos. Se pedissem pra 100 pessoas memorizarem dois números, a maioria lembraria depois de 30 minutos. A partir de 5, a queda de memorização é drástica. É como se nosso cérebro fosse uma "LIST" que tem alta performance até índice 4 (de 0 até 4), depois começa a falhar...
  - [The Magical Number 7+/-2 - How to Grab Attention?](https://medium.com/stylumia/the-magical-number-7-2-how-to-grab-attention-8864e0f5592b)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2b265a6b-821e-44df-a6a3-1f8ba0370790)
  - Em sistemas complexos, lembrem-se desse fator importante! Se o sistema possui diversos casos possíveis, ao final dessa árvore, teremos dificuldades de associação.
  - JAMAIS PROGRAME PENSANDO NO CÓDIGO (em programar), MAS SIM NA HORA DE DEPURAR (evitar o erro futuro)! Vamos reduzir a complexidade ao máximo possível. 


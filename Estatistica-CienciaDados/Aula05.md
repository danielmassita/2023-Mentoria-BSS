# Programa de Mentoria BSS 2023
# Estatística e Ciência de Dados

``` https://www.youtube.com/live/Ujao0izC4VQ ```

## Estatística e Ciência de Dados - Aula 05

___

### Retrospectiva

- Todo matemático é maluco... (eita, olha a generalização)
- Na última aula, tivemos alguns conceitos de medidas centrais (média, mediana, moda)...
- Hoje vamos falar mais sobre PROPABILIDADES. Não é possível aprender algo novo sem exercitar essa nova habilidade...
- Nos próximos meses, vamos começar a acelerar um pouco mais, ter um pouco mais de intensidade, exercícios e etc!
- Todo discurso moralista é Falso! Quanto a pessoa mais critica, pior é... Em italiano, _"puritana, putana"_

___

### Probabilidade

- O que é? Parte da matemática que lida com a jogatina, as chances, as oportunidades... A primeira coisa que precisamos pensar é a noção de:
- **ESPAÇO PROBABILÍSTICO**
  - Imagine uma situação de uma caixa. Dentro da caixa há 10 bolas. Dessas, 6 são pretas e 4 são brancas. A caixa é opaca (não podemos ver dentro), e podemos colocar a mão e retirar uma bola. **Qual é o meu espaço probabilístico? Quais eventos podem acontecer?**
  - Podemos pensar na:
    - P(p) = Probabilidade de bola preta
    - P(b) = Probabilidade de bola branca
    - EP = Espaço probabilístico
  - A probabilidade de um evento acontecer podemos definir da seguinte forma: _"É o número de oportunidades do evento acontecer, dividido pelo tamanho do Espaço Probabilístico"_
  - ``` P(evento-x) = (nº de oportunidades)/(espaço total) ```
  - Nos nossos exemplos, vamos ter a probabilidade de um evento aleatório retirar a bola preta, ou a bola branca. 
    - ``` P(preta) = (nº de oportunidades)/(espaço total) = (6)/(10) = 0,6 ``` ou então 60%
    - ``` P(branca) = (nº de oportunidades)/(espaço total) = (4)/(10) = 0,4 ``` ou então 40%
  - **CONCLUSÃO: A soma das probabilidades SEMPRE deve resultar em 1.** _"A soma de todas as probabilidades envolvidas em um determinado evento ali vai ser sempre 1."_ Ou seja, 1 = 100%. De fato, a probabilidade de eu colocar a mão na caixa e retirar uma bola é de 100% (seja ela qual for). Porém, P(preta) = 6/10, e a P(branca) = 4/10, então a chance de ser uma bola é de 1/1.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/43313304-1388-4c1c-a7be-a483f86d83a2)
 
___ 

### Ampliando a quantidade de bolas dentro da caixa...

- Imaginem agora uma caixa com: 12 bolas pretas, 5 bolas vermelhas, 8 bolas verdes. Total de 25 bolas.
- Qual o tamanho do Espaço Amostral/Probabilístico?
  - 25 bolas = 25/25 = 1/1 = 100%
- Qual a probabilidade de eu tirar uma bola preta? E vermelha? E verde? 
  - P(preta) = 12 / 25 = 
  - P(vermelha) = 5 / 25 =
  - P(verde) = 8 / 25 =
  - Soma dos valores será de:
    - ``` (12/25) + (5/25) + (8/25) = (12+5+8)/(25) = 25/25 = 1 = 100% ```
  - Notem que temos o mesmo denominador (25), então podemos manter o denominador comum e somar os numeradores (12 + 5 + 8).
  - A maior chance é de tirar uma bola preta (12 > 8 > 5). Porém, a chance de tirar verde OU vermelha (8+5) é ligeiramente maior que a de tirar preta (12 < 13).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/79033dc0-a323-4128-bb66-eb7a3d4a391e)

___ 

### 


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

### Probabilidade do Evento Complementar

- A **Probabilidade do Evento Complementar** é o
- Novo exemplo, imagine uma caixa com 12 bolas pretas, 7 bolas vermelhas, 5 bolas azuis.
  - ``` P(preta) = (12)/(12+7+5) = (12)/(24) = 1/2 = 0,5 = 50% ```
  - ``` P(vermelha) = (7)/(12+7+5) = (7)/(24) =_/_ = 0,_ = 50% ```
  - ``` P(azul) = (5)/(12+7+5) = (5)/(24) = _/_ = 0,_ = 50% ```  
  - Qual a probabilidade de tirar uma bola que NÃO SEJA PRETA?
    - 50%! Vamos ver, a Probabilidade de NÃO ser preta é igual a 1 menos a probabilidade de ela ser preta.
      - ``` P(~preta) = (1 - P(preta)) ```
      - Sendo que ``` P(preta) = 12/24 = (1 * 12)/(2 * 12) = 1/2 = 0,5 ```
      - Então teremos que ``` P(~preta) = 1 - (12/24) = [(24/24) - (12/24)] = (24 - 12)/24 = 12/24 = 0,5 ```
      - A probabilidade de não ser preta pode ser expressa de duas maneiras:
        - A soma da P(azul) + P(vermelha) é a chance de NÃO SER PRETA.  
        - ``` P(~preta) = P(azul) + P(vermelha) = (5/24) + (7/24) = (5+7)/24 = 12/24 = (1 * 12)/(2 * 12) = 1/2 = 0,5 ```
      - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d1349d22-b477-4ab5-a43c-fef8034f18da)
&nbsp;
- Podemos pensar também no **EVENTO COMPLEMENTAR** (ou seja, de não ser uma bola preta).
- Qual a probabilidade de NÃO-SER uma bola preta? Temos o conjunto das bolas pretas. E o **COMPLEMENTO** é o conjunto de todas as possibilidades que NÃO-SÃO bolas pretas.
  ```
  - Conjunto Bolas Pretas = { ⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫ }
  - Conjunto Bolas Vermelhas = { 🔴🔴🔴🔴🔴🔴🔴 }
  - Conjunto Bolas Azuis = { 🔵🔵🔵🔵🔵 }
  ```
- Vamos lembrar das QUALIFICAÇÕES, onde temos um "conjunto das bolas" e temos também um "conjunto das bolas pretas" (A). Temos também um "conjunto das bolas vermelhas" (B). Temos também um "conjunto das bolas azuis" (C).
- Observe que a INTERSECÇÃO de A, B, C é vazio: ``` A ∩ B ∩ C = ∅ ```, ou seja, **CONJUNTO DISJUNTOS**, _"uma coisa é uma coisa, outra coisa é outra coisa"_
  - Ou seja, uma bola preta não pode ser vermelha nem azul. Uma bola não pode ter uma cor E outra ao mesmo tempo, logo, não existe intersecções (**Conjuntos Disjuntos**), ou seja, Intersecção = ∅ = { }.   
- A probabilidade de não-ser-preta é justamente a probabilidade de ser um dos conjuntos B e C. Então o COMPLEMENTO de A, é o B + C.
  - Evento Complementar de A = B ∪ C, é aquilo que falta àquilo pra ser um conjunto total.  
- P(~preta) = Complemento do Conjunto das Pretas = Conj.(vermelho) + Conj.(azul).
- ``` P(~preta) = 1 - P(preta) ```
- ``` P(~preta) = P(vermelha) + P(azul) ```
- P(~p) = 1 - 0,5 = 0,5
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/137605b4-950e-4143-ab71-e3ec4f918b1a)
- Nesse exemplo, não ficou claro pois temos poucas opções de eventos distintos... Vamos nos aprofundar...

___ 

### 

- asdf 

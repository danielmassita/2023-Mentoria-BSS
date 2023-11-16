# Programa de Mentoria BSS 2023
# Álgebra Linear

``` https://www.youtube.com/watch?v=IQX-OPQ9HuA ```

___

## Álgebra Linear - Aula 06

- Marco Civil da Internet - Estamos gravando!
- Na última aula falamos sobre "Bate-papo sobre Aprendizado" de modo geral! https://www.youtube.com/live/mVVWhuW1bho 
- Vale a pena também pensar no vídeo "Aprendendo a Aprender". https://youtu.be/QRgzlfY9vRw
- Na aula passada, também discutimos as características do Espaço Vetorial.
  - A Soma de Vetores era comutativa;
  - A Multiplicação por Escalar era comutativa;
  - Blá blá blá...
- Pra ter uma sensação mais prática na nossa vida, vamos falar hoje sobre **APLICAÇÕES** dos vetores (física, matemática, para além da teoria e não meramente abstrato.

___

### Aglumas Aplicações

- Por exemplo, uma das formas mais básicas, já vimos quando **pensamos em um vetor como um DESLOCAMENTO** (do ponto A ao ponto B).
    - Interessante o vetor como DESLOCAMENTO, pois mostra outra visão: o vetor trabalhar com a idéia da resultante (do ponto A ao ponto B). Depois do ponto B ao ponto C. Depois, do ponto C e retornei ao ponto A: meu deslocamento foi zero.
    - Isso aconteceu pois o vetor (vetor.CA) = -(vetor.AB), ou seja, a resultante do ponto A ao ponto B e ao ponto C, é na verdade a SOMA dos (vetor.A) + (vetor.B) = SOMA = Resultante do (vetor.(A+B)). Como a resultante vetor.(A+B) = ao ponto C, o vetor de C para A, é o inverso (mesmo módulo, mesma direção/inclinação, sentido OPOSTO, ou seja, *-1).
    - Deslocamento Total = zero
    - Deslocamento Escalar = |a| + |b| então teríamos se |a|=1km, |b|=1km, um último deslocamento de retorno seria um pouco menos que a soma (1+1), porém a soma dos módulos |a|+|b|+|c| aprox. menos que 3 km - por causa do EFEITO DA DESIGUALDADE TRIANGULAR. Mas seriam, talvez, mais de 3 km, mas no TOTAL o deslocamento foi zero (voltar ao ponto de origem).
    - Existe uma diferença entre DESLOCAMENTO VETORIAL (pensa no Resultado Final da operação) e DESLOCAMENTO ESCALAR (é a soma do quanto eu andei, não importa onde comecei/terminei). Se eu viajo de uma cidade, pra outra cidade, depois volto pra casa, meu deslocamento vetorial final/real (do ponto de vista vetorial).
    - Deslocamento pode ser interpretado como vetor pois possui: Módulo (tamanho, quanto andei de A-B); Direção (na reta A-B); Sentido (de A para B).
    - Todas as Características de um Vetor: Módulo (que é o tamanho dele); Direção (que é a reta na qual estou andando); Sentido (do ponto de saída ao ponto de chegada).
    - Também falamos sobre a convenção (convencionar que de A para B é positivo/negativo, somar/subtrair, ir/voltar).
    - DESLOCAMENTO TOTAL pode ser expresso na forma de vetor, pois possui todas as características de vetor (módulo, direção, sentido).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/963283e0-1c6e-4c71-a779-6d0b873939ce)

___

### Velocidade também pode ser Vetor

- Velocidade de um corpo também pode ser expressa na forma de vetor, pois possui as características de um vetor.
- Por exemplo, estou dirigindo a 30 km/h, estou dizendo que:
  - Módulo Velocidade = 30 km/h (valor da minha velocidade);
  - Estrada é a minha Direção (pois estou circulando nessa "reta suporte" - pensemos hoje em termos de reta, futuramente em termos de curva), já que vetor é uma **grandeza finita**
  - Sentido, pra minha velocidade, pois a minha velocidade também tá andando junto comigo na mesma direção que eu estou indo (se vou de A-B à 30 km/h, o vetor velocidade também vai nessa direção, exceto em caso de dirigir em marcha à ré (velocidade negativa)).
&nbsp;
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/cecd9030-250d-4df7-b534-8a354208abdb)
- Mais curioso, ainda que estivesse numa estrada curva, poderia pensar em termos de vetor.
- Veja melhor, saindo do ponto A ao ponto B, na verdade é como se eu saísse SOMANDO PEQUENOS VETORES, vários e vários, entre o A-B.
- Porém, se calcularmos a SOMA DOS PEQUENOS VETORES, será o mesmo que o VETOR A-B.
  - Por isso, temos terra-planistas, que acreditam que se pegarmos dois pontos suficientemente próximos entre A-B, acha-se que é uma reta, quando na verdade é um arco de curva tão pequeno, diante do raio da Terra, que o cara não percebe a magnitude do Planeta, e ignora a curva aparentemente "reta" pois sua perspectiva é pequena demais.
  - A soma dos "pequenos segmentos de reta" (pequenos passos) será o VETOR TOTAL (resultante), sendo um DESLOCAMENTO QUASE-LINEAR!
- Essas GRANDEZAS que podemos definir como tendo Módulo, Direção e Sentido, todas elas serão bem expressas e aplicadas na forma de vetores.

___

### Aceleração também pode ser vista como Vetor

- Aceleração é a Variação da Velocidade.
- Problemas de 'queda livre' (aceleração da gravidade, g ≅ 10 m/s²), a velocidade vai aumentando enquanto estou caindo, ou seja: "a cada segundo, minha velocidade aumenta 10m/s".
- Imagine jogar uma pedra do alto de um prédio de 500m. A pedra inicialmente está parada. Quando soltamos, ela vai começar a cair, saindo do estacionário, a pedra vai aumentar sua velocidade em 10m/s, a cada segundo, por isso ``` (10 m/s)/(s) = (10 m/s) / (1/s) = (10 m/s) * (s/1) = 10 m/s² ```
- Num primeiro momento a pedra estava parada. Depois de 1 segundo, a velocidade dela passou a ser de 10 m/s. Depois de +1 segundo, a velocidade dela passou a ser de 20 m/s. Depois de +1 segundo, a velocidade dela passou a ser de 30 m/s...
  - O Módulo tá crescendo na proporção da Aceleração (Variação da Velocidade); 10m/s; 20m/s; 30m/s...
  - Mesma Direção/Inclinação (na mesma vertical até o centro da terra) e no mesmo Sentido (do alto pro chão, na mesma reta-vertical).
  - Apenas o Módulo que tá aumentando, pois estou sujeito à uma Aceleração.
  - A Aceleração é a TAXA que a minha velocidade aumenta a cada segundo. Vetor velocidade continua sendo um vetor, mas variável, a cada segundo aumenta.
  - VETOR está sendo MULTIPLICADO por um ESCALAR (10): 10; 20; 30; ...
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/79aa1d98-ad4d-4a02-9cda-e1e0adc6337c)
- Na vida real, existem outros fatores, como Resistência do Ar, Formato do Corpo, Velocidade Limite (senão, morreríamos pela gota de água de chuva...).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a58feea3-d607-4235-86d5-03ca9183baf8)
- Brian Cox visits the world's biggest vacuum | Human Universe - BBC - https://youtu.be/E43-CfukEgs
- Da mesma forma, na água (pois o ar E a água se comportam como fluidos - Mecânica dos Fluídos!), existe resistência do fluido! Na água, afundar um "freesbee" e uma bola de bilhar é visível e perceptível!

___

- Dúvida: _"O que acontece se jogarmos uma formiga do avião?"_
  - A força pêso quase se equipara com a resistência do ar, talvez nada aconteça... Melhor seria não jogar nenhum animal, bixinha...
- O mesmo acontece com os grãos de areia que cruzam o Mediterrâneo de África até Europa, ou as cinzas 
  - A poeira levantado por um vulcão pode demorar a se sedimentar na terra, pode ficar em suspensão por tempo prolongado! Talvez o formato dos grãos sejam tão "leves" que a resistência do ar e a própria corrente do ar (ventos) pode levantar os grãos e mantê-los suspensos!
  - O pêso do grão de areia: força da gravidade fraca (na atmosfera alta, gravidade pra baixo) representada por (Vetor.Gravidade) + Resistência do Ar e Velocidade Limite de Queda representada por (Vetor.Resistência).
  - Com o mesmo Módulo, uma força da gravidade é o (Vetor.Gravidade), uma outra força da resistência que é (Vetor.Resistência), ambos com MESMO MÓDULO, ambos vetores no Sentido "Vertical", porém com Sentidos opostos (gravidade=baixo; resistência=cima). Vetores sem deslocamento, se anulam as forças, o grão de areia fica suspenso! Ainda sem contar a rotação da terra! ;)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/feccea94-3ebd-4e1d-b73d-80f0afa7b712)


___ 




     

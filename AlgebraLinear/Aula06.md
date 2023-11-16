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
  - Com o mesmo Módulo, uma força da gravidade é o (Vetor.Gravidade), uma outra força da resistência que é (Vetor.Resistência), ambos com MESMO MÓDULO, ambos vetores no Sentido "Vertical", porém com Sentidos opostos (gravidade=baixo; resistência=cima). Vetores sem deslocamento, se anulam as forças, o grão de areia fica suspenso! Ainda sem contar a rotação da terra! ;) Todavia, existe uma **Velocidade Limite** (cálculo de equações diferenciais, no futuro...).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/feccea94-3ebd-4e1d-b73d-80f0afa7b712)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/73d7e0c8-ae06-443d-ad94-4c444b7b5e6f)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c9de13ed-7338-4c48-b9c8-89dbc75f7ca9)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ab4e9ecc-b44f-408a-b67e-cfca74786948)
- **A Vida imita a Arte, ou a Arte imita a Vida?** Exemplos de usos da resistência do ar vs. gravidade...
&nbsp;
- Conselho para programadores! **Ao criar uma solução, cuidado pra não criar outro problema!**
- Exemplo do encontro bi-anual no IMPA (Inst. Matemática Pura e Aplicada), no Horto no Rio de Janeiro! Formato do jato de água do bebedouro que não é perfeito, após o limite da parábola, o filete da água começa a sofrer turbulências e se destaca... No centro do fluxo de água, a velocidade tende a ser minimamente maior, e nas bordas com o atrito, tende a ser minimamente mais lento. MecFlu (Mecânica dos Fluidos). A medida que a parábola da água fica mais alta, a velocidade final começa a diminuir, e o vetor pêso começa a afetar mais, proporcionalmente ao ápice da parábola... Na tangente, a velocidade vertical se anula, e a força pêso começa a puxar pra baixo e o fluido começa a ganhar velocidade. A resistência do ar passa a ser relevante, e o tubo de água se desfaz já que a parte interna vai descompassar, gotas sofrem mais resistência (dada ao seu formato) e a resistência começa a dispersar o fluxo de água, e no final se espalha...
- Todo problema é uma simplificação, ignoramos os fatores, a medida que valem ser ignorados (ou não!) para podermos trabalhar de modo razoável...
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/99f84ca7-a477-4956-b739-3543b1744b6f)

___ 

### Todo problema é uma simplificação

- Para construir um prédio, usamos a Lógica de Euclides, e fazendo o "aplainamento" da fundação, trabalhamos com uma "reta quase reta", mesmo que sobre uma curva da terra.
- Diferente seria com uma obra que cobrissem alguns quilômetros de área (um prédio de 2 km de raio), o pedreiro de um lado, separado de outro 4 km do outro lado, temos uma variação no prumo do prédio (que apontam ao centro da terra)... 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e55e7492-1c4c-45df-8da0-b1e647f7a6f3)
- Numa grande obra, como hidrelétricas ou uma ponte muito longa, isso tudo tem de ser considerado, por exemplo, numa construção de uma ponte, certamente teremos um rigor técnico mais preciso e com menor margem de erro.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7db8afbe-d815-476d-9f40-19c8a4c94461)
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/21f6a8f7-9ef6-4fb0-a3bc-25e452397377)

___

### Conceito de Gradiente

- Imagine uma chapa de metal, e no meio dessa chapa existe um Bico de Bunsen (com fogo). A temperatura no centro será bem maior, e vai resfriar a medida que se aproxima das extremidades, até que a chapa fique toda vermelha e a temperatura se distribúa, durante o aquecimento geral.
- Pensemos no centro, com um raio com várias diferenças de temperaturas, entre um ponto para outro.
  - Como temos **duas grandezas diferentes**, em **pontos diferentes**, podemos pensar como um Vetor.
  - Do ponto raio-1, até o ponto raio-2, está _"andando a minha temperatura"_ (no centro mais quente, nas bordas mais frio).
  - Então, o **Módulo da Diferença da Temperatura** passa a ser um Vetor (Módulo, Direção, Sentido).
    - Módulo: diferença de temperatura entre dois pontos distintos;
    - Direção: pra onde vamos andando, no caso aí, todas as radiais serão iguais (do centro para os raios);
    - Sentido: esfria na direção da borda (mais quente na direção do centro (positivo) e bordas (como negativo) e a temperatura conflui nesse sentido;
  - Eis um novo vetor.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/abf277f7-edb4-4f0d-abcf-9709b97284e4)

&nbsp;
- **E podemos também PEGAR QUALQUER GRANDEZA ESCALAR, e transformar em uma GRANDEZA VETORIA, basta pensar no tal do Gradiente!**
&nbsp;
- Gradiente:
  - _Gradiente é uma FUNÇÃO que associa, a cada ponto do espaço (ponto a-b), uma diferença de alguma coisa em relação aos outros pontos._
  - Quando pensamos desse jeito, o meu campo ESCALAR de temperatura (cada ponto, tem um valor de temperatura, é uma Escalar). Mas quando pensamos nas DIFERENÇAS, podemos ver o campo Escalar como um Vetor.
- Um mapa de calor gráfico é uma REPRESENTAÇÃO DE UM GRADIENTE. As curvas de níveis são pontos isotérmicos (temperatura igual, mudança na margem). 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a7a772b7-02b8-40e4-aa85-e064ddd772c9)
- Um mapa isotérmico marca nas bordas os pontos onde há uma grande mudança no limite de temperatura. Mas na prática TRATA-SE DE UM CONTÍNUO (temperatura), o que muda é o GRADIENTE que vão aumentando a DIFERENÇA em relação ao ponto central.
- Se escolher outro ponto no mapa, **todo o conjunto de vetores muda, mas o GRADIENTE continua o mesmo (pois mede a "diferença")**!
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/dc9c202a-e3df-42da-a546-1503f85bd6ef)
- Se pegássemos um outro ponto focal (de referência), em relação ao ponto inicial (gradiente sendo o ponto mais frio), os vetores invertem (sentido quente-frio), e os pontos formarão campos nulos (temperatura não aumenta ou não chegou, o Grandiente do Vetor é zero (a irradiação de calor pode não chegar a certa distância do foco de calor)). Se não tem diferença, o gradiente pode ser nulo - E AQUI ESTÁ o ponto de mudança de sentido (referêncial, é onde o referencial é alterado, chega no nulo e inverte).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7c97562c-143c-4740-b300-76932ba16f82)
- Em geral usamos o ZERO (0) como referência, e passamos a medir antes e depois desse ponto...  
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/935b8c54-a72a-445a-a0b6-58cafe95fdd1)

___

### A visão do progamador e os Estágios de Jean Piaget... 

- Hoje em dia não é como antiamente... (HAHA!)
- Pensar em toda a lógica antes, na mente, antes do código!
- Pensamento abstrato é o rolê - Jean Piaget! 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/2d87bf5b-9232-49a1-ba4a-81373f7577be)
- Jean Piaget, e os estágios do aprendizado:
  - Concreto - Sensório-Motor
  - [...]
  - Operações Formais - Abstrações do concreto e representar como um problema de outra maneira...
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5bbe20a7-cc2d-467b-8a74-8cb924556374)

___

### Sair do CONCRETO e buscar o ABSTRATO

- Sair do Concreto e criar Abstratos; O que importa é a natureza da coisa, e não a forma.
- POO (Programação Orientada a Objetos), é sobre isso, temos classes de objetos que possuem determinadas funcionalidades e não tô preocupado com a cor da garrafa de refrigerante, mas sim com a funcionalidade (abrir, servir), conteúdo (água, refri, etc.) mas pertence à mesma CLASSE garrafa. E tem coisas que colocamos na garrafa, 
- Entender a Lógica de Vetores dentro de problemas REAIS, transformar um problema concreto em um problema abstrato usando vetores. Vamos fazer isso com Programação!
- Uma imagem, um leito vê uma imagem apenas. Eu vou ver um conjunto de vetores, representados por pontos-pixels na minha tela, posso aplicar uma transformação linear expressa por uma matriz, etc... Precisamos entender a lógica por trás de representar um problema através de uma estrutura de vetor. Álgebra Linear não é apenas decoréba.
- Ao falar em Transformação Linear, temos que ter consciência que estamos TRANSFORMANDO UM CONJUNTO QUALQUER DE OBJETO (pixels da imagem em tela, gradiente de temperatura da placa de metal, linhas isotérmicas num mapa, etc.)
- 


     

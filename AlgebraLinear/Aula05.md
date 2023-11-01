# Programa de Mentoria BSS 2023
# Álgebra Linear

``` https://www.youtube.com/watch?v=vDPVQ9FWvjg ```

___

## Álgebra Linear - Aula 05

- Marco Civil da Internet - Estamos gravando! 
- Na Aula 04, nós discutimos o conceito de **Espaço Vetorial**, mas de maneira informal. 
- Ou seja, demos uma idéia sobre o que era Espaço Vetorial, chegamos à conclusão de que:
  - Espaço Vetorial é um conjunto de vetores associado à um outro Conjunto (de onde tiramos os famosos) Escalares;
  - Existe todo um Conjunto de Operações que caracterizam esse conjunto como Espaço Vetorial;
  - Hoje vamos formalizar com maior rigor;
- Diálogos sobre a beleza, comer alfafa, xavecos e ganhar na lábia...

___

### Espaço Vetorial (definição formal)

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/edcb8295-f4b9-46cc-8b44-e163d350ef0e)
- Definição Formal de Espaço Vetorial:
- ```"Um espaço vetorial V sobre um corpo F é um Conjunto, munido de duas operações (soma e multiplicação por escalar), que atende algumas propriedades."```
  - Espaço Vetorial V, Corpo F (de onde tiramos os escalares), duas operações (soma e multiplicação-escalar), atende algumas propriedades. 

- **SOMA VETORIAL** {Conjunto V}:
  - *Associatividade da Adição*
  - *Comutatividade da Adição*
  - *Identidade Aditiva*
  - *Inverso Aditivo*
- **MULTIPLICAÇÃO POR ESCALAR** {Conjunto Corpo F}:
  - *Associatividade da Multiplicação*
  - *Identidade Multiplicativa*
  - *Distributividade da Multiplicação em relação à Adição de Vetores*
  - *Distributividade da Multiplicação em relação à Multiplicação de Escalares*
- Vejamos, detalhadamente...

___

### SOMA VETORIAL

  - **Associatividade da Adição**
    - Essa propriedade, basicamente, diz que se eu pegar 3 vetores (u, v, w) pertencentes à V (espaço vetorial), ```(u+v)+w = u+(v+w)```, tanto faz a ordem que fazemos a operação, de modo que não há diferença se calculamos primeiro (u+v)+w ou u+(v+w), ambas as operações vão dar o mesmo resultado de acordo com a Regra do Paralelograma.
    - Vamos tomar como exemplo um vetor preto (vetor.u), um vetor amarelo (vetor.v) e um vetor vermelho (vetor.w). Podemos traçar uma paralela a (vetor.u) e (vetor.v), preto e amarelo, e a Soma será a resultante (u+v).
    - Depois, traçamos uma paralela ao vetor vermelho (vetor.w), com o vetor resultante (vetor.u+v), e teremos uma nova resultante vetor.((u+v)+w).
    - Podemos fazer o contrário (operação inversa), (v+w) e depois (v+w)+u. Não vai haver diferença.
    - Como não importa por onde começamos, podemos falar em "associatividade da soma", pois a regra do paralelograma vai gerar o mesmo resultado.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/439a5839-5436-4412-b806-b58c16355b2e)
      
  - **Comutatividade da Adição**
    - Lembremos, que estamos falando de somas vetoriais. A comutatividade diz basicamente que, se eu somar um vetor.u com um vetor.v, tanto faz por onde começo.
    - A regra dos paralelogramas já deixa claro que é irrelevante por onde começo. Vai no destino do vetor.u e traça uma paralela ao vetor.v.
    - Vai no destino do vetor.v e traçamos uma paralela ao vetor.u. Não faz diferença qual fazemos primeiro. ```Tanto faz somar (v+u) = (u+v)```. A própria operação adição de vetores é comutativa.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/54395b8e-4ea8-4748-9f4e-bead857effe2)
      
  - **Identidade Aditiva**
    - Existe um vetor que se eu somar com qualquer outro vetor, não altero ele.
    - Vetor.Nulo + Vetor.a = Vetor.a
    - Imagine um (vetor.u), sozinho, e vamos adicionar um Vetor.Nulo, não começa nem termina. É só um ponto no início do vetor.u, ou no final do vetor.u, transportanto um ponto e uma paralela, NÃO altera o vetor, portanto o Vetor.Nulo não afeta o Vetor.A. Simplesmente não afeta o vetor.
    - ``` (v.0) + vetor.u = vetor.u ``` é o mesmo que ``` vetor.u + v.0 = vetor.u ``` pela comutatividade da soma.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/96b140ec-17ae-40aa-a117-d78cf57d7b48)
      
  - **Inverso Aditivo**
    - Temos um vetor.u (em preto), e traçamos um vetor.v (em vinho), que segue a mesma direção, mesmo módulo e direção oposta.
    - Vetor é caracterizado por três grandezas (Módulo = tamanho da distância), (Direção = inclinação da reta suporte que são paralelas {Teorema do Feixe de Paralelas}) e (Sentido = um vai/aumenta outro volta/diminui na reta).
    - Agora usamos a Regra do Paralelograma: Um vetor.u de módulo |m| que vai, com mesma direção (inclinação ângulo = θ (theta)), um vetor.v de módulo |m| que volta, com mesma direção, ambos com sentidos opostos (um vai, outro volta), vai resultar em uma "volta ao ponto de origem", com deslocamento total de zero.
    - Como se anulam, o (vetor.u) é igual ao inverso do (vetor.-v): ``` vetor.u = -1 * (vetor.v) ``` e ``` (vetor.u) + (-vetor.v) = 0 ``` O vetor.v é o inverso aditivo do vetor.u.
    - É como andar 5m numa direção, voltar 5m dessa direção, mesmo tendo andado 10m, não houve deslocamento total (voltamos à origem). O deslocamento total é nulo.
    - [Pergunta: digressão de 10' sobre relatividade, vide item seguinte]
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1ef01907-7c34-49cc-b4c6-50e7040cca1a)

___
    
### MULTIPLICAÇÃO POR ESCALAR

- O conjunto do Corpo F é de onde eu tiro os "escalares", em geral o corpo ℝ é o conjunto dos números reais (ℝ). Corpo também possui propriedades (eg.: Completude, conjunto completo sem espaços vazios dentro do corpo, sem buracos, conjunto denso, não é conjunto magro... Na multiplicação por escalar, pegamos um elemento do corpo F, e os elementos dos vetores do conjunto V. 
      
  - **Associatividade da Multiplicação (por Escalar)**
    - Essa primeira propriedade, imagine um Escalar K, pertecente ao Conj. Corpo F ``` k ∈ F | (vetor.u), (vetor.v) ∈ V ``` e vetor "u" e vetor "v" pertencentes ao Conj. Espaço Vetorial "V". A Associatividade da Multiplicação da Escalar quer dizer que (k\*vetor.u) + (k\*vetor.v) = k*(vec.u + vec.v), colocamos o "k em evidência". ``` k*(vetor.u) + k*(vetor.v) = k*(vetor.u + vetor.v) ```.
    - Tomemos como exemplo um vetor.u e um vetor.v. Façamos, pela Regra dos Paralelogramas, suas correspondentes paralelas, e no meio traçamos o vetor resultante (vec.u + vec.v). Se por acaso eu dobrar (escalar k = 2) o vetor.u terei (2 * vec.u). Igualmente, se por acaso eu multiplicar por dois (escalar k = 2) o vetor.v terei (2 * vec.v).
    - Na Soma dos vetores, vamos na origem do primeiro ou segundo, traçamos a paralela, e buscamos o ponto em que se encontram (vetor resultante u+v).
    - Ora, se eu fizer a resultante do dobro do Vetor.u e o dobro do Vetor.V, (2\*vec.u + 2\*vec.v), usando a Regra dos Paralelogramas, teremos um vetor resultante de 2*(Vec.u + Vec.v).
    - Com o Escalar k = 2, teremos 2\*vetor.u, teremos 2*vetor.v, e também teremos a resultante 2\*(vetor.u + vetor.v).
    - ``` k ∈ F | (Vec.u), (Vec.v) ∈ V ``` sendo k=2, logo ``` k*(vec.u) + k*(vec.v) = k*(Vec.u + Vec.v) ``` no exemplo será ``` 2*u + 2*v = 2*(u+v) ```.
    - Trata-se, novamente, do Teorema de Tales, com retas paralelas que suportam o Vetor V, paralelas que suportam o Vetor u, teremos o Vetor Dobro U, teremos o Vetor Dobro V, também teremos o Vetor Dobro u+v. Poderia ser o triplo ou quádruplo (k=3, k=4, ...), a operação será a mesma (k.u + k.v = k.(u+v)), não muda a inclinação, só continuar esticando. Essa é a Associatividade da Multiplicação por Escalar.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/769a61db-256e-448b-bc97-9c590af5c721)

  - **Identidade Multiplicativa**
    - Significa dizer que existe ( ∃ ) um cara K dentro (pertecente ∈ ) do Corpo F, tal que, esse cara (k) multiplicado por V é sempre igual à V, para todo V ( ∀ ) pertencente ao Espaço Vetorial.
    - ``` ∃ k ∈ F | k*(Vetor.v)=(Vetor.v)    ∀ (Vetor.v) ∈ V ```
    - Definição: _"Existe um k pertencente ao Corpo F, tal que k*v é igual a v, para todo V pertencente à V"_.
    - No caso, a Identidade Multiplicativa é o número 1. Dentro do Corpo F (ℝ) existe ao menos um elemento (se dois, são elementos iguais, é único) que multiplicado por ele, dá o próprio vetor no Espaço Vetorial (V).
    - { 1 ∈ ℝ (Corpo ℝ) e quando (1 * Vetor) = Vetor }
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/00ec1465-79f7-4a85-a893-b80f50382035)
      
  - **Distributividade da Multiplicação em relação à Adição de Vetores**
    - asdf

  - **Distributividade da Multiplicação em relação à Multiplicação de Escalares**
    - asdf 

___

### Relatividades

- Pergunta: _"Quando temos um vetor bi-dimensional, sendo x=2 e y=-3, isso é um vetor com sentido Positivo, Negativo, ou tem um sentido misto?"_
- No plano cartesiano, vetor centrado na origem (0,0), o vetor x=2, y=-3, vetor.(2,-3), chegamos a refletir que "positivo e negativo são convenções".
- Quando trabalhamos vetores num plano, estou vendo deslocamentos (da origem (0,0) até ponto (2,-3) sendo uma caminhada). Se foi feito uma caminhada, houve um movimento de 2*módulo, mas não houve deslocamento referente ao ponto inicial.
- Tudo depende do referencial, é essa a essência da Mecânica de Newton. A mecânica newtoniana é baseada em vetores, tudo dependerá do referencial.
  - Velocidade, é grandeza vetorial. Saio do ponto A ao B, vetor origem -> destino. Velocidade é o deslocamento em função do tempo. Temos módulo da velocidade, direção e sentido (acelar, freiar pra mudar velocidade). Se eu tô num carro à 60km/h, e um carro me ultrapassa à +20km/h e se afasta nessa velocidade. Se considerássemos nossa partida na mesma origem, depois de uma hora, eu estaria no carro A há 60 km da origem, a outra pessoa no carro B à 80 km da origem, teríamos uma distância entre nós de 20 km, decorrido o tempo de 1h. Duas horas depois, 40 km de diferença. Nossa velocidade relativa é de apenas 20 km/h, relativos à mim.
  - Por isso, sem referência, não sentimos o movimento de um veículo em velocidade constante (tipo uma caixa de vidros pretos sem ref.) Não podemos dizer que estamos em movimento. Precisamos sempre olhar pra referência de fora. Por isso, nos metrôs existem janelas, embora não se possa ver muito (pra evitar fobias). Exemplo do ônibus, quando estamos num ônibus parado, e o ônibus do lado começa a dar ré, a gente desequilibra, temos a impressão que estamos indo pra frente...
  - Logo, não tem sentido Negativo e Positivo, mas sim SENTIDOS OPOSTOS. Não existe positivou ou negativo absoluto.
  - Da mesma forma, o oposto, se estou dirigindo à 60 km/h e outro carro na minha direção vindo do sentido oposto à 80 km/h, vamos colidir como se estivesse parada a parede e o carro chegasse à 140km/h (60km/h + 80km/h).
- Não confundir a Relatividade Newtoniana (tudo depende do referencial que eu adoto), com a Relatividade de Einstein e com o Relativismo Moral.
  - Outro dia, alguém disse que Einstein falou que tudo é relativo, mas não é fato. Cuidado com computação quântica, massagem quântica, boquete quântico, relatividade espiritual, pessoas falam sobre coisas quânticas e relativísticas por charlatões.
  - A Relatividade de Einstein vale pra um corpo de massa gigantesca (estrela, planeta) ou velocidades próximas da luz.
  - Efeito Quântico, só é perpetível à nível de sub-partículas atômicas. Coach-quântico é um trapaceiro, charlatão, usa a desinformação sobre física pra ganhar dinheiro de trouxas.
  - Voltamos pro Inverso Aditivo, o ```(vetor.u) = -(vetor.v)```, ou ``` vetor.u + (-vetor.v) = 0 ```.    

___

### Sobre Direção, Inclinação e Tangente α

- A direção do vetor é o ângulo em relação à reta suporte (no caso padrão, eixo x). 
- A Direção do vetor é a inclinação do ângulo = θ (theta).
- A ```Inclinação (aka. Direção) α desse vetor é a Tangente αº (tg α)``` é para "onde" aponta o vetor, na reta do vetor, sendo que:
- A tangente de alfa (Tg.α) é a relação entre o Cateto Oposto (eixo.y) e o Cateto Adjacente (eixo.x), que é a razão entre o Seno de Alfa (Sen.α) e o Cosseno de Alfa (Cos.α) ``` Direção = Inclinação = (Tg.α) = (cateto oposto)/(cateto adjacente) = (Tg.α) = (Sen.α)/(Cos.α) ```
- Então, o que caracteriza o ângulo é a inclinação da reta, que é justamente a Tangente do ângula que se faz com o eixo horizontal.
- Quando duas retas são paralelas, pelo Teorema de Tales (paralelas cortadas por uma reta, os ângulos correspondentes são iguais), os ângulos, Direção do Vetor e Inclinação são iguais. Os vetores possuem a mesma DIREÇÃO.
- *Não nos preocupamos com o "onde está a paralela", pois não nos importa tanto uma vez que podemos DESLOCAR vetores (trasladar e afins, fazer paralelos), tanto que na Soma Vetoria fazemos um paralelo e traçamos novas paralelos nos destinos/origens dos vetores, bastando manter a INCLINAÇÃO, tendo Módulos, Direções e Sentidos, sobre a mesma reta suporte.*
- Sentido, logo, é arbitrado. Módulo é comprimento do vetor (deslocamento), Direção é a Inclinação sobre a reta suporte na qual anda, Sentido é arbitrado pra ser positivo e o oposto é negativo.
- Em alguns problemas, vale inverter sinais pra simplificar a solução. Em matemática, é necessário manter a cabeça solta e aberta para outras perspectivas.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/345456ab-8a56-49db-bc4d-70414660bc67)


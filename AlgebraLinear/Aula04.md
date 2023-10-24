# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://www.youtube.com/live/BQ-R5wVlRfU?si=K2IQHWAMKDEuUG4b```

___

## Álgebra Linear - Aula 04

- Na Aula 03, nós discutimos o conceito de **Vetor**.
- Nessa aula, sendo uma extensão da última, vamos falar sobre o conceito de **Espaço Linear**.
- Mas antes, algumas perguntas pertinentes que surgiram no decorrer da semana e que se somam à aula de hoje.
- Perguntas:
  - Ed, o vetor ao somar com outro vetor, o resultado é sempre um vetor? E no caso radical de um Vetor +2 com outro Vetor -2 (mesmo módulo, mesma direção da reta ℝ, sentidos opostos +/-), o resultado seria nulo?
    - Sim, existe sempre um **Vetor Nulo**.

___

## Por quê existem "Terraplanistas"?

- Razão #1 = estupidez. A palavra _"planeta"_ não vem de "plano", mas sim da idéia de "andarilho", pois os planetas "vagavam" na abóbada celeste enquanto as pessoas achavam que a Terra era fixa (movimento relativo do céu). Podemos também comprovar a curvatura da Terra com um eclipse (que aconteceu dia desses) que projeta a borda da terra na face da Lua. Além disso, as embarcações que se afastam da Terra no horizonte, "vão para baixo" na linha do horizonte.
- Contudo, tomemos o exemplo da curvatura da crosta terreste. A distância do raio do centro da Terra, e a vasta extensão da área da superfície faz com que a curvatura seja tão pequena, tão pouco sentida, que chamamos de **SEMI-LINEARES** ou **QUASI-LINEARES**. Esse arco de curva vai parecer (e até se comportar) como uma reta, com um grau tosco de precisão. Quando estamos sobre a Terra, enxergamos uma fração tão delimitada que não podemos entender que a grandeza física da terra faz com que o ângulo = θ (theta) do raio da Terra projetado até a crosta é considerado "quasi-linear". A base de um prédio teria que ter quilômetros de base (largura e extensão da base) pra poder sentir essa curvatura. 
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/98979ac9-756d-4200-8be1-4827ceab274a)

___

## Espaço Vetorial

- Conjunto (C) que possui os Vetores como elementos. Não basta ter vetores, é necessário existir algumas "PROPRIEDADES" lá dentro.
- Se tivermos dois Vetores (a, b) pertencentes ao conjunto C, então o Vetor (a) + Vetor (b) também pertencem a C.
  - Vetor (a, b) ∈ C ⇒ (VetorA + VetorB) ∈ C
  - Para ser um **espaço vetorial**, preciso ter certeza de que SE DOIS VETORES PERTENCE AO CONJUNTO, TAMBÉM A SOMA DOS VETORES DEVE PERTENCER AO CONJUNTO.    
  - São chamadas de Operações de Fechamento. O Espaço Vetorial é um conjunto FECHADO para certas operações.
  - Se tiver um certo k pertencente aos números Reais, e tiver um certo Vetor A pertencente a C, tenho que ter certeza de que k * a pertence a C.
  - k ∈ ℝ, Vetor(a) ∈ C ⇒ k.Vetor(a) ∈ C  
- Ou seja, **o conjunto C é FECHADO em termos de Soma de Vetores e em termos de Multiplicação por Escalar** (isso é a própria definição de Linearidade Algébrica).
  - Se pegarmos uma função linear, pegando o  ƒ(a+b) = ƒ(a) + ƒ(b) e também ƒ(k.a) = k*ƒ(a).
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ec400c9f-332a-4cd7-b30d-4bd75f25aa42)

___

- Temos a reta dos números Reais ( ℝ ) que é nosso primeiro espaço vetorial.
- Temos a reta Real ( ℝ ) com uma origem ( 0 ). Módulo +a = |a|, módulo -a = |a| {a, se a >= 0 e -a, se a < 0}.
  - O Vetor(v) tem módulo 1 = |1|, em roxo.
  - O Vetor(t) tem módulo 2 = |2|, o módulo representa o "comprimento" do vetor, em amarelo.
  - Ambos os vetores estão na mesma reta suporte dos Reais ( ℝ ) sendo essa última a Direção (ℝ), e possuem o mesmo Sentido (Positivo, no caso).
  - Calculamos a SOMA DE VETORES através de um simples expediente: pegamos um dos vetores e levamos junto à origem do outro.
    - Um vetor se repete.
    - O outro vetor, terá o mesmo módulo, ou seja, o comprimento do deslocamento será o mesmo, no caso, Vetor(t) = |2| (pois 0->2), e repetiremos o |2| na nova posição (agora, 1->3).
    - A direção é uma só, pois a reta suporte da direção é a própria Reta Real ( ℝ ).
    - Como o sentido é o mesmo, somamos os módulos (os deslocamentos se somam, ao invés de subtrair se fosse sentidos opostos). O Sentido é o mesmo da Reta Suporte.
    - Qualquer dois (ou -n) vetores que você somar na Reta R, vai continuar na reta R.
  - Pois R é um conjunto unidimensional (só precisa de um número pra caracterizar o vetor (número positivo ou negativo), mas a reta é mesma da direção e o módulo dependerá de cada vetor).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/962f3785-b1fd-4a7e-8488-8be90a4ab8b5)
 
___

- 

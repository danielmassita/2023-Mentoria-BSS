# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

```https://youtu.be/mM5ngz2mBOg?si=6FWfzCyVw4S_I9eC```

___

## Matemática Discreta Aplicada à Programação - Aula 03

- Nessa aula, vamos abordar um tema importante que serão os **QUANTIFICADORES**.
- Numa sentença, eu atribuo uma quantidade de predicados pra uma determinada afirmação. Vamos ao exemplo:

### **Quantificador Universal**:
- Quantificador Universal - Na lógica de predicados, a quantificação universal é uma formalização da noção de que algumas coisas são verdadeiras para todas as coisas, ou para todas as coisas relevantes. O resultado é uma afirmação universalmente quantificada. Em símbolos lógicos, o quantificador universal (usualmente ∀) é o símbolo usado para denotar o universo de quantificação, informalmente lido como "para todo" ou "para qualquer".

-  **Todo A é B.**
    - Atribuímos a todos os elementos do conjunto A a propriedade B.
    - _"Todo homem tem pêlos no rosto."_ Essa frase é uma quantificação universal. 
      - Todo indivíduo da categoria A (homens); possuem a característica/propriedade B (pêlos no rosto);
      - Imagine o "conjunto universo" (amarelo) de todas as criaturas, e toda essa área em amarelo representa o conjunto ~B (não-B), cobras, lagartes, bichos, homens, etc... 
      - Conjunto B {pêlos no rosto}, representado em roxo/vermelho, que é um predicado, B {roxo/vermelho}.
      - Temos um "conjunto A" {homens} que ESTÁ CONTIDO dentro do Conjunto B, ou seja (A ⊂ B); e também sabemos que B CONTÉM A, sendo (B ⊃ A). Em Azul (conj. A).
      - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/9b6febee-15bf-4816-bbc9-b1d4d8c1e317)
      - Conj. A em azul são todos os homens; Conj. B em roxo são seres com pêlos no rosto; Conjunto ~B em amarelo, é o universo de seres.
  - **Sempre.** (Eu sempre passo na frente da loja quando vou ao cinema...) Se houver uma única vez em que fui no cinema e não passei na loja, a frase é falsa.
- **Sempre/Todo** > não existe ninguém/nada fora dessa condição... Ao falarmos de programação, não podemos ter ambigüidades (de várias interpretações, por exemplo "chupar a manga").
- O computador não saberá o que é o "objeto" manga, e portanto caberá a nós definir tudo e evitar ambigüidades. Não existe espaço pra exceção quando dizemos "sempre".

___

## Usando um Contra-Exemplo...

- Para provar teoremas, temos o Contra-Exemplo, a fim de tentar [com-]provar um teorema. Todo teorema é uma afirmação (verdadeira ou falsa), e tentamos comprovar...
- "Todo número primo é ímpar..."
  - Universo dos Números (em azul) > Conjunto dos Primos (vermelho) > Conjunto dos Ímpares (em roxo).
  - Números Primos estão contidos no conjunto dos Ímpares ( P ⊂ I ). Se I é ímpar, então ~I é par... MAS o número 2 é primo, e está fora do conjunto Ímpar (ponto vermelho, fora de ímpar, no universo).
  - Afirmação é **FALSA**: ~"_Todo número primo é ímpar..._"~
  - Nesse caso, o Contra-Exemplo do 2 acaba com a afirmação, pois é um número par - não-ímpar - e dois é primo: pois ( 2 ∉ I ) e também ( 2 ∈ P ).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1c363ec7-2152-4c4a-8e63-0230df4066d8)

___

## Silogismos e Aristóteles

- Aristóteles é contemporâneo de Platão (que foi o mais famoso aluno do Sócrates).
- Sócrates foi executado a tomar veneno (cicuta) acusado de corromper os jovens com sabedoria. A Maiêutica de Sócrates era uma metodologia de ensinamento usando perguntas, e vai perguntando cada uma das afirmações e tenta trabalhar com "contra-exemplos". A Maiêutica é uma série de ensinamentos que visava chegar a uma conclusão ou reflexão perguntando várias vezes ao interlocutor.
- A escola de Sócrates era a "Peripatética". Platão tinha uma escola chamada "Akademia" que falava sobre as universidades, sendo considerada uma das primeiras instituições formais de ensino no mundo.
- Platão era matematicista, acreditava que todas as relações do mundo, eram estabelecidas pela matemática/geometria. Na porta da Academia platônica tava escrita: "Não entre se não for geômetra!", e o Aristóteles era bom de pensamento mas ruim de matemática... E como não majava de geometria, ficou bolado e foi pra casa matutar... 
- Foi pra casa, e bolou uma série de textos "Organon" que nos ensina a pensar desde a base (Silogismo).
- Silogismo é composto por:
  - PM (Premissa Maior): "todo homem tem pêlos no rosto"
  - Pm (Premissa menor): "Carlos tem pêlos no rosto"
  - C (Conclusão): "Carlos é um homem"
- Esse raciocínio **não é válido**. Vamos pensar em conjuntos!
  - Universo de todas as criaturas > Conjunto P das criaturas com pêlos no rosto > Conjunto H dos homens.
  - H ⊂ P ⊂ U ("todos os homens" está contindo em criaturas com "pêlos no rosto" que está contido no "universo de criaturas"). A frase ("todo homem tem pêlo no rosto") é a Premissa Maior ( H ⊂ P ).
  - "Carlos tem pêlo no rosto" me permite concluir que Carlos é um homem? Não, podia ser meu chimpanzé de estimação, ou uma toupeira (dentro do conjunto P com pêlos no rosto, mas sem ser homem (H)).
  - Não foi afirmado que "apenas os homens têm pêlos no rosto", logo Carlos pode não vir a ser um homem, logo a Conclusão "Carlos é um homem" pode ser falsa (C).  
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/0fbe21a7-f7ed-4550-85cf-3fb9d77ddfbd)
- Aristóteles pegou todas as formas de silogismo (64 formas) e demonstrou que apenas 16 são válidas o tempo todo. E as demais podem levar a conclusões enganosas. E provou tudo isso na argumentação racional. 

___

## Kategorien (de objetos) no Organon, de Aristóteles

- PM (Premissa Maior): "Apenas os homens têm pêlos no rosto."
- Pm (Premissa menor): "Carlos tem pêlos no rosto." Aqui existe uma premissa particular (e não universal). 
- C (Conclusão): "Carlos é um homem." Aqui existe uma alteração considerável (universal -> particular) e a afirmação é verdadeira (pois usamos o termo "apenas"). 
  - Agora, o conjunto P = H ("Apenas os homens têm pêlos no rosto").
  - P = H, portanto se x pertence a P, podemos concluir que x também pertence à H.
  - ( P = H ), se ( x ∈ P) ⇒ ( x ∈ H )
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e008adcc-4869-40f5-883e-47482d5f0742)

___

## Quantificadores

- Todos, Sempre, Alguns, Nenhum...
- Estabelecem relações de CONTINÊNCIA ou PERTINÊNCIA dentro de determinados conjuntos, qualificando o assunto dentro de determinadas afirmações.
- 
- Afirmação Universal Negativa:
    - **"Nenhum elfo é orc."** Essa é uma _Afirmação Universal Negativa_!
    - Existe um conjunto (U) do universo das criaturas do Tolkien do Senhor dos Anéis. Existe a categoria dos Elfos (E) e também a categoria dos Orcs (O). Não existe intersecção.
    - Podemos representar frases através de conjuntos. Matemáticos pensam assim (e batem pino), mas muitas pessoas não pensam assim.
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/036ab88a-61e5-47ea-95b2-8d1c24297bdd)

___

## Exemplo com bozolóides...

- _"Todo terraplanista é ignorante"_ (frase em roxo)
- Categoria A: terraplanista, categoria B: ignorante.
- No universo (U) dos seres humanos, há um conjunto de pessoas que são ignorantes (I) e todo terraplanista (T) está dentro desse conjunto.
- x ∈ T ⇒ x ∈ I (se fulano é terraplanista, então isso implica que fulano é ignorante).
- Cada indivíduo de terraplanista está contida dentro da categoria de ignorante. É óbvio que podem ter ignorantes por outra razão, sem ser terraplanista (grande ponto vermelho).
- Relação da Frase usando o universo da Fala, passamos pra uma representação de Conjuntos (gráfica/visual) e ao final temos uma forma de representar Matematicamente.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/d8e16d8e-0e50-4460-8e00-2f1691218c77)

___

## Nos devaneios de loucura...

- _"Todo petista é ladrão"_ é uma frase que o gado adora usar...
- No Universo (U) dos seres humanos brasileiros, existe uma cateogira dos petistas (P) que está inteiramente contida dentro da categoria dos ladrões (L), segundo eles.
- Ora, se ( P ⊂ L ) todo petista está incluído na categoria dos ladrões, isso implicaria que se ( x ∈ P ) ⇒ ( x ∈ L ).
- Em vermelho, temos a categoria ~L (não ladrão). Basta pegar um indivíduo do conjunto U, sendo ~L (por exemplo o Ed, no caso Ed. Suplicy). O Ed é um indivíduo petista (y ∈ P ), mas que ( y ∉ L ) o Ed não é ladrão (~L), logo acabamos de comprovar outra afirmação FALSA dos imbrocháveis...
- Isso é um exemplo de demonstração. Uma maneira de falar de modo organizado, pensar de forma organizada...
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/343014f1-08d5-4858-a0f0-7c51a7d0b5cc)

___

## 

# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

```https://youtu.be/mM5ngz2mBOg?si=6FWfzCyVw4S_I9eC```

___

## Matemática Discreta Aplicada à Programação - Aula 03

- Nessa aula, vamos abordar um tema importante que serão os **QUANTIFICADORES**.
- Numa sentença, eu atribuo uma quantidade de predicados pra uma determinada afirmação. Vamos ao exemplo:
- **Quantificador Universal**:
  - **Todo A é B.**
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

- Para provar teoremas, temos o Contra-Exemplo, a fim de tentar [com-]provar um teorema. Todo teorema é uma afirmação (verdadeira ou falsa), e tentamos comprovar...
- "Todo número primo é ímpar..."
  - Universo dos Números (em azul) > Conjunto dos Primos (vermelho) > Conjunto dos Ímpares (em roxo).
  - Números Primos estão contidos no conjunto dos Ímpares ( P ⊂ I ). Se I é ímpar, então ~I é par... MAS o número 2 é primo, e está fora do conjunto Ímpar (ponto vermelho, fora de ímpar, no universo).
  - Afirmação é **FALSA**: ~"_Todo número primo é ímpar..._"~
  - Nesse caso, o Contra-Exemplo do 2 acaba com a afirmação, pois é um número par - não-ímpar - e dois é primo: pois ( 2 ∉ I ) e também ( 2 ∈ P ).
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1c363ec7-2152-4c4a-8e63-0230df4066d8)

___

- Aristóteles é contemporâneo de Platão (que foi o mais famoso aluno do Sócrates).
- Sócrates foi executado a tomar veneno (cicuta) acusado de corromper os jovens com sabedoria. A Maiêutica de Sócrates era uma metodologia de ensinamento usando perguntas, e vai perguntando cada uma das afirmações e tenta trabalhar com "contra-exemplos". A Maiêutica é uma série de ensinamentos que visava chegar a uma conclusão ou reflexão perguntando várias vezes ao interlocutor.
- 

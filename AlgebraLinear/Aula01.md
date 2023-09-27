# Programa de Mentoria BSS 2023
# Álgebra Linear

___

## Álgebra Linear - Aula 01

- A Álgebra Linear é um ramo da matemática que se concentra no estudo de espaços vetoriais, transformações lineares e sistemas de equações lineares.
- Ela desempenha um papel fundamental em várias áreas da matemática, ciencias, engenharias, sendo uma ferramenta essencial para resolver uma ampla gama de problemas. 

___ 

## Álgebra Linear será importante para:

- Fazermos operações com imagens, como rotações e translações.
  - > Arquivos de imagens gigantes, estratégias pra recuperar, comprimir, descomprimir, não lotar a memória do pc), gravar, rotacionar, verificar um tumor, através da tomografia, como um mapa 3D.

- Resolvermos problemas de otimização, como através do __Método Simplex__.
  - > Imagina uma fábrica com diferentes itens, diferentes custos, diferentes preços de vendas. Qual seria a melhor cesta de serviço, qual do produto A ou B deve ser priorizado pra otimizar a produtividade? Aí usamos o Método Simplex. 

- Entendermos melhor certas operações algébricas que podem ser úteis em vários ramos do conhecimento humano.
  - > Fenômenos lineares dentro de determinados escopos (mesmo os não-lineares, dependendo da perspectiva, como fenômeno local chamados de "quase-lineares").

___

## O que é uma Álgebra? 

- A palavra álgebra vem do árabe _"al jabr"_ que significa "reunião das partess quebradas".
- Na matemática dizemos que uma Álgebra é um terno, ou seja, a reunião de três coisas: um conjunto e duas operações que podem ser efetuadas sobre os elementos daquele conjunto, seguindo certas regras.
  - > O primeiro elemento é um conjunto + duas operações dentro. Um grupo e como um elemento interage com outro.

___

## Álgebra usual dos Números Reais < ℝ, +, x >

#### < ℝ, +, x >

1) Elemento Neutro Aditivo: `0 + a = a + 0 = a`
   - > Zero é um número real, que somado, não altera o outro fator. Krishna dizia que a matemática é um castelo de cartas de cabeça pra baixo, cada vez mais complexas (não complicadas). São regras que aprendemos no ensino básico.
2) Elemento Neutro Multiplicativo: `1 * a = a * 1 = a`
   - > Um fator que operado não altera o outro, o a continua o mesmo nesse caso da multiplicação.
3) Elemento Inverso Aditivo: `a + (-a) = (-a) + a = 0`
   - > Quando operamos um cara com o elemento A, vai resultar em um elemento neutro, no caso, o inverso aditivido de 3 seria -3, pois quando operamos eles o resultado é zero. No conjunto dos números reais, sempre existe um cara que somando com a, vai dar zero, no caso, -a. 
4) Elemento Inverso Multiplicativo: `a * (1/a) = (1/a) * a = 1`, com a != 0
   - > Um cara que eu multiplico por A, vai resultar em um elemento nuetro multiplicativo, no caso, resulta em 1. Nesse caso, existe CONDIÇÃO de a diferente de zero. Não existe divisão por zero. 
5) Comutatividade Aditiva: `a + b = b + a`
   - > A velha história de _"a ordem dos tratores não altera o viaduto"_ que falávamos no primário.
6) Comutatividade Multiplicativa: `a * b = b * a`
   - > A mesma coisa, só que na multiplicação. _"A ordem dos fatores não altera o resultado..."_ que também falávamos no primário.
7) Distributividade da Multiplicação sobre a Soma: `a * (b + c) = (a * b) + (a * c)`
   - > A multiplicação se distribui, o A se distribui sobre o binômio (B + C), sendo que resultará na distribuição da multiplicação que seria (A*B) + (A*C).
8) Associatividade Aditiva: `a + b + c = (a + b) + c = a + (b + C)`
   - > Em outras palavras, podemos colocar os parênteses onde quisermos, (A+B) + C é igual a A + (B+C). São apenas maneiras diferentes de descrever as operações, sendo mais fáceis de resolver problemas quando olhamos por outra ótica. Lembrando Carlos Dias, toda a história da matemática é uma questão de olhar de forma esperta e diferente pra entender e resolver.
9) Associatividade Multiplicativa: `a * b * c = (a * b) * c = a * (b * c)`
   - > Exatamente a mesma coisa da adição, sendo no caso uma escolha de qual operação vamos resolver primeiro pra poder trabalhar.
```
- O zero possui um papel diferente na multiplicação, transformando tudo em zero. Essas são propriedades de uma álgebra. O zero é um elemento "no potente" quando transforma todo mundo nele mesmo, no caso, em zero. 
- "A base sempre volta", muito importante e devemos retornar pro fundamento quando precisamos estudar. Propriedades numéricas do primeiro grau é melhor pra estudar do que os livros do Secundário ou Terciário.
- Na didática, devemos dar nomes aos bois (exceto se forem pro abatedouro, nesse caso, devemos salvar os bois! go vegan!).
- A idéia é fazer sentido e pensar _"aqui se encaixa o elemento neutro aditivo"_... 
- Álgebra é um terno.
```
___

## Condições de Linearidade 

- ƒ(0) = 0
- ƒ(a + b) = ƒ(a) + ƒ(b)
- ƒ(k * a) = k * ƒ(a)

- Use Alt+159 pra escrever o símbolo de Função ( ƒ ).

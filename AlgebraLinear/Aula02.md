# Programa de Mentoria BSS 2023
# Álgebra Linear

```https://www.youtube.com/live/lyaye5a7aMI?si=5lwSDz-xz4_ReW9v```

___

## Álgebra Linear - Aula 02

## Informações sobre a Plataforma

```
- Galera, o portal ainda não está no ar... Paciência, por enquanto, vamos de e-mail! ;) 
- Geração TikTok (ansiosa), bora com calma, a vida pede calma! Cronograma do curso só na plataforma. Aula de inglês será disponibilizada depois. Essa ansiedade de fazer 2x ou 3x a matrícula, não ajuda. Não precisamos de programadores desesperados. Ser programador é uma atividade que exige calma, pois é complexa. Se desesperar, vai errar. Precisa ser uma pessoa fria, calculista, cautelosa. A BSS trabalha com atividades médicas, não podemos ter erros - o controle individual também deve existir. Não é apenas aprender as disciplinas, mas sim se tornar uma pessoa profissional madura. 
- Programar é uma atividade que gera muita ansiedade. São +39 anos de software do Ed, entendam que é necessário calma, controle, maturidade. Todo início de projeto tem problemas, demoras, 1-2 meses apenas estudando e observando pra pensar em um código. Não é como o filme "Swordfish" e o hacker recebendo oral com um revólver na cabeça invadindo o site do Pentágono. É FANTASIA aquele programador que bate no teclado alucinadamente. Programador não é pago pra escrever código, mas sim achar SOLUÇÔES usando programação (compreender o problema, ler e estudar, buscar documentação, etc.)  
```

___

## Álgebra Linear - Aula 02

## Prolegômenos (A conversa que temos de ter antes de falar sobre um assunto...)

- Na última aula (01) aprendemos que uma álgebra é um conjunto unido por algumas operações em cima desse conjunto. Hoje, vamos compreender o lado do "linear".
- Definição Matemática do que é "ser linear":

  - A é um conjunto qualquer de elementos a ser trabalhado na álgebra
  - ℝ é o conjunto dos Reais

  - x,y ∈ A
  - c ∈ ℝ

  - ƒ é linear se atender ambas as propriedades:
  - ƒ(x + y) = ƒ(x) + ƒ(y)
    - > Dados dois elementos, vou calcular o valor da função na soma desses dois elementos, e será linear se a função calculada na ponta da soma (x+y) for igual a ela calculada isoladamente (x) e (y).  
  - ƒ(c * x) = c * ƒ(x)
    - > Se calcular o valor da função no valor de c * x, ou seja, se pegarmos o escalar (pra diferenciar do vetor x,y) de c, multiplicando o escalar c * ƒ(x). Se atender também essa propriedade, será linear. 

- Pro Piaget, o bebê tem uma fase inicial sensório-motora (o bebê pega a bola, esfrega a bola, cutuca a bola, empurra, aperta, etc.). Depois, ao final, temos um "estágio das operações formais", ali próximo de 16~20 anos, depende de uma abstração (contâiner da idéia de número).  

___

- Exemplo 1:

ƒ:ℝ → ℝ (conjuntos levado noutro)      
  ƒ(x) = 3x
  x → 3x (valor levado noutro valor)

ƒ(a + b) = 3 * (a + b) = (3a) + (3b)
ƒ(c.a) = 3 * (c.a) = c.3.a = c.ƒ(a)

**ƒ é linear!** Usar o termo "linear" é uma **definição**. Os elementos a, b, c são valores. O ƒ é uma função que opera valores.

- Função é uma operação que altera valores (no caso, ƒ(x) altera os valores para 3x). Transforma um número Real em outro número Real. Transforma os valores de x em um novo valor equivalente a 3.x, e assim por diante. A função f transforma um valor no triplo desse valor.
- Em linguagem de programação: uma função pega um valor (string), x é um parâmetro e o resultado será o valor final. Uma função que pega o nome completo (string), aplica uma transformação (split do primeiro nome), e transforma em um novo valor apenas com o primeiro nome.
  - > fun (x: Float) { return x*3 } 

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/cbcfb578-8221-45ac-ba4c-ebef7f666088)

- ƒ(a + b) = 3 * (a + b) = (3a) + (3b)
- ƒ(3 + 2) = 3 * (3 + 2) = (3 * 3) + (3 * 2) = (9)+(6) = 15
- ƒ(5) = 3.5 = 15

- ƒ(c.a) = 3 * (c.a) = c.3.a = c.ƒ(a)
- ƒ(4.2) = 3 * (4.2) = (3.4).2 = (4.3).2 = 4.(3.2) = 4.ƒ(2) = 4.(ƒ(2)) = 4.(3.2) = 24

___

- Exemplo 2 (nem toda equação de primeiro grau é linear):

ƒ:ℝ → ℝ      ƒ(x) = 3x + 1
  x → 3x + 1

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a11fd40c-1ccd-401d-8ae7-02eaf0aca7c3)

- ƒ(a + b) = 3.(a + b) + 1 = (3.a) + (3.b) + 1 = ƒ(a) + ƒ(b) + 1
  - ƒ(a) + ƒ(b) + 1 ≠ ƒ(a) + ƒ(b)

- ƒ(c.a) = 3.(c.a) + 1 = c.(3a) + 1 = c.ƒ(a) + 1
  - c.ƒ(a) + 1 ≠ c.ƒ(a)

**- ƒ não é linear!** Então, vamos ao ponto principal e mais importante: 

### **NEM TUDO QUE É LINHA É LINEAR!**

___

- Exemplo 3:
ƒ:ℝ → ℝ      ƒ(x) = 3x + 2
  x → 3x + 2
  
- ƒ(a + b) = 3 * (a + b) = (3a) + (3b) + 2 = 3.a + ƒ(b)
  - 3a + ƒ(b) ≠ ƒ(a) + ƒ(b)  
- ƒ(c.a) = 3.(c.a) + 2 = c.3.a + 2 = c3a + 2c + 2 - 2c = c.(3a+2) + 2 - 2.c = c.ƒ(a) + (2-2.c)
  - c.ƒ(a) + (2-2.c) ≠ c.ƒ(a)

**- ƒ não é linear!**
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/4c3a26ec-49f4-4722-a618-d5a4e9f8dc7b)

___

> **NEM TUDO QUE É LINHA É LINEAR! Toda função linear precisa passar por (x,y) = (0,0) quando for de grau 1 (o x está no máximo elevado ao grau 1; x¹)! Passando no ponto zero-zero, forma um espaço interessante que podemos trabalha, trata-se do _Espaço dos Vetores_. A função linear, mesmo mudando a partir da origem (zero-zero), girando a reta, continuará passando no eixo zero, então esse teste - para x de grau 1 - se faz rápido no teste em zero passando na origem.**

- Nem tudo que forma uma linha é linear.
- No Exemplo 2, temos uma "função afim", que é linha mas não é Linear.
- No Exemplo 3, temos uma "função afim", idem.

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/90463b44-d5b4-4d74-8691-da0318c101b9)

- ƒ(x + y) = ƒ(x) + ƒ(y)
- ƒ(c.x) = c.ƒ(a)

- ƒ(x + y) = ƒ(x) + ƒ(y)
- ƒ(c.x) = c.ƒ(a)
  - ƒ(0.a) = 0.ƒ(a) = ƒ(0) = 0 (condição «sine qua non»)

- _"Um polinômio de grau um (se o máximo expoente de x = x¹) que passa pela origem é linear (ƒ(0) = 0), tem de levar o ponto zero no zero. Se não acontecer, não é uma função linear."_
- Também veremos isso em Matrizes, por exemplo!
- A vida não é uma corrida de 100m rasos. Calma, coração!
- Vamos repetir isso muitas vezes!

FIM! 


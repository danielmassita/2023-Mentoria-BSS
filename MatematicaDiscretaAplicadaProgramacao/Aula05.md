# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

``` https://www.youtube.com/watch?v=wRkE2HEcuFk ```

___

## Matemática Discreta Aplicada à Programação - Aula 05

- Hoje vamos falar de **Tabelas de Decisões**.
- Retomando a última aula, abordamos um tema importante que foram os Quantificadores, Silogismos, Proposições (cálculo proposicional)...
- Estamos caminhando e vindo de um entendimento de uma lógica baseada em cálculos, e hoje vamos precisar compreender as TABELAS DE DECISÕES.
- Nem sempre, as expressões que nós usamos pra fazer cálculos lógicos são simples (tipo A e B, A ou B, A exclusivo B, etc.)...
  - ``` A ∧ B ```, ``` A ∨ B ```, ``` A ⊕ B ```
    - ``` A ∧ B ``` é True somente se A = True, B = True.
    - ``` A ∨ B ``` é True se, ou A=True, ou B=True
    - ``` A ⊕ B ``` é True quando A e B são opostos, True/False, A ≠ B, A != B, A=True/B=False, A=False/B=True
    - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/e1d11b08-45d0-4aa9-8846-02152bad5feb)
&nbsp;
- Quando as coisas começam a ficar mais complexas, precisamos recorrer à uma Tabela de Decisão.

___ 

### Tabela de Decisão

- Imagina que tenhamos agora uma expressão lógica com 3 proposições (A, B, C). ``` A ∧ B ∨ C ```
  - A = Gatos tomam banhos.
  - B = Cachorros Latem
  - C = Gatos Miam
- Como podemos saber o resultado desse "cálculo final"?
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/67b42a0a-2573-4283-91bc-bbcde34c4057)
&nbsp;
- Vamos usar a Tabela de Decisão. É uma maneira de ligar essas expressões, de uma forma coerente.
  
  | A | B | A ∧ B | C | R |
  | --- | --- | --- | --- | --- |
  | ✅ | ✅ | ✅ | . | . |
  | ❌ | ❌ | ❌ | . | . |

- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/be89b913-8cfd-45dc-8188-7177189dee46)
- Temos para o valor de A, B e C as possibilidades de serem True/False. Logo,
  - para A=True, podemos ter B=True/B=False
    - para B=True, podemos ter
      - C=True
      - C=False 
    - para B=False, podemos ter 
      - C=True
      - C=False
  - para A=False, podemos ter B=True/B=False
    - para B=True, podemos ter 
      - C=True
      - C=False
    - para B=False, podemos ter
      - C=True
      - C=False
&nbsp;
- Sendo assim, teremos...
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/3a2ef9ab-0b0c-4c1f-a254-e876aaa67270) 
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5cc53ba4-826d-4eb0-986a-7083acde1a0a) 17:30
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1840aacb-fa43-4b18-bb27-50f544a74398) 21:03
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7bef6319-c554-41f4-acd1-3aac3f4becd5) 25:03
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c110a9bf-1ec6-4921-8966-ae9ed3af11e6) 29:01
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/28486161-c9bb-4bec-bf7e-2502211a30dc) 32:00
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/3751752b-9f28-40cd-86a7-f5e2e7e24071) 33:50
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/6de0c328-6aa0-4200-99be-b7b4af6f8372) 38:08
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/f611a65a-516f-45ee-93f3-3bf6db621a72) 42:10
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7e24e665-1977-47c1-be92-980058f4d135) 50:14
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/a534f4cc-3dab-449f-97ba-5c6993ef1d0c) 57:51
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/97cfa544-8caf-401e-9612-42d5f3c4931b) 01:01:04
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5309ae17-1c45-458a-8647-6a8bc6beb581) 01:06:38
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/15e1edcc-74b1-4c0f-a0df-487984aff5d1) 01:08:49
  - 

___

### Portas Lógicas (Eletrônica) e Álgebra Booleana

- Essas tabelas possuem uma utilidade incrível na avaliação de expressões complexas.
- Podemos construir tabelas (ou mesmo excel, com funções) pra fazer tabelas com expressões complexas.
  - Por exemplo, imagine que tenham que calcular algo do tipo: ``` (A ∧ B) ⊕ (C ∨ D) ⊕ E ```
  - Consideremos que temos 2^5 possibilidades (2 * 2 * 2 * 2 * 2 = 32), tipo o jogo 2048 (jogo tipo puzzle, é uma base 2 exponencial).
  - Seria uma árvore com 32 colunas, sendo que:
    - Seriam Verdadeiro e Falso pro A, Verdadeiro e Falso pro B pra cada A, Verdadeiro e Falso do C pra cada B, Verdadeiro e Falso do
- Existe um conceito mais complexo chamado **REDUÇÃO DE TABELAS** que não iremos estudar agora pra não zuar o cabeção.
  - Essa expressão acima é equivalente a uma expressão mais simples, usando algumas estratégias pra torcer a lógica e escrever de maneira mais simples e reduzir a tabela. Essas expressões são usadas muito na _ELETRÔNICA_, sendo que existem formas/fluxogramas que correspondem à circüitos elétricos.
  - Gabriel Luis - Portas Lógicas na Eletrônica - https://youtu.be/vCeX-y9RBR0?si=zkn9WRS1jJ0THa_2
  - Boole é (1815-1864) o propositor dessa Álgebra Booleana (foi meio desacreditado como matemático, morreu cedo, só foi reconhecido depois).
  - ![Uploading image.png…]()











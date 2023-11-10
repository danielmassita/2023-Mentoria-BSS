# Programa de Mentoria BSS 2023
# Matemática Discreta Aplicada à Programação

``` https://www.youtube.com/watch?v=wRkE2HEcuFk ```

___

## Matemática Discreta Aplicada à Programação - Aula 05

- Hoje vamos falar de **Tabelas de Decisões**.
- Retomando a última aula, abordamos um tema importante que foram os Quantificadores, Silogismos, Proposições (cálculo proposicional)...
- Estamos caminhando e vindo de um entendimento de uma lógica baseada em cálculos, e hoje vamos precisar compreender as TABELAS DE DECISÕES.
- Nem sempre, as expressões que nós usamos pra fazer cálculos lógicos são simples (tipo A e B, A ou B, A exclusivo B, etc.)...
  - ``` A ∧ B ```, ``` A ∨ B ```, ``` A	⇔ B ```
    - ``` A ∧ B ``` é True somente se A = True, B = True.
    - ``` A ∨ B ``` é True se, ou A=True, ou B=True
    - ``` A	⊕ B ``` é True quando A e B são opostos, True/False, A ≠ B, A != B, A=True/B=False, A=False/B=True
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
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/5cc53ba4-826d-4eb0-986a-7083acde1a0a)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/1840aacb-fa43-4b18-bb27-50f544a74398)
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/7bef6319-c554-41f4-acd1-3aac3f4becd5)
  - 




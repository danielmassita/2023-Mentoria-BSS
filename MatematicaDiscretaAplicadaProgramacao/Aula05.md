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
- Vamos usar a Tabela de Decisão. É uma maneira de ligar essas expressões, de uma forma coerente.

| A | B | A e B | C | R |
| --- | --- | --- | --- | --- |
| True | True | True | . | . |
| False | False | False | . | . |

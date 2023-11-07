# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

```https://www.youtube.com/live/wSoOUzOdR2k?si=zClLvZXXlVnxPGRZ```

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 05

- Na aula passada, começamos a falar sobre **Estruturas de Controle**, com uso do PORTUGOL.
  - Falamos de outros temas como Linguagem Tipada, L. Não-Tipadas, Atribuição (=), Igualdade (==), Igualdade Estrita de Tipo (===);
- Abordamos o FAÇA/ARMAZENE (declaração de variáveis), SE (IF), o ENQUANTO (WHILE, teste na cabeça pode nem ser executado), REPITA (REPEAT, teste no pé pode ser executado ao menos uma vez).
  - Atualmente, existem tantas tecnologias e updates que acontece de surgirem novas tecnologias antes mesmo da gente conseguir aprender a usar a versão antiga. Isso também gera um grande problema de versões de softwares, como também como fabricação de hardware para não liberar todo o potencial da tecnologia, pra evitar criar uma defasagem muito grande de tecnologia em curto espaço de tempo (criando uma competição por preços/tempos).
  - Conceito de: "Custo Marginal" de prdução de um item qualquer, podendo baratear drasticamente o preço (tipo um processador i3) pois, após a linha de investimento ser atingida.
  - O Ed só muda de versão um sistema (Node 14 para Node 18) quando existem NOVAS funcionalidades que são necessárias. Já existe o Node 20, mas como não há novas funcionalidades não vale a pena acompanhar cada novo lançamento na TI.
  - Custa, em média, 3 mil reais pra xingar o Jair (Fundo Xingamento do Jair).

&nbsp;
- Retomando a **ÚLTIMA AULA**:
  - IF (SE)
  - WHILE (ENQUANTO)
  - REPEAT (REPITA)
  - GOTO (VÁ PARA) - essa sintaxe cria códigos confusos e tende a ser cada vez menos utilizada ("Simplicidade ou Morte") 
&nbsp;
&nbsp;

- Estatísticas no mundo de gerenciamento de projetos:
  - 25% dos projetos de TI falham (não entregam nada ao final)
  - 25% desse recorte já nascem defasados, ou seja, muitos dos projetos de TI, dado seu tempo de elaboração;
  - 50% dessa razão não são amplamente rentáveis, ou seja, seus ganhos não excedem amplamente seus custos de implementação;
- Onde as empresas ganham muito em TI (crimes de Elizabeth Holmes dentro da Theranos)? Com investidores, rodadas de investimentos, **VENDENDO IDÉIAS**, e não os produtos.
  - Google Wave, com +10 bi USD foi descontinuado após 3 anos.
  - [DICA DE VÍDEO [EN subs]- _"interviewing in a startup be like..."_ - Joma Tech
    - https://youtu.be/314OLE6mKOo?si=SCrrQkP9MpUhQDR8&t=256
  - https://www.blackscorpion.blog/2023/10/simplicidade-ou-morte.html
  - **NÃO PROGRAMEM PENSANDO NA PROGRAMAÇÃO!**
  - A fase de programação de um sistema, é realtivamente curta. A fase problemática é a manutenção. Exemplo, com 8 meses de projeto, implementado e durante 5 anos no mercado, esse produto terá consumido quase 7x o tempo de desenvolvimento da manutenção. Se a manutenção foi mal feita, isso vai dar problemas em escalas crescentes. Temos de ter essa visão do todo, como parte da nossa "mentalidade".

&nbsp;
___

### PARA (FOR)

- Estrutura de Controle para uma quantidade conhecida de casos, quanto sabemos "índices" conhecidos de casos.
- Função recebe três PARÂMETROS:
  - Primeiro parâmetro é uma **variável de controle**, em geral inteira (int: i=0);
  - Segundo parâmetro é um **teste booleano** TRUE/FALSE (i < 100);
  - Terceiro parâmetro é um **"incremento"** (i = i + 1, ou no JavaScript j++);
- No caso do PORTUGOL, vamos fazer assim:
  ```portugol
  PARA (  parâmetro_1  ;  parâmetro_2  ;  parâmetro_3  ):
      script interno 1
      script interno 2
      script interno 3
      ...
  ```
- Por exemplo:
  ```portugol
  PARA (i=6; i<100; i=i+2):
    IMPRIMA i
  ```
- Teremos um script que percorre em loop (PARA/FOR), definindo a variável contadora como 6, repetindo a ação enquanto i < 100, e percorrendo/atualizando os números pares (no caso, o incremento é de 2 em 2).
  - A variável de incialização será i = 6, valendo 6;
  - O teste será i<100? Sim, atualmente i = 6, então para teste TRUE, entramos no bloco de código indentado;
  - Vamos imprimir em tela o valor de i, no caso, vamos apenas imprimir o número 6;
  - Ao final do script, vamos para o incremento, adicionando i=i+2, ou seja, aumentando +2 no valor da variável, e agora i = 8;
  - Repete o loop...
  - Até que i = 98, teste = TRUE, entra no código e imprimte "i" 98, ao final adiciona +2;
  - Até que i = 100, teste = FALSE, NÃO ENTRA no código e não imprime nada.
  - A variável i já vale 100, porém o valor não será impresso, e nem incrementado. Ao final, o script termina.
- Usamos a estrutura PARA (FOR) de repetição, quando conhecemos a faixa de valores e o incrmento.
- ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/ff013d96-c85d-48c7-bafe-088c2fe37619)

___

### Dúvida de alunes...

- DÚVIDA: _"No caso, o i carrega o 6. Quando ele desce no código, para o comando "IMPRIMA", ainda tá o 6? (sim!) Depois de imprimir, que é atualizado o valor (i=i+2)? (sim!), qualquer coisa a ser realizada dentro do bloco só seria realizada com o valor de 6, e só ao final do bloco que acontece o INCREMENTO e depois volta pro loop inicial? (sim!)"_
  - Sim, para todas as dúvidas. A idéia é seguir os 3 parâmetros (inicialização; controle; incremento).
- O FOR tem uma tendência de ser "REDUZIDA" (ou eliminada?), por várias razões, sobretudo por **TER UMA PERFORMANCE RUIM**.
  - Quem já programa, sabe o que é o "LINTER" (é uma espécie de checagem de sintaxe que usamos pra ver se a sintaxe está válida, se as construções são verdadeiras, bem elaboradas e etc.).
  - O "LINTER" do Ed começou a eliminar a necessidade de usar "for", sendo mais customizado para o uso específico.
  - ![image](https://github.com/danielmassita/2023-Mentoria-BSS/assets/111195175/c0ca24d7-1a68-48c9-9b5c-c80f8c25d301)
  - Podemos fazer a mesma coisa, usando ENQUANTO:
    ```portugol
    i = 6    
    ENQUANTO (i < 100) {
        IMPRIMA i
        i = i + 2
    }
    ```
  - Podemos inicializar uma variável FORA do loop, o que é positivo, pois podemos usar uma variável que já estávamos trabalhando (e não uma nova).
  - Outro problema comum, dentro do PARA, que acaba gerando uma situação esquisita, é quem escreve assim: 
    ```portugol
    PARA (i=0; i<0; i++) {
        IMPRIMA i
        i++
    }
    ```
  - Ao final, não fica claro o incremento, o objetivo do incremento fica AMBÍGUO.
  - Podemos usar um i+2, i+3, etc. Mas a variável de controle é alienígena, foi criada só pra fazer o loop e perdemos "readibility". A variável "FOR", em termos de PERFORMANCE, tem sua estrutura de maneira que DEMANDA mais operações do processador do que o ENQUANTO. Por isso, tentamos EVITAR. 
  - Cuidado com CODERS VIOLENTOS, que no momento do "code review", fica boladão. Temos que aprender, pra no futuro, reduzir a merda que escrevemos (regra dos 6 meses).
  - **REGRA DOS 6 MESES:** Se você (daqui a 6 meses) retornar a ler um código que você fez, e não achar problemas/criticá-lo, <ins>então você não evoluiu NADA nesse período.</ins> Nessa indústria, ficar 6 meses sem aprender algo é uma perda. É igual a perda de tempo de "guerras das linguagens" ou "space vs. tab". Tudo depende do contexto. Tem coisas que o Ed só faz em Ling. C, C++ (sistemas embarcados), mas jamais faria em JavaScript. Em outras situações, cada desenvolvedor fará o balanço entre prós e cons. Por exemplo, recentemente o próprio Ed redescobriu novas formas de usar o GraphQL.

___

### CASO (case, switch, switch-case)

- A estrutura CASO recebe uma variável como parâmetro, e o script vai executar o bloco de código, acaso a variável seja TRUE.
- Exemplo de código, para um momento de login, acaso o meu papel no sistema seja cadastrado como "user" normal, vou ter acesso a um determinado bloco de código. Acaso o meu papel seja como "admin", terei acesso a outro bloco de códigos. Acaso meu papel seja de "super", terei outras linhas de código, e acaso seja "outros" eu terei acesso somente a outras funcionalidades:
  ```portugol
  CASO(PAPEL) {
      "USER":
          IMPRIMA "Esse perfil tem acesso de 'user'."
      "ADMIN":
          IMPRIMA "Esse perfil tem acesso de 'admin'."
      "SUPER":
          IMPRIMA "Esse perfil tem acesso de 'super'."
      "OUTROS":
          IMPRIMA "Esse perfil tem acessos limitados e/ou inválidos."
  }
  ```
- Esse uso, em JavaScript é conhecida como "SWITCH", e teremos uma variável:
- Vamos entender o código abaixo. Pegamos a variável "user.role" que é o papel da pessoa habilitada dentro do sistema. Se essa variável (como STRing) for "student", eu vou chamar a função "ExibirMenu1()". Se, no caso, o papel for "admin", vou ativar a função "ExibirMenu2()", se o acesso do perfil for "super", vou chamar a função "ExibirMenu3()". Em última hipótese, se nenhum desses "casos" forem ativados, vou retornar como padrão uma estrutura de erro (aqui no exemplo, throwError() que vai dar outra destinação pro código.)
  ```javascript
  switch (user.role) {
      "student":
          exibirMenu1()
      "admin":
          exibirMenu2()
      "super":
          exibirMenu3()
      default:
          throwError()    
  }
  ```


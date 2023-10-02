# Programa de Mentoria BSS 2023
# Lógica de Programação, Algoritmos e Estrutura de Dados

___

## Lógica de Programação, Algoritmos e Estrutura de Dados - Aula 01

- LP_A_ED é, possivelmente, a disciplina mais vasta que estudaremos, em termos de conteúdo.
  - > Talvez uma das mais importantes, pois basicamente, seria a matéria "core" mais ampla e necessária em outras áreas. Mesmo fraco em matemática, talvez não pegue projeto de processamente de imagens. Mas se souuber LP_A_ED existem outros projetos de programação que podem ser designados.
  - > Mensagem sobre "Medo de matemática..." calma, não desespera, existe um certo ritmo, uma toada no caminhar... Se disponibilizar tudo ao mesmo tempo, não funciona... Matemática é sobre TREINAMENTO! ;) Em 52 semanas, só tivemos 1... Calma, galera! A vida não é 100m rasos, mas sim uma maratona...    
- Nela aprenderemos como são estruturados logicamente os programas de computador, aprenderemos a elaborar e avaliar algoritmos e a escolher os melhores modos de organizar os dados que usamos.
  - > LP_A_ED é essencial para TODO BOM PROGRAMADOR! 

___ 

- Na parte de Lógica da Programação nós vamos aprender como é o fluxo de execução de um programa de computador, como funcionam os testes e os loopings.
  - > Interessante entender que quando escrevamos um programa numa linguagem de programação, estamos falando uma "linguagem de alto nível" criada (JavaScript, Java, Python, Ruby) pra facilitar nossa comunicação com a máquina, com instruções "traduzidas" por um Compilador ou Interpretador (linguagens Compiladas vs. Interpretadas).
  - > Compilador é um programa que pega sua linguagem e transforma em código que um computador entende. Depois executa o código gerado. E no final, na linguagem Interpretada, é como um compilador online que ao mesmo tempo executa e traduz. Não é linguagem binária, é o oposto (linguagem binária é da máquina). Por exemplo, JavaScript acontece no browser ou no Node.JS, lendo as linhas do código, transformando em instruções binárias que vão pra CPU do computador... E assim que a coisa funciona... OU compilador faz isso previamente, gera código executável, OU usa interpretador à medida que lê o programa linha-a-linha...
  - > Exemplo da "telefonista" que ligava os fios das ligações. Pra re-fazer um processo, teria de começar tudo de novo. Essa época era parecida com a binária. Depois, historicamente, vieram os "Assemblers", linguagens simplificadas mais próximas da máquina que da humana, mas começava a facilitar a vida do programador. Finalmente, vieram as "linguagens de alto nível" (JS, C, Java, Py, Ruby) pois estão mais próximas da linguagem humana do que da máquina... Mas nesse nível, preciso de Compilador OU Interpretador (ou, no caso do Java, uma "máquina virtual" que traduz virtualmente um código pro computador).  
- Vamos aprender o que funciona bem e o que não funciona bem entre as diversas opções de controle de fluxo que as linguagens de programação oferecem.
  - > Linguagem de máquina era problemática, pois era específica pra um único computador (mainframe IBM 370), só serve pra aquela máquina que tem uma estrutura de processador e memória específicos (tipo, não podia mandar pra um PDP-11, outra fabricante, haveriam problemas). Foi "abandonada" pois era ruim para as empresas, um grande trabalho de re-escrever os programas quando mudava a máquina.

___

## (Na parte de Lógica da Programação...)

- Seqüência
- Condição (Decisão):
  - E.g.: if, else, elif
  - > Existem outras formas de se dizer, dependendo da linguagem, mas a sintaxe exclusiva de cada linguagem podem ser aprendidas em um tempo menor, o importante é entender a lógica, a sintaxe a gente adequa conforme a necessidade. 
- Repetição (Loop):
  - E.g.: for, while, repeat
  - > Executamos um mesmo trecho de código pra vários casos separados, imagina um processamente de um banco de dados de cobranças, saber se fulano de tal comprou e tem o pagamento recebido. Selecionamos uma pessoa, verificamos se pagou, se não, manda carta de cobrança, verifica próxima seleção de outra pessoa... Repetindo o mesmo processo pra um grande número de dados. Mesmo "trechinho" de código, pra várias pessoas diferentes. Inicialmente vamos usar "pseudocódigo" pra não bagunçar as linguagens. 
- Seleção (Switch/Case):
  - E.g.: switch
  - > Quando temos vários trechos de códigos diferentes, e eu dependo de um valor, alguma coisa, pra saber qual trecho de código vou executar. Por exemplo, a lista de pagamentos: marcamos uma variável chamada "pagou", e lá embaixo no códoigo, SE tem um "pagou" no registro, madar carta de parabéns. SE "não pagou" execute outro código e mande uma carta de cobrança. Ao final, temos um código que é condicionado, que vai ser executado dependendo de um certo valor de uma variável. 
- Exceção (Try/Catch):
  - E.g.: try, catch, finally
  - > Programação defensiva, assim como direção defensiva. Todo código está sujeito à exceções, não são erros, mas situações nas quais o código gera erros/situações excepcionais aconteceram. Por exemplo, rodando um programa na web, mas meu BD está em outro servidor (num VPS alugado na hostinger). Se minha internet cair, minha "requisição" não volta com a resposta, pois quando eu fiz o pedido de dados, a resposta antes de voltar, caiu. O programa fica parado, esperando... Os protocolos tem um "tempo de decurso" (decurso de prazo). Dentro de 60 segundos, por exemplo, se não tiver resposta, o programa quebra (break). Se eu pedi um determinado valor de dados no BD, ele tentou responder, mas não chegou a finalizar a resposta, após 60 segundos vai levantar uma exceção. Requisição foi cancelada por decurso de prazo. Se eu não tratar a situação excepcional, meu problema pode quebrar. Se é meu programa, sem problemas, mas se o programa é pra outro usuário, não podemos deixar quebrar. Tente obter uma resposta, se não chegar, haverá uma condição de erro, se tiver, tem o catch pra pegar, e aí fazemos alguma coisa pra contornar o erro e o programa não quebrar na cara do usuário. 

___

## (Na parte de Algoritmos...)

- Na parte de Algoritmos veremos técnicas heurísticas para elaborar um bom algoritmo, aprenderemos a expressar esse algoritmo em pseudolinguagem antes de tentar escrevê-lo em uma linguagem específica.
  - > _"Heurística"_ vem da mesma raiz em grego de "eureka", quando Arquimedes peladão saiu correndo após entender o deslocamento do volume da água na banheira. Criou máquinas de guerra e também refletiu e solucionou um problema do rei de Siracusa. Refletir, pensar, não é rápido, leva tempo, calma com a ansiedade... Exemplo do teorema na faculdade que levou 6 meses pra ser provado... ;)
  - > Existem várias formas (e algoritmos) pra solucionar um problema, mesmo problema, 100 programadores, possíveis 100 soluções diferentes. Umas certas, outras erradas, umas melhores, outras piores (em termos de eficiência)...    
- Veremos também como avaliar o nível de complexidade de um algoritmo usando o chamado "Big O" (notation).
  - > No exemplo, dois programadores com dois scripts diferentes, farão scripts mais ou menos eficientes, em questão da Ordem de Grandeza (Big O).

___

## Big O Notation:

- O(1)
  - > Complexidade constante, 1 registro ou 1 milhão vai rodar no mesmo tempo de execução.
- O(log n)
  - > Ordem de grandeza na casa do logaritmo, no caso, pra 10 casos, um tempo 1, pra 100 casos, um tempo 2, 1000 casos, um tempo 3... 
- O(n)
  - > Se eu der um caso, vai ter tempo 1, se eu der dez casos, vai ter tempo 10, se eu der cem casos, vai ter tempo 100...
- O(n log n)
  - > Ordem de grandeza Quase Linear, em n.log n, até aí, tudo bem... Qualquer ordem acima, é complicado, complexo, custoso... heheh   
- O(n²)
  - > Ordem de grandeza quadrática, com 1 registro pra processar, tempo 1. Se há 2 registros, o tempo é 4. Se há 3 registro, tempo 9. Se 100 registro, tempo 10.000. Proporcional ao quadrado.  
- O(2^n)
  - > Ordem exponencial, ainda pior, se apenas 1 registro, o tempo é 2. Se forem 2 registro, o tempo é 4. Se forem 3 registros, o tempo é 8 (ainda melhor que anterior). Mas se forem 4 registros, o tempo é 16. Se forem 10 registros, o tempo é 2^10 que é 1.024. Vish!

- O objetivo/desafio do algoritmo será reduzir a Ordem de Complexidade àquela mais eficiente, sem perder qualidade. Com processamento de imagens na BSS, se eu pegar uma tela básica (1024px por 768px, tela VGA padrão). São 786.432 pontos na tela. Imagine, um algoritmo que funciona na ordem de n, pra cada 1 ponto processado, 1 tempo usado. Imagina um algoritmo na ordem do quadrado (786.432 x 786.432 = 618.475.290.624, 618 bilhões, 475 milhões, 290 mil, 624 unidades, de pura diversão! hahaha, no caso de pontos) Um bilhão de segundos são 32 anos.
  - > A conta do bilhão de segundos não é de cabeça! É um número chave pra entender a DESIGUALDADE E LUTA DE CLASSES, pra você que defende bilionários... ;)

___

## Comentários (alunos inclusive)...

- Um dos maiores problemas ao lidar com programas de computador está em escolher adequadamente as estruturas para representar os dados usados.
  - > Imagine, um conjunto de informações sobre uma pessoa (nome, sobrenome, e-mail, senha, autorização, papéis e níveis, ...
  - > CALMA CORAÇÃO, meu querido, calma que surgirão projetos práticos sim! ;) Não precisa adivinhar, o Ed realmente não gosta de adivinhação (coitada da Sibila Trelawney...), mas não se desesperem só com a teoria. Vamos com calma! Vamos trabalhar com projetos e tarefas! ;) Casos possíveis e pensados no método para que se possa aprender! Serão aulas por tópicos durante a semana: Segunda tem Inglês (prof. Daniel). Terça tem Álgebra Linear. Quarta tem Lógica de Programação, Algoritmos e Estrutura de Dados. Quinta tem Estatística e Ciência de Dados. Sexta tem Matemática Discreta. Nas sextas-feiras, também, haverá na Área do Estudante uma Lista de Exercícios (pra baixar), podendo nos exercitar com as Listas de Exercícios. Não é só saber que acha. Não vale ter "uma opinião sobre tudo". SABER é quando se Estuda E Faz. De fato, aprenderemos a programar programando. MAS PRECISAMOS ter teoria, base sólida, fundamentos, eficiência. A teoria só funciona se aplicarmos na prática.
  - > Imagine, um conjunto de informações sobre uma pessoa (nome, sobrenome, e-mail, senha, autorização, papéis e níveis, data nascimento, ...). Como eu organizo de forma ideal? Como eu estruturo meus dados? Como coloco de uma maneira compreensível, simples, fácil?      
- Uma má escolha de estrutura de dados pode complicar imensamente o algoritmo correspondente, inclusive gerando programas com péssimo desempenho. 
  - > Por isso, devemos estudar a Estrutura de Dados, que é a maneira como eu organizo meus dados pra poder processá-los de maneiras simples. Cada problema, uma maneira de estruturar os dados pra poder ressolver o problema. Várias estruturas...

___

## Estruturas de Dados

- Array & Matrix
  - > É uma lista indexada. Primeiro elemento, segundo elemento. Algumas situações, não precisamos ordenar por número, apenas saber se está no conjunto ou não está no conjunto... Daí usamos um "set".  
- List
  - > Lista encadeada, lista duplamente encadeada, lista reversa...
- Queue (FIFO - First In, First Out)
  - > Apache Kafka é uma fila, cria um tópico primeiro, atendido primeiro, segundo-segundo (sistema de mensageria, comentário)... Outro exemplo, a fila do banco, quem chega primeiro é atendido primeiro. Quem chega segundo é atendido segundo.
- Stack (LIFO - Last In, First Out)
  - > Lavando pratos em casa, colocamos um sobre o outro, sobre outro... Na hora de enxaguar os pratos, pegamos o primeiro e não o mais abaixo na pilha (mais pesada). Tiramos três pratos de cima-baixo (estrutura LIFO).  
- Tree
  - > Sistema de dependências (essa possibilidade gera duas, que por sua vez gera mais duas cada). São raminhos, uma estrutura de árvores. Curiosamente, pra navegar dentro das árvores, usamos Stack. Quando temos várias soluções na forma de uma Árvore, uso uma estrutura Stack (LIFO), pra trabalhar. Em 1216, como sair de labirintos, por Everardo de Sevilha.    
- Graph
  - > Estrutura matemática (bolinhas = nós) e linhas (ligando os nós). Como organizar, definir prioridades, quais nós estão nos mesmos níveis. Essa estrutura usamos muito na gestão de processos chamada PERT-CPM (Program Evaluation and Review Technique, Critical Path Method), como se tivesse milhares de atividades num projeto, algumas atividades dependem de outras. Algumas são Concorrentes, outras são Paralelas, outras são Dependentes. Devemos organizar as atividades de acordo com o Grafo.    
- Hash Table
  - > Quem usa AWS pra armazenar imagens (buckets), tem um serviço de Storage (S3), esse serviço se organiza na forma de Hash Table, possui um bucket, identificado por um Hash. O serviço S3 da Amazon é um Hash Table.    
- Set
  - > Verifica se há um conjunto, no sentido matemático (pertence e não-pertence). Apenas precisamos saber se um elemento está ou não num conjunto. Por exemplo, vários papeis na mentoria (admins, estudantes, etc.), não preciso saber cada detalhe, é apenas uma relação de pertinência (tem ou não). 
- Heap
  - > É uma "stack" de cabeça pra baixo. Curiosamente, a memória é organizada em Stack e Heap. No Stack eu coloco Chamdas de Funções (função A, chama função B, que chama função C). Cada nova chamada, armazeno em uma nova pilha (stack) no endereço de quem chamou. Logo, a pilha vai crescendo...
  - > E acima, no Heap, temos variáveis. Quanto mais variáveis eu crio, mais eu desço na pilha. Às vezes, com pouca memória, há colisões entre Stacks e Heap que se batem (área da memória de criar novas funções esbarrou na área de criar novas variáveis). Quando isso, temos um Stack-Overflow (transbordou, ultrapassou o limite de tamanho), um fórum famoso pra buscar soluções. Por exemplo, um programa recursivo sem condições de saída, chama ele mesmo infinitamente, até travar...     

- > Vamos entender todas essas estruturas, logo, talvez esse seja o curso mais importante da nossa mentoria. Veja, se você não aprender Álgebra Linear não trabalhará com processamento de imagens; se você não aprender Matemática Discreta, não trabalhará com processamento de imagens; Mas se não aprender LP_A_ED, não trabalhará com Programação nunca...
- > Valeu galera do chat, valeu quem cooperou! Bora! 

FIM!



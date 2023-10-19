// WHILE 03 Desafio - De 0 até 10.000, quais números são múltiplos de três.

let i = 0 // Designamos uma variável i como contador que se inicia em zero...
while ( i < 10000 ) { // Ativamos um loop enquanto i < dez mil, e atualizamos i ao final do if-else com i++...
    if (i % 3 === 0) { // Condição TRUE para divisão de resto zero para múltiplos de 3... Três iguais representa comparação de Valor E também Type.
        console.log(`O valor de i, no caso ${i}, é múltiplo de 3, pois (i % 3) tem como resto zero, então é divisível por três.`) // Usando format-string no console.log...
    } else { // Condição FALSE que acontecerá em casos em que a divisão ( i % 3 !== 0 )
        console.log(`O valor ${i} não é múltiplo de 3.`) // Retorno visual do console.log com o valor atual do i
    }
    i++ // Incremento do valor de i, a fim de evitar o loop infinito (sem condição de saída)
} 

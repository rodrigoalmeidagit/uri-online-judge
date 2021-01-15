const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );
/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
VALOR A PAGAR: R$ 15.50
*/

var values = input.split('\n');

var item1 = values.shift().split(' ');
var item2 = values.shift().split(' ');

var codItem1 = item1.shift();
var qtdItem1 = item1.shift();
var valItem1 = item1.shift();
var totItem1 = qtdItem1 * valItem1;

var codItem2 = item2.shift();
var qtdItem2 = item2.shift();
var valItem2 = item2.shift();
var totItem2 = qtdItem2 * valItem2;

var totalValue = totItem1 + totItem2;

console.log( 'VALOR A PAGAR: R$ ' + totalValue.toFixed( 2 ) );




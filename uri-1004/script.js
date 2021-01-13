const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );

/*
Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

var values = input.split('\n');

var int1 = parseInt( values.shift() );
var int2 = parseInt( values.shift() );
var prod = int1 * int2;

console.log('PROD = ' + prod);
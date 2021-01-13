const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );

/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
DIFERENCA = -26
*/

var values = input.split('\n');

var A = parseInt( values.shift() );
var B = parseInt( values.shift() );
var C = parseInt( values.shift() );
var D = parseInt( values.shift() );

var media = ( A * B - C * D );

console.log( 'DIFERENCA = ' + media );
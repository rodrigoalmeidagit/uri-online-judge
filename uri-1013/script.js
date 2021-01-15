const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );
/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

MaiorAB = ( a+b+abs(a-b) ) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
106 eh o maior
*/

var values = input.split(' ');

var A = parseInt( values.shift() );
var B = parseInt( values.shift() );
var C = parseInt( values.shift() );

var maiorAB = ( A + B + Math.abs( A - B ) ) / 2;
var maiorABC = ( maiorAB + C + Math.abs( maiorAB - C ) ) / 2;

console.log( maiorABC + ' eh o maior' );

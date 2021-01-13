const input = require('fs').readFileSync('stdin', 'utf-8');

/**
    * Leia 2 valores inteiros e armazene-os nas variáveis A e B.
    * Efetue a soma de A e B atribuindo o seu resultado na variável X.
    * Imprima X conforme exemplo apresentado abaixo.
    * Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de
    imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
 */

var numbers = input.split( '\n' );

var A = parseInt( numbers.shift() );
var B = parseInt( numbers.shift() );

var X = A + B;

console.log( 'X = ' + X );
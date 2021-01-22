const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );
/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
0:9:16
*/

var value = input.split();

var horas = parseInt( value / 3600 );
var min = parseInt( ( value % 3600 ) / 60 );
var seg = parseInt( value % 60 )

console.log( horas.toFixed( 0 ) + ':' + min.toFixed( 0 ) + ':' + seg.toFixed( 0 ) );
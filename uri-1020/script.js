const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );
/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
1 ano(s)
1 mes(es)
5 dia(s)
*/

var values = input.split();

var anos = parseInt( values / 365 );
var values = values % 365;

var meses = parseInt( values / 30 );
var values = values % 30;

var dias = parseInt( values );

console.log( anos + ' ano(s)' );
console.log( meses + ' mes(es)' );
console.log( dias + ' dia(s)' );


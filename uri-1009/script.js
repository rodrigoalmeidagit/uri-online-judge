const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );

/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
TOTAL = R$ 684.54
*/

var values = input.split( '\n' );

var nameFunc = values.shift();
var basicSalary = parseFloat( values.shift() );
var totSell = parseFloat( values.shift() );

var salary = basicSalary + ( totSell * 0.15 );

console.log( 'TOTAL = R$ ' + salary.toFixed( 2 ) );
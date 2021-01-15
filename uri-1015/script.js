const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );
/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia = Raiz (x2 - x1)² + (y2 - y1)²

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
4.4721
*/

var values = input.split( '\n' );

var pontoUm = values.shift().split(' ');
var pontoDois = values.shift().split(' ');

var distancia = Math.sqrt(
    ( pontoDois[ 0 ] - pontoUm[ 0 ] ) ** 2 +
    ( pontoDois[ 1 ] - pontoUm[ 1 ] ) ** 2 );

console.log( distancia.toFixed( 4 ) );

const input = require( 'fs' ).readFileSync( 'stdin', 'utf-8' );

const [ x, y ] = input.split( ' ' ).map( item => parseInt( item ) );

var sum = x + y;

console.log( sum );
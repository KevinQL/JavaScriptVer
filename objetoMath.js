
var PI = Math.PI;
var E = Math.E;

console.log( PI );
console.log( E );

var numero = 10.648345;

console.log( Math.round(numero * 100)/100 );
console.log( Math.floor(numero) );

function randomEntre( min, max ){
    var rand = Math.floor( Math.random()*(max + 1 - min));
    var numAlea = min + rand;
    return numAlea;
} 

console.log( randomEntre( 3, 7) );

console.log( Math.sqrt(100) )
console.log( Math.pow( 7, 2 ) )
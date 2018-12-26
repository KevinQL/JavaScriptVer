
var bolss = true;
var a = new Boolean(); //false
var b = new Boolean(""); //false
var c = new Boolean("-"); //true
// NaN, undefined, null, 0, -0 :: false
// infinity, -infinity, "false", 1 :: true


console.log( a,b,c );

var bol = new Boolean(false);

console.log( bol );

if( bol ){ // Esto PARECE ser un true, pero en realidad solo se está evaluando que la variable bool existe
    console.log( "Se está evaluando un Objeto")
}

if( bol.valueOf() ){
    console.log( "Se está evaluando el valor del objeto:: false")
}


var texto = "la suma de 45 + 70 es 115";

var arr = texto.match( /\d+/g );
console.log( arr );

var arr1 = texto.match( /\d{1,}/g );
console.log( arr1 );

var arr2 = texto.match( /[0-9]+/g );
console.log( arr2 );
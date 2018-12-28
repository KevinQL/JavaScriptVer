
var reg1 = RegExp("a");
var reg2 = "/a/";

var texto = "Hola mundooooo";
console.log( texto );

var arr = texto.match( /o{2,4}/ );

console.log( arr );
    

/*
    ^   -> al principio
    $   -> al final
    .   -> cualquier cosa
    []  -> para rangos
    \s  -> cualquier espacio
    \w  -> cualquier palabra del ingles. similar a escribir [a-bA-Z0-9]
    \d  -> igual a [0-9]
    |   -> es "o" logico
    +   -> uno o más caracteres del caracter de la izquierda al +
    ?   -> tiene que aparecer el caracter o no tiene que aparecer. el caracter de la izquierda también
    *   -> parecido al anterior. pero funciona similar al +
    {i} -> i Especifica cuantas veces se repite el caracter
    {2,4}-> justo el anterior pero con rango
**controladores 
    i   -> insensible   -ejem- /a/i
    g   -> todas las apariciones -ejem- /[o]/g
    m   -> multilinea   -ejem- //m

*/
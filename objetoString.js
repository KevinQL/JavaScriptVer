
var a = new String("kevin quispe");

console.log( a );
console.log( a[0] );

var nombre = a.substr( 0, a.indexOf(" ") ); // (desde, cuanto)
console.log("NOMBRE:",nombre);

var b = "myblanki m";

console.log( b.toUpperCase() );
console.log( b.toLowerCase() );

var i = b.indexOf("m");
console.log( "indice m",i);
i = b.lastIndexOf("m");
console.log( "indice m",i);


//=============
var saluda = "HOLA MUNDO"
document.write( saluda.italics(),"<br>" );
document.write( saluda.strike(),"<br>" );
document.write( saluda.bold(),"<br>" );
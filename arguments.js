
var arguments = 10;

function miFuncion(a,b,c,d){

    console.log( arguments );

    if ( arguments.length !== 4 ){
        console.error( "La función require 4 parametros " );
        return;
    }

    console.log( a+b+c+d );

}

miFuncion( 1,2,3 );
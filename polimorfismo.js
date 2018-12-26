
function determinaDatos( a ){
    if( a === undefined ){
        console.log("A es undefined... no sé que hacer");
    }

    if ( typeof a === "number") {
        console.log( "A es un número!!" );
    }

    if ( typeof a === "string" ) {
        console.log( "A es un string" );
    }

    if ( typeof a === "object") {
        console.log("A es un objeto... pero puede ser cualquier cosa...");
        if( a instanceof Number ){
            console.log( "A es un objeto numerico" );
        }
    }

}


var b = new Number(2);

console.log( b );

determinaDatos( b );
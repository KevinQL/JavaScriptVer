var err = "";

try {
    
    throw new Error(1);

} catch ( e ) {
    console.log( typeof e );
    console.log( e );
    err = e;
    //manejoError(e);
}

function manejoError( e ){
    var fecha = new Date();
    console.log( "Se detectó un error de tipo " + e + "a horas de " + fecha.getTime() );
}
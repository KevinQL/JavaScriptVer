

try {
    
    throw new Error("Error tipo 1");

    //con el throw podemos envia cualquier cosa!!
    throw {
        nombre:"Error tipo 2",
        accion: "Salir corriendo!!"
    }

    // podemos enviar funciones
    throw function(){
        console.log("funcion del throw!")
    }

    console.log( " Este mensaje nunca se ejecuta!! " );

} catch (e) {

    //console.log( e.nombre );

    //e();
    console.log( e );

}finally{

}
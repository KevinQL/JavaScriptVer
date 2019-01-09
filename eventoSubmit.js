function validar(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    console.log( nombre, apellido)

    if( nombre.length < 1){
        return false;
    }
    if( apellido.length < 1){
        return false;
    }

    return true; // is true para que se envié y false para que no se envién valores al servidor
}




console.log( window.location.search );
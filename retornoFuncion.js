
function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Blank", 22);

console.log( persona.nombre )

function creaFuncion(){
    return function( nombre ){
        console.log("me creó "+ nombre )
        return function(){
            console.log("Segunda funcion!!!")
        }
    }
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion("kavin");
segundaFuncion();
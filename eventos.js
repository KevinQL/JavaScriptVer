
function evento( arg ){
    console.log("disparó");
    console.log( arg );
}

function myTexto( arg ){
    console.log( "disparó" );
    console.log( arg.keyCode, arg.key );
    console.log( arg );
}


var objeto = document.getElementById("btn");
var objeto2 = document.getElementById("my_texto");

objeto.addEventListener("click", evento);

objeto2.addEventListener("keypress", myTexto);
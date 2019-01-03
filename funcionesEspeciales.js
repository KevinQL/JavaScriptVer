
var carro = {
    nombre:"mazda",
    color:"amarillo",
    imprimir:function(){
        return "El coche "+this.nombre+" es de color "+this.color;
    }
}

var carro2 = {
    nombre:"prueba",
    color:"negro"
}

var logCarro = function( arg1, arg2){
    this.color = arg2
    console.log( this.imprimir() );
    console.log( "argumentos",arg1, arg2 );
}


console.log( carro.imprimir() );

var prlog = logCarro.bind( carro );
prlog("ar1","Rojo")

logCarro.bind( carro )("lorem","verde");
logCarro.call( carro, "foca","blanco")
logCarro.apply( carro, ["apply","azul"])

console.log("================")

console.log(carro.imprimir.call( carro2 ))
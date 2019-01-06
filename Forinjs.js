var Persona = function(){
    this.nombre = "Kevin";
    this.edad = 22;
    this.apellido = "QL";
}

var kevin = new Persona();

for( prop in kevin){
    console.log( prop,":",kevin[prop] );
}


var numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach(function( valk ){
    console.log( valk )
});




function Persona( nombre, apellido, edad ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.imprimirInfo = function(){
    console.info( this.nombre, this.apellido, "("+ this.edad + ")" );
}

var Kev = new Persona( "kevin", "Quispe Lima", 22);
Kev.imprimirInfo();


Number.prototype.esPositivo = function(){
    if( this >= 0){
        return true;
    }else{
        return false;
    }
}

a = 2;
console.log(a)
console.log(a.esPositivo());
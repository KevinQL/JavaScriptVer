
function Persona(){
    this.nombre = "Kevin";
    this.apellidos = "Quispe lima";
    this.edad = 22;
    
    this.imprimePersona = function(){
        console.log( this.nombre, this.apellidos, "edad (",this.edad,")");
    }
}

var Kevin = new Persona();

console.log( Kevin )
console.log( Kevin.imprimePersona() )
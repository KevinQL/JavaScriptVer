
var persona = {
    nombre: "kavin",
    apellido: "quispe lima",
    imprimeInfo: function(){
        console.log( this.nombre, this.apellido );
    },
    direccion: { 
        pais: "Perú",
        obtenerPais: function(){
            var self = this;

            var nuevaDireccion = function(){
                console.log(self);
                console.log("La dirección es "+self.pais);
            }

            nuevaDireccion();
        }
    }

}

persona.nombre = "Kevv"
persona.imprimeInfo();

persona.direccion.obtenerPais();


var person = {
    nombre: "kevin",
    apellidos: "quispe lima",
    edad: 22,
    direccion: {
        pais: "peru",
        ciudad: "andahuaylas",
        edificio: {
            nombre: "Sol de oro",
            telefono: "983-677-689"
        }
    }
}

var campo = "nombre";

console.log(person[campo])

console.log(  person.edad2 )
console.log(  person.direccion.edificio.telefono )

var hoy = new Date();
var fMili = new Date(0);
var fFija = new Date(2018, 8, 22, 12, 0, 25, 1);

console.log( hoy );
console.log( fMili );
console.log( fFija );

console.log( hoy.getFullYear() ) // no usar getYear()
console.log( hoy.getMonth() )
console.log( hoy.getDate() )
console.log( hoy.getHours() )
console.log( hoy.getMinutes() )
console.log( hoy.getSeconds() )
console.log( hoy.getMilliseconds() )

console.log( "Representación en millisegundos de la fecha actual es ",hoy.getTime() )

var inicio = new Date();

for (let i = 0; i < 1500; i++) {
    console.log( "algo..." );
}

var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion,"milisegundos")
console.log((duracion/1000),"segundos")

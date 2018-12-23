
var arr = [
    true,
    {
        nombre:"kevin",
        edad: 22
    },
    function(){
        console.log( "Estoy en un arreglo " );
    },
    function( Persona ){
        console.log( Persona.nombre, ", EDAD:", Persona.edad );
    },
    ["My","Blanky","is","a brfld",
        5,
        function(){
            console.log( this );
        }
    ]
]


console.log( arr );
console.log( arr[1].nombre );

arr[2]();

arr[1].nombre = "Juan";

arr[3]( arr[1] )

console.log( arr[4][0] );
var mensaje = "";
var contr = true;
arr[4].map( function(elemt){
    if(typeof elemt === "number"){
        contr = false;
    }
    if(typeof elemt !== "number" && contr){
        mensaje += elemt + " ";
    }
})

console.log( mensaje );

var areglo = arr[4];
console.log( areglo )
areglo[5]();
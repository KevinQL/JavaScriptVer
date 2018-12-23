
function precioProducto( nombre, precio ){
    nombre = nombre || "sin nombre del producto";
    precio = precio || 0;

    console.log("PRODUCTO:", nombre, " PRECIO:", precio);

}

function precioProducto100( nombre ){
    precioProducto( nombre, 100 );
}

function precioProductoCamisa( precio ){
    precioProducto("Camisa", precio);
}


// invocaciones de funciones 
precioProducto( "Saco" );
precioProducto( "", 20 );

precioProducto100(" Lavadora ");

precioProductoCamisa( 50 );
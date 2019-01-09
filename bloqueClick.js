// enlaza con index4.html


//cuando le den click
document.onmousedown = function( arg ){
    
    if( arg.button === 2 ){
        alert("Teclado bloquedo");
        return;
    }
    console.log( "No hay problema!!" )
    console.log( arg )

}

//cuando suelten el click
document.onmouseup = function( arg ){
    var texto = window.getSelection().toString(); // Captura la selección de texto
    console.log( texto );
    console.log( "Arg->",arg );
}
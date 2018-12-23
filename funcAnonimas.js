( function(){

    var b = 10;

    ( function(){
    
        var a = 1;
        console.log(a);
    
        ( function(){ 
            var b = 3; 
            a += b; 
        } )();
    
        console.log(a);
    
    } )();
    
    console.log("AFUERA :", b );

} )();

//--------------

function ejecutarFuncion( fn ){
    if( fn() === 1 ){
        return true;
    }else{
        return false;
    }
}

console.log( ejecutarFuncion( function(){
    console.log("Escribiendo funcion anónima!! ");
    return 1;
} ) );
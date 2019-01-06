
setTimeout(function(){
    console.log("Hola después de 1s");
}, 1000)

var i = 0;
var intervalo = setInterval(function(){
    console.log("seg",i++)
    if( i === 5){
        clearInterval( intervalo )
    }
}, 1000)

function crearFuncion(){

    var arr = [];
    var numero = 1;

    arr.push( 
        function(){ //está función no se está ejecuntando
            console.log( "arr1",numero );//print 0
        }
    );

    numero += 1;
    arr.push(
        (function(n){
            return function(){ console.log("arr2",n)}
        })(numero)
    )

    numero += 1;
    arr.push(
        (function(n){
            return function(){ console.log("arr3",n)}
        })(numero)
    )

    numero = 4;
    arr.push(
        (function(n){
            return function(){ console.log("arr4",n)}
        })(numero)
    )

    numero = 5;
    arr.push(
        (function(numero){
            return function(){ console.log("arr5",numero)}
        })(numero)
    )

    numero = 6;
    arr.push(
        (function(){
            return function(){ console.log("arr6",numero)}
        })()
    )

    numero = 7;
    arr.push(
        (function(){
            var n = numero
            return function(){ console.log("arr7",n)}
        })()
    )

    var numero = 8;
    for(var num=numero; num <= 10;num++){
        arr.push(
            (function(num){
                return function(){
                    console.log(num);
                }
            })(num)
        );
    }

    numero = 0;
    console.log("fin",numero);

    return arr;

}


var funcion = crearFuncion();

funcion[0]();
funcion[1]();
funcion[2]();
funcion[3]();
funcion[4]();
funcion[5]();
funcion[6]();
funcion[7]();
funcion[8]();
funcion[9]();
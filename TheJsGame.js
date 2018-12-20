
function Jugador( nombre ){
    
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo ){
        if( this.sp >= 40 ){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.log( this.nombre, "No tiene suficiente sp!!");
        }

        this.estado(jugadorObjetivo);

    }

    this.estado = function( jugadorObjetivo ){
        console.log( this );
        console.log( jugadorObjetivo );
    }

    this.tirarFlecha = function( jugadorObjetivo ){
        if(jugadorObjetivo.pv > 0){
            jugadorObjetivo.pv -= 40;
            if(jugadorObjetivo.pv < 0){
                jugadorObjetivo.pv = 0;
                console.log( jugadorObjetivo.nombre, "murio!!!")
            }
        }else{
            console.log( jugadorObjetivo.nombre, "Está muerto!!!")
        }

        this.estado(jugadorObjetivo);

    }

}


//Inicio del juego!!!
var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );

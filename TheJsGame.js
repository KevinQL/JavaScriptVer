
function Jugador( nombre, equipo ){
    
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.equipo = equipo;

    this.curar = function( jugadorObjetivo ){
       
        if(this.pv > 0 && jugadorObjetivo.pv != 0){        
            if( this.sp >= 40 ){
                if( jugadorObjetivo.pv < 200 ){
                    this.sp -= 40;
                    jugadorObjetivo.pv += 20;
                    if( jugadorObjetivo.pv > 200 ){
                        jugadorObjetivo.pv = 200;
                    }
                }else{
                    console.log("Limite de pv alcanzado!!")
                }
                
            }else{
                console.log( this.nombre, "No tiene suficiente sp!!");
            }
        }else{
            if(jugadorObjetivo.pv == 0){
                console.log( jugadorObjetivo.nombre, "Está muerto!!");
                return null;
            }
            console.log( this.name, "Estás muerto!!!")
        }

        this.estado(jugadorObjetivo);

    }

    this.tirarFlecha = function( jugadorObjetivo ){

        if( this.pv > 0 ){    
            if(jugadorObjetivo.pv > 0){
                jugadorObjetivo.pv -= 40;
                this.sp += 20;
                if(jugadorObjetivo.pv <= 0){
                    jugadorObjetivo.pv = 0;
                    console.log( jugadorObjetivo.nombre, "murio!!!")
                }
            }else{
                console.log( jugadorObjetivo.nombre, "Está muerto!!!")
            }
        }else{
            console.log( this.name, "Estás muerto!!! ")
        }

        this.estado(jugadorObjetivo);

    }

    this.estado = function( jugadorObjetivo ){
        console.log( this );
        console.log( jugadorObjetivo );
    }

    this.reiniciarJuego = function(){
        this.pv = 100;
        this.sp = 100;
    }

}


//Inicio del juego!!!
var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );


function identifica( param ){
    console.log( typeof param );
    console.log( param instanceof Persona);
}

function Persona(){

}

var kev = new Persona();

identifica( kev );
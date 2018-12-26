
var fecha = new Date();

Date.prototype.sumarDias = function(dias){
    this.setDate( this.getDate() + dias );
    return this;
}
Date.prototype.sumarAnio = function(anio){
    this.setFullYear( this.getFullYear() + anio );
}

console.log( fecha );
fecha.sumarDias( 1 );
console.log( fecha.getDate() );

fecha.sumarAnio(2);
console.log( fecha )
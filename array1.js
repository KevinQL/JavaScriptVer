

var arr = [5,4,3,2,1];
console.log( arr );
console.log( arr[0] );

arr.reverse();
console.log( "reverse()", arr );

arr = arr.map( function(elem){
    elem *= elem;
    return elem;
});
console.log( " map() *-* ", arr );

arr = arr.map( Math.sqrt );
console.log( " map() :o ", arr )

arr = arr.join("|");
console.log( "join('|')", arr );

arr = arr.split("|");
console.log( "split('|')", arr );

arr.push("6");
console.log("push('6')", arr);

arr.unshift("0");
console.log("unshift('0')", arr);

console.log( "toString()", arr.toString() );

var elimine = arr.pop();
console.log("pop()",arr,"Elimine:",elimine);

var quite = arr.splice( 1, 0, "*A","*B","*C");
console.log( "splice(1,0,'*A','*B','*C')", arr )
console.log( "quito ", quite )

arr = arr.slice( 1, 3 );
console.log("alice( 1, 3 )", arr )

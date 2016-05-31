var batch = require( './index' );

var promises = [];

// My promises will print a number at random delay -------
// Build your own promise array ;)
var foo = [0,1,2,3,4,5,6,7,8,9];
foo.forEach( function( item ){
  promises.push( function( resolve, reject ){
    setTimeout( function(){
      console.log( '*' , item );
      resolve( item );
    } , Math.floor(Math.random() * 100) + 1 );
  } );
} );
//--------------------------------------------------------

console.log( 'Print sequencially. Same as: batch( promises )' );
batch( promises , 1 )
  .then( function( results ){
    console.log( "Results" , results );
  } );
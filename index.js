module.exports = function( allPromiseFuns, size ){
  if( ! size ){
    size = 1;
  }
  return new Promise( function( resolve, reject ){
    var allResults = [];
    var cursor = 0;
    function step(){
      var promisesFun = allPromiseFuns.slice( cursor , cursor += size );
      if( promisesFun.length ){
        var promises = [];
        for (var i = promisesFun.length - 1; i >= 0; i--) {
          promises.push( new Promise(promisesFun[i]) );
        }
        Promise.all( promises )
          .then( function( results ){
            allResults.push.apply( allResults , results );
            step();
          } )
          .catch( reject );
      } else {
        resolve( allResults )
      }
    };
    step();
  });
};
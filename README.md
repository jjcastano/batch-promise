# batch-promise v1.0.0 

> Execute an array of promises in groups of predefined elements instead of all at once. If the group is 1, the execution will be synchronous.

## Install

With npm do:

```batch
npm install batch-promise
```

## Usage in npm

```javascript
var batch = require( 'batch-promise' );
batch(promiseFunc, size)
  .then(...)
```

parameters
----------
* **promiseFunc**: the promise function. It will be executed with new Promise( promiseFunc ), so resolve & reject must be used to reach next promise group.
* **size** (optional): size of concurrent threads. If none, 1 will be applied.

return
----------
* **return** : Returns a promise. It will be resolved when all promises will.

## Example

```js
var batch = require( 'batch-promise' );

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

console.log( 'Print sequencially.. the same as: batch( promises )' );
batch( promises , 1 )
  .then( function( results ){
    console.log( "Results" , results );
  } );
```

## Release History

 Date       | Version | Comments
 ---        | ---     | ---
 2016-05-31 | v1.0.0  | Initial version

---

Submitted by [Juan José Castaño](http://jjcastano.com)
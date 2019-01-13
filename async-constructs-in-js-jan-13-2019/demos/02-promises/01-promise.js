function sumAsync( a, b ) {
    let promise = new Promise(function( resolve, reject ) {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            return reject( new TypeError( 'not all arguments are numbers' ) );
        }

        setTimeout( () => resolve( a + b ), 2000 );
    });

    console.log( '[2] about to return the promise' );

    return promise;
}

sumAsync( 1, 2 )
    .then( console.log )
    .catch( console.error );

sumAsync( 1, 'hello' )
    .then( console.log )
    .catch( console.error );
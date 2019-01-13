function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'Both arguments should be numbers' ) );
            return;
        }

        setTimeout(function() {
            resolve( x + y );
        }, 2000);
    });
}

function success( result1 ) {
    console.log( result1 );
    return 'Result is = ' + result1;
}

function error( error ) {
    console.log( error.message );
}

sum( 10, 20 )
    .then( success )
    .then( input => console.log( input ) )
    .catch( error );

sum( 10, 'hello' )
    .then( success )
    .then( input => console.log( input ) )
    .catch( error );

console.log( 'last line' );
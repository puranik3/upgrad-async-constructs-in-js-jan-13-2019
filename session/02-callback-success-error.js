function sum( x, y, success, error ) {
    if( typeof x !== 'number' || typeof y !== 'number' ) {
        setTimeout(function() {
            error( new Error( 'Both arguments should be numbers' ) );
        }, 0);
        return;
    }

    setTimeout(function() {
        success( x + y );
    }, 2000);
}

function success( result1 ) {
    console.log( result1 );
}

function error( error ) {
    console.log( error.message );
}

sum( 10, 20, success, error );
sum( 10, 'hello', success, error );

console.log( 'last line' );
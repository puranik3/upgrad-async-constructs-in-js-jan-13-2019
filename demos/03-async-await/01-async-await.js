function sumAsync( a, b ) {
    let promise = new Promise(function( resolve, reject ) {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            return reject( new TypeError( 'not all arguments are numbers' ) );
        }

        setTimeout( () => resolve( a + b ), 2000 );
    });

    return promise;
}

async function fooWorksFine() {
    try {
        console.log( 'within try' );
        let result1 = await sumAsync( 1, 2 );
        let result2 = await sumAsync( result1, 3 );
        let result3 = await sumAsync( result2, 4 );
        console.log( result3 );
    } catch( error ) {
        console.log( 'within catch' );
        console.error( error.message );
    }
}

async function fooThrowsError() {
    try {
        console.log( await sumAsync( 1, 'hello' ) );
    } catch( error ) {
        console.error( error.message );
    }
}

fooWorksFine();
console.log( 'after call to fooWorksFine' );

fooThrowsError();
console.log( 'after call to fooThrowsError' );
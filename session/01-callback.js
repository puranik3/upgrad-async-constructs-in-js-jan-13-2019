function sum( x, y, cb ) {
    // non-blocking
    setTimeout(function() {
        cb( x + y );
    }, 2000);
}

const result = sum( 10, 20, function( result1 ) {
    console.log( result1 );
    sum( result1, 30, function( result2 ) {
        console.log( result2 );
        sum( result2, 40, function( result3 ) {
            console.log( result3 );
        });
    });
});

console.log( result );
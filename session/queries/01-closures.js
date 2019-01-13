function foo( f1 ) {
    let f2 = 2;

    function bar() {
        console.log( f1, f2 );
    }
    
    return bar;
}

const bar = foo( 1 );
// variables f1, f2 would not be alive in any language
// In JS f1 and f2 are kept alive
bar(); // can still access f1 and f2!!
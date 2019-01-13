function getShoppingCart() {
    let items = [];

    return {
        addItem: function( item ) {
            items.push( item );
        },
        getItems: function() {
            return items;
        }
    }
}

shoppingCart = getShoppingCart();

shoppingCart.addItem( 'Cornflakes' );
shoppingCart.addItem( 'Detergent Powder' );
console.log( shoppingCart.getItems() ); // [ 'Cornflakes', 'Detergent Powder' ]

// shoppingCart.items.pop(); // rogue piece of code
shoppingCart.getItems(); [ 'Cornflakes' ]
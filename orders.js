function orders(product, quantity) {

    let totalPrice = 0;
    let pricePerOne = 0;

    switch (product) {
        case 'coffee':
            pricePerOne = 1.50;
            totalPrice = 1.50 * quantity;
            break;

        case 'water':
            pricePerOne = 1;
            totalPrice = 1 * quantity;
            break;

        case 'coke':
            pricePerOne = 1.40;
            totalPrice = 1.40 * quantity;
            break;

        case 'snacks':
            pricePerOne = 2;
            totalPrice = 2 * quantity;
            break;

    }

    console.log(totalPrice.toFixed(2));
    
}
orders();
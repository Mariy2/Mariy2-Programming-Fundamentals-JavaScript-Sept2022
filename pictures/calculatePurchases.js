function calculatePurchases(input) {

    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;

    let index = 0;
    let totalPrice = 0;
    console.log(`Bought furniture:`);


    while (input[index] !== 'Purchase') {
        let line = input[index];
        let validProduct = pattern.exec(line);

        while (validProduct !== null) {
            let productName = validProduct.groups['name'];
            let productPrice = validProduct.groups['price'];
            let productQuantity = validProduct.groups['quantity'];
            totalPrice += productPrice * productQuantity;
            console.log(productName);
            validProduct = pattern.exec(line);

        }

        index++;
    }

console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
// calculatePurchases(['>>Laptop<<312.2323!3',

// '>>TV<<300.21314!5',

// '>Invalid<<!5',

// '>>TV<<300.21314!20',

// '>>Invalid<!5',

// '>>TV<<30.21314!5',

// '>>Invalid<<!!5',

// 'Purchase'])

calculatePurchases(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase']);
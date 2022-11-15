function storeProvision(available, ordered) {

    let reorderedObject = {};

    for (let i = 0; i < available.length; i += 2) {
        let productToAdd = available[i];
        let quantity = Number(available[i + 1]);
        reorderedObject[`${productToAdd}`] = quantity;

    }

    for (let y = 0; y < ordered.length; y += 2) {
        let productToAdd = ordered[y];
        let quantity = Number(ordered[y + 1]);

        if(reorderedObject.hasOwnProperty(`${productToAdd}`)){

            reorderedObject[`${productToAdd}`]+=quantity;

        }else{
            reorderedObject[`${productToAdd}`] = [`${quantity}`]
        }

    }
    
    for(product in reorderedObject){

        console.log(`${product} -> ${reorderedObject[product]}`)
        
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]);
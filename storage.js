function storage(input){

    let productsMap = new Map();

    for(line of input){
        let lineSplit = line.split(' ');
        let product = lineSplit[0];
        let quantity = Number(lineSplit[1]);

        if(!productsMap.has(product)){
            productsMap.set(product,quantity);
        }else if(productsMap.has(product)){
            let currentQuantity = productsMap.get(product);
            let newQuantity = currentQuantity +quantity;
            productsMap.set(product,newQuantity)
        }
    }

   for (let [product, quantity] of productsMap){
    console.log(`${product} -> ${quantity}`)
   }
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])
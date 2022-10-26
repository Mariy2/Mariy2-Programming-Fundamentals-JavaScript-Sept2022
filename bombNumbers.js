function shoppingList(arr) {

    let products = arr[0].split('!');

    arr.shift();

    

     
    
    for (let i = 0; i < arr.length; i++) {

        let arrCommandProduct = arr[i].split(' ');
        let command = arrCommandProduct[0];
        let product = arrCommandProduct[1];
        let newProduct = arrCommandProduct[2];

        switch (command) {
            case "Urgent":
                if (!products.includes(product)) {

                    products.unshift(product)
                }

                break;

            case "Unnecessary":
                if (products.includes(product)) {
                    let index = products.indexOf(product);
                    products.splice(index, 1);
                }
                break;

            case "Correct":
                if (products.includes(product)) {
                    let index = products.indexOf(product);
                    products.splice(index, 1, newProduct);
                }
                break;

            case "Rearrange":
                if (products.includes(product)) {
                    let index = products.indexOf(product);
                    products.splice(index, 1).push(product);
                }
                break;

            default: break;
        }


    }
    console.log(products.join(', '));



}
shoppingList((["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion","Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]));
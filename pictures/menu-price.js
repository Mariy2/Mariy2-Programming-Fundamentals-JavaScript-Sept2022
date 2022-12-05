function menuPrice(text){

    const pattern = /%(?<name>[A-Z][a-z]+)%[^%.|$]*<(?<product>[\w]+)>[^%.|$]*\|(?<quantity>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let index = 0; 
   let totalIncome = 0;
    let command = text.shift();

    while(command !== 'end of shift'){
        
        
        let informationArr = pattern.exec(command);

        if(informationArr){

        let customerName = informationArr.groups['name'];
        let product = informationArr.groups['product'];
        let quantity = informationArr.groups['quantity'];
        let price = informationArr.groups['price'];
        let totalPrice = price * quantity;
        console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`)
        command = text.shift();
        informationArr = pattern.exec(command);
        totalIncome+=totalPrice;
        }else{
            command = text.shift();
        }    

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
menuPrice(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);
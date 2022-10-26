function loadingBar(number) {

    let percentToAdd = number / 10;
    let emptyString = '[';
    let charToPut = '%';
    

    for(let i = 0; i <= 9; i++){

        if(i < percentToAdd){
            emptyString += '%';
        }else{
            emptyString += '.'
        }

        if(i === 9){
            emptyString += ']'
        }
    }

    if(percentToAdd === 10){
        console.log(`100% Complete ! \n${emptyString}`)
    }else{
        console.log(`${number}% ${emptyString}\nStill loading...`)
    }

    
    
}

loadingBar(30);
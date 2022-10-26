function nXnMatrix(number){

    let str = number.toString();
    let arr = [];
    

    for(let i = 0; i < number; i++){
        arr.push(str)
    }
    

    for(let y = 0; y < number; y++){
        console.log(arr.join(' '))
    }



}

nXnMatrix(7);
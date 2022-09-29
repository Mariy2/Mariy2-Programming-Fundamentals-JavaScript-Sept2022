function integerAndFloat(first, second, third){

let result = first+second+third;

if(Number.isInteger(result)){
    console.log(`${result} - Integer`);
}else{
    console.log(`${result} - Float`);
}

}
integerAndFloat(9, 100, 1.1);
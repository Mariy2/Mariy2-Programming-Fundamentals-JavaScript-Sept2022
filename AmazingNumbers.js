function amazingNumbers(num) {


    let numberToString = num.toString();
    let sum = 0;


    for (let i = 0; i < numberToString.length; i++) {

        let toAdd = Number(numberToString[i]);
        sum+=toAdd;
    }
    
    if(sum.toString().includes('9')){
        console.log(`${num} Amazing? True`)
    }else{
        console.log(`${num} Amazing? False`)  
    }
    
    

}
amazingNumbers(999);
function processOddNumbers(arr){

let arrToPring = [];
let index = 0;


for(let i = 0; i < arr.length; i++){

   
    
    if(index % 2 != 0){

        arrToPring.push(arr[i] * 2);

    }
    index++;
    
}
console.log(arrToPring.reverse().join(' '));

}
//processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3]);
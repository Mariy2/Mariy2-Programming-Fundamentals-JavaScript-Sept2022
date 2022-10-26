function smallestTwoNumbers(arr){

let arrAscending = arr.sort((a, b) => a-b);

let arrToPring = arrAscending.slice(0,2);

console.log(arrToPring.join(' '))

}
smallestTwoNumbers([30, 15, 50, 5])
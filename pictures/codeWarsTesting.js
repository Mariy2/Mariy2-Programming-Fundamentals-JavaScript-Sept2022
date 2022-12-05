// let arr = [1, 2, 5, 15, 3];

// arr.sort((a, b) => a - b);

// let sum = arr.reduce((accumulator, currentValue) =>{
//    return accumulator += currentValue;
// }, 0);
// console.log(sum)

let arr = [1, 2, 5, 15, 3];
const newArr = arr.map(n => n * 2);
console.log(newArr)
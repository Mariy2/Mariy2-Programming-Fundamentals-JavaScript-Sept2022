function sumFirstAndLastArr(arr){

    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    let sum = firstNum + lastNum;
    return sum;
}
sumFirstAndLastArr(['20', '30', '40'])
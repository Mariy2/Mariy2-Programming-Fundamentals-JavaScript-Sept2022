function reverseNumbers(num, arr) {

    let arrToPrint = [];
    let arrToPrintFinal = [];

    for (let i = 0; i < num; i++) {
        arrToPrint.push(arr[i]);
    }


    for (let i = arrToPrint.length - 1; i >= 0; i--) {
        arrToPrintFinal.push(arrToPrint[i]);
    }

    console.log(arrToPrintFinal.join(' '));
 
}
reverseNumbers(3, [10, 20, 30, 40, 50])
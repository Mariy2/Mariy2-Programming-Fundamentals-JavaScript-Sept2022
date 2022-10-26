function oddEvenSum(number) {

    let stringNumber = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < stringNumber.length; i++) {

        let currentNum = Number(stringNumber[i]);

        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        } else {
            sumOdd += currentNum;
        }

    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
oddEvenSum(3495892137259234);
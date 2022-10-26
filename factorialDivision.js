function factorialDivision(number, divider) {

    let sum = 1;
    let sumDivider = 1;

    for (let i = 1; i <= number; i ++){
        sum *= i;
    } for (let i = 1; i <= divider; i ++){
        sumDivider *= i;
    }

    console.log((sum/sumDivider).toFixed(2))
    

}
factorialDivision(6, 2)
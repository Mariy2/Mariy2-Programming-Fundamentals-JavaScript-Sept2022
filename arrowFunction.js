function simpleCalculator(a, b, operator) {


    let result = 0;

    let mulltiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply':
            result = mulltiply(a, b);
            console.log(result);
            break;

        case 'divide':
            result = divide(a, b);
            console.log(result);
            break;

        case 'add':
            result = add(a, b);
            console.log(result);
            break;

        case 'subtract':
            result = subtract(a, b);
            console.log(result);
            break;
        default:
            break;
    }

}
simpleCalculator(3, 5, 'multiply');

function repeat(str, num) {

    let stringToPrint = '';
    for (let i = 0; i < num; i++) {

        stringToPrint += `${str}`
    }
    return stringToPrint;
}
let repeatedString = repeat();
console.log(repeatedString);

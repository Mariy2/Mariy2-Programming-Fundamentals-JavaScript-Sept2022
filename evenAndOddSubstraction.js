function solve(arr) {

    let even = 0;
    let odd = 0;

    for (number of arr) {

        if (number % 2 === 0) {
            even += number;
        } else {
            odd += number;
        }

    }

    console.log(even - odd);

}
solve([1, 2, 3, 4, 5, 6]);
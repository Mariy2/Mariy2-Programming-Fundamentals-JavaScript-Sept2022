function solve(arr) {

    let sumArr = 0;
    let sumModifiedArr = 0;


    for (let i = 0; i < arr.length; i++) {

        sumArr+=arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumModifiedArr+=arr[i];

    }
    console.log(arr)
    console.log(sumArr);
    console.log(sumModifiedArr);
    

}
// solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
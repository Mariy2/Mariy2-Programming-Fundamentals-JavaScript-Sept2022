function firstAndLastKnumbers(arr){

    let kNumber = arr[0];
    
    let firstKnumbers = arr.slice(1, kNumber + 1);
    let secondKnumbers = arr.slice(-kNumber);
    
    console.log(firstKnumbers.join(' '));
    console.log(secondKnumbers.join(' '));

}
 firstAndLastKnumbers([3, 6, 7, 8, 9])
firstAndLastKnumbers ([2, 7, 8, 9])
function rotation(arr, numRotations){


    for(let i = 0; i < numRotations; i++){

        let first = arr[0];
        let last = arr[arr.length - 1];

        arr.shift();
        arr.push(first);


        
    }
    
    console.log(arr.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);
//rotation([2, 4, 15, 31], 5);
function topInteger(arr) {

    let newArr = [];


    for (let i = 0; i < arr.length; i++) {

        let toCheck = arr[i];
        let isValid = true;

        for (let y = 1 + i; y < arr.length; y++) {

            if (toCheck <= arr[y]) {
                isValid = false;
                
            }
        }

        if(isValid){
            newArr.push(toCheck);
        }


    }
    console.log(newArr.join(' '))


}
//topInteger([1, 4, 3, 2]);
//topInteger([14, 24, 3, 19, 15, 17]);
topInteger([41, 41, 34, 20]);
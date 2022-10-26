function sorting(arr) {

    let newArr = [];
    
    let sortedAscending = arr.sort((a,b) => a-b);
    
    

    for(let i = 0; i < sortedAscending.length; i++){

        let biggest = sortedAscending.pop();
        let smallest = sortedAscending.shift();
        newArr.push(biggest)
        newArr.push(smallest)

    }


    newArr.push(sortedAscending.pop());
    newArr.push(sortedAscending.shift());
    
    console.log(newArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
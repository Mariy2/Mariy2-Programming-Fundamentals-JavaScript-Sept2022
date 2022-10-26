function sortArray(arr){

    let sortedAscending = arr.sort((a,b) => a.length-b.length || a.localeCompare(b));

    for(let i = 0; i<sortedAscending.length;i++){
        console.log(sortedAscending[i])
    }
    

    let name = 'Ivan';
    let name2 = 'ivan';
    
}
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])

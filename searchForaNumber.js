function searchForaNumber(originalArr, commandsArr){

    let numbersToTake = commandsArr[0];
    let numbersToDelete = commandsArr[1];
    let numberToSearch = commandsArr[2];

    let takenNumbers = originalArr.splice(0, numbersToTake).slice(numbersToDelete);
    
    
    let timesEncountered = 0;

    for (let el of takenNumbers){
        if(el === numberToSearch){
            timesEncountered+=1;
        }
    }
    
    console.log(`Number ${numberToSearch} occurs ${timesEncountered} times.`)


}
searchForaNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
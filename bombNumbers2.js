function bombNumbers2(arr, bombNumbers){

    let bombNumber = bombNumbers[0];
    let bombPower = bombNumbers[1];
    
    let indexBomb = arr.indexOf(bombNumber) + 1;

    arr.splice(indexBomb, bombPower);
    arr.reverse();
    
    let newIndex = arr.indexOf(bombNumber) + 1;
    arr.splice(newIndex, bombPower);
    
    let arrToPrint = arr.filter(x => x != bombNumber);
    


    let sum = 0;

    for (let el of arrToPrint){
        sum+=el;
    }

    console.log(sum);


}
bombNumbers2([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

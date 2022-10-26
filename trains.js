function trains(arr){

    let vagons = arr.shift().split(' ').map(Number);
    let maxPassengers = Number(arr.shift());
    
    for(let i = 0; i < arr.length; i++){

        let commandAndCount = arr[i].split(' ');
        
        let command = commandAndCount.shift();
        let count = Number(commandAndCount.shift());

        if(command === "Add"){
            vagons.push(Number(count));
        }else{

            for(let i = 0; i < vagons.length; i++){

                if((vagons[i] + Number(command)) <= maxPassengers){
                    vagons[i]+=Number(command);
                    break;
                }
            }
        }
        
    }

   
    return vagons.join(' ');
    

}
trains(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);
function sortAddresses (input){

    let initialObject = {};

    for(line of input){
        let [name, address] = line.split(':');


        if(!initialObject[name]){
            initialObject[name] = address;
        }else{
            initialObject[name] = address;
        }


    }
    
    let arrToSort = Object.entries(initialObject);

    arrToSort.sort((a, b) => a[0].localeCompare(b[0]))

    let toPrintObject = Object.fromEntries(arrToSort);
    
    
    for(kvp in toPrintObject){
        console.log(`${kvp} -> ${toPrintObject[kvp]}`)
    }

}
sortAddresses(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);
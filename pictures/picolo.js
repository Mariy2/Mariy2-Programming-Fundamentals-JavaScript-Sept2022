function picolo(input) {

    let obj = {};


    for (line of input) {

        let [command, plate] = line.split(', ')

        switch (command) {
            case 'IN':
                obj[plate] = 0;

                break;

            case 'OUT':

                delete obj[plate];

            default:
                break;
        }
    }


    let sortedArr = Object.keys(obj);
    sortedArr.sort();


    if (sortedArr.length > 0) {
        for (plate of sortedArr) {
            console.log(plate)
        }
    }else{
        console.log(`Parking Lot is Empty`)
    }

}
picolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])
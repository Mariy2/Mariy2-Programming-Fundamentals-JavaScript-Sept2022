function arrayManipulations(arr) {

    let arrToManipulate = arr.shift().split(' ').map(Number);


    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');

        switch (command[0]) {
            case "Add": arrToManipulate.push(Number(command[1]));

                break;

            case "Remove": arrToManipulate = arrToManipulate.filter(i => i !== Number(command[1]));

                break;

            case "RemoveAt": arrToManipulate.splice(command[1], 1);

                break;

            case "Insert": arrToManipulate.splice(command[2], 0, Number(command[1]));
            default:
                break;
        }


    }

    console.log(arrToManipulate.join(' '));

}
arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])
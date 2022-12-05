function activationKeys(commands) {

    let activationKey = commands.shift();


    let currentLine = commands.shift();

    while (currentLine !== 'Generate') {

        let commandsArr = currentLine.split('>>>');

        switch (commandsArr[0]) {
            case "Contains":

                if (activationKey.includes(commandsArr[1])) {
                    console.log(`${activationKey} contains ${commandsArr[1]}`);
                } else {
                    console.log("Substring not found!")
                }
                break;

            case "Flip":
                    let upperOrLower = commandsArr[1];
                    let startIndex = Number(commandsArr[2]);
                    let endIndex = Number(commandsArr[3]);

                    if(upperOrLower === 'Upper'){
                        let partToReplace = activationKey.slice(startIndex, endIndex);
                        let toUpperToReplace = partToReplace.toUpperCase();
                        let finalString = activationKey.replace(partToReplace, toUpperToReplace);
                        activationKey = finalString;
                        console.log(activationKey);
                    }else{

                        let partToReplace = activationKey.slice(startIndex, endIndex);
                        let toLowerToReplace = partToReplace.toLowerCase();
                        let finalString = activationKey.replace(partToReplace, toLowerToReplace);
                        activationKey = finalString;
                        console.log(activationKey);
                    }

                break;

            case "Slice":

            let startIndexToSlice = Number(commandsArr[1]);
            let endIndexToSlice = Number(commandsArr[2]);
            let slicedStringOne = activationKey.slice(0, startIndexToSlice);
            let slicedStringTwo = activationKey.slice(endIndexToSlice);
            let finalStringConcatenated = `${slicedStringOne}${slicedStringTwo}`;
            activationKey = finalStringConcatenated;
            console.log(activationKey);
                
            break;
            default:
                break;
        }
        currentLine = commands.shift();

    }

    console.log(`Your activation key is: ${activationKey}`)


}
activationKeys((["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"]));
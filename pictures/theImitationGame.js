function theImitationGame(text) {

    let message = text.shift();

    let command = text.shift();

    while (command !== 'Decode') {


        let [action, indexOrSubstring, valueOrReplacement] = command.split("|");


        switch (action) {
            case "Move":
                let modifiedString = message.substring(indexOrSubstring) + message.substring(0, indexOrSubstring);
                message = modifiedString;

                break;

            case "Insert":
                let insertedString = message.slice(0, indexOrSubstring) + `${valueOrReplacement}` + message.slice(indexOrSubstring);
                message = insertedString;
                break;

            case "ChangeAll":

                let newString = '';
                while (message.includes(indexOrSubstring)) {

                    newString = message.replace(indexOrSubstring, valueOrReplacement);
                    message = newString;
                }
                message = newString;
                break;

            default:
                break;
        }

        command = text.shift();
    }

    console.log(`The decrypted message is: ${message}`);

}
theImitationGame([

    'owyouh',
    
    'Move|2',
    
    'Move|3',
    
    'Insert|3|are',
    
    'Insert|9|?',
    
    'Decode'
    
    ])
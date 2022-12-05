function fundamentalsExam1(input) {

    let text = input.shift();

    let command = input.shift();

    while (command != "Done") {

        let [action, substringOrCount, replacementOrCount] = command.split(" ");

        switch (action) {
            case "Change":
                let newText = '';
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === `${substringOrCount}`) {
                        newText += `${replacementOrCount}`;
                    } else {
                        newText += text[i];
                    }function fundamentalsExam1(input) {

    let text = input.shift();

    let command = input.shift();

    while (command != "Done") {

        let [action, substringOrCount, replacementOrCount] = command.split(" ");

        switch (action) {
            case "Change":
                let newText = '';
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === `${substringOrCount}`) {
                        newText += `${replacementOrCount}`;
                    } else {
                        newText += text[i];
                    }
                }
                text = newText;
                console.log(text);

                break;

            case "Includes":

                if (text.includes(substringOrCount)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "End":

                if (text.endsWith(substringOrCount)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "Uppercase":

                text = text.toUpperCase();
                console.log(text);

                break;

            case "FindIndex":

                let index = text.indexOf(substringOrCount);
                console.log(index);
                break;

            case "Cut":

                let cuttedText = text.substring(Number(substringOrCount), Number(substringOrCount) + Number(substringOrCount));
                console.log(cuttedText)

                break;
            default:
                break;
        }


        command = input.shift();
    }

}
                }
                text = newText;
                console.log(text);

                break;

            case "Includes":

                if (text.includes(substringOrCount)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "End":

                if (text.endsWith(substringOrCount)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "Uppercase":

                text = text.toUpperCase();
                console.log(text);

                break;

            case "FindIndex":

                let index = text.indexOf(substringOrCount);
                console.log(index);
                break;

            case "Cut":
                let endIndex = Number(substringOrCount) + Number(replacementOrCount);
                let cuttedText = text.substring(Number(substringOrCount), endIndex);
                console.log(cuttedText)

                break;
            default:
                break;
        }


        command = input.shift();
    }

}
// fundamentalsExam1((["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"])
// );

fundamentalsExam1((["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
);
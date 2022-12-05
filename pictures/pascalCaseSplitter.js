function pascalCaseSplitter(text) {

    let indexesArr = [];
    let splittedText = [];

    for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];

        if (currentChar.toLowerCase() != currentChar) {
            indexesArr.push(i);
        }
    }

    for (let i = 0; i < indexesArr.length; i++) {
        let startIndex = indexesArr[i];
        let endIndex = indexesArr[i + 1];
        

        splittedText.push(text.substring(startIndex, endIndex));

    }
    console.log(splittedText.join(', '));


}
//pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
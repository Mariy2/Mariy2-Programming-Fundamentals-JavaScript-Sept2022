function stringSubstring(word, text) {


    let lowerText = text.toLowerCase().split(' ');
    let isFound = false;
    lowerText.forEach(element => {

        if (element === word) {
            console.log(element);
            isFound = true;
        }

    });

    if (!isFound) {
        console.log(`${word} not found!`)
    }

    // if(text.toLowerCase().includes(word)){
    //     console.log(`true`)
    // }

}
stringSubstring('javascript', 'JavaScript is the best programming language');
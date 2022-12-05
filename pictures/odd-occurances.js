function oddOccurances(inputString) {

    let arrFromString = inputString.toLowerCase().split(' ');

    let objOfWords = {};

    for (word of arrFromString) {

        if (!objOfWords.hasOwnProperty(word)) {

            objOfWords[word] = 1;
        } else {
            objOfWords[word] += 1;
        }
    }
    
    let arrToIterateThrough = Object.entries(objOfWords);

    let finalString = '';

    for(kvp of arrToIterateThrough){
        if(kvp[1] % 2 != 0 ){
            finalString += `${kvp[0]} `
        }
    }

    console.log(finalString)

}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
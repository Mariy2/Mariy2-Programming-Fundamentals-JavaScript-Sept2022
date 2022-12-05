function modernTimes(text){

    let words = [];

    let wordsToCheck = text.split(' ');
    
    for(word of wordsToCheck){
        if(word.startsWith("#") && word.length > 1 && !/\d/.test(word)){
            words.push(word);
        }
    }


    words.forEach(element => {

        let elementToPrint = element.replace("#", "");
        console.log(elementToPrint);

        
    });

}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number #12vj sign');
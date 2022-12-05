function revealWords(words, sentence) {

    let wordsToReplace = words.split(', ');

    let arrToIterate = sentence.split(' ');

    let changedArr = [];

    for (word of arrToIterate) {

        changedArr.push(word);

        for(replace of wordsToReplace){
            if(replace.length === word.length && word.includes('*')){
                changedArr.splice(changedArr.indexOf(word), 1, replace)
            }
        }


    }
    console.log(changedArr.join(' '));

}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
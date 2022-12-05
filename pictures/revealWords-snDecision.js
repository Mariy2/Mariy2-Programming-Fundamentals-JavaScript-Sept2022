function revealWordssnDecision(word, text){

    const wordsToReplace = word.split(', ');
    
    
    wordsToReplace.forEach(word => {

        let match = "*".repeat(word.length);
        
        text = text.replace(match, `${word}`);
        
    });

    console.log(text)

}
revealWordssnDecision('great, learning', 'softuni is ***** place for ******** new programming languages');
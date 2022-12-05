function censoredWord(sentence, word){

    let wordLength = word.length;
    let replacementString = "*".repeat(wordLength);
    let newSentence = sentence.replaceAll(word, replacementString);
    console.log(newSentence);
    
}
censoredWord('A small sentence with some words',

'small');
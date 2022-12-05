function stringOccurrences(sentence, word) {


    let arr = sentence.split(' ');
    counter = 0;

    for (questionWord of arr) {

        if(questionWord === word){
            counter+=1;
        }

    }
    console.log(counter);


}
stringOccurrences('This is a word and it also is a sentence',

    'is')
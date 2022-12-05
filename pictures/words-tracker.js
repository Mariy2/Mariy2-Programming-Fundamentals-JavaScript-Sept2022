function wordsTracker(arr) {

    let wordsToSearch = arr.shift().split(' ');
    let objectOfWords = {};
    
    for(word of wordsToSearch){

        objectOfWords[word] = 0;

    }
    
    
    for(word of arr){
        if(objectOfWords.hasOwnProperty(word)){
            objectOfWords[word]+=1;
        }
    }

    let arrToSort = Object.entries(objectOfWords);
    arrToSort.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for([word, count] of arrToSort){
        console.log(`${word} - ${count}`);
    }


}
wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

]);

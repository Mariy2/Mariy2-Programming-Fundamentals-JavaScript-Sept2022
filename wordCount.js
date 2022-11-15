function wordCount(input){

    let obj = {};


    input.forEach(word => {

        if(!obj.hasOwnProperty(word)){

            obj[word] = 1;

        }else{
            obj[word]+=1;
        }
        
    });

    let arrToSort = Object.entries(obj);
    arrToSort.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);
    
    for([word, count] of arrToSort){

        console.log(`${word}: ${count} times`)
    }
}


wordCount(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);
function rightPlace(first, second, third){

    let firstString = first;
    let toReplaceWith = second;
    let toCompareTo = third;

    let result = firstString.replace(`_`, second);

    if(result === toCompareTo){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }

}
rightPlace('Str_ng', 'I',

'Strong');
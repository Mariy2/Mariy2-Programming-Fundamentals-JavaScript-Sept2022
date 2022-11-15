function convert (input){

    let info = JSON.parse(input);
    
    
    for (key of Object.keys(info)){
        console.log(`${key}: ${info[key]}`)
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
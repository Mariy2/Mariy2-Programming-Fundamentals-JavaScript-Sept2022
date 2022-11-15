function convert(firstName, lastName, hairColor) {

    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,

    };
    
    let toPringJson = JSON.stringify(info);
    console.log(toPringJson);


}
convert('George', 'Jones', 'Brown')
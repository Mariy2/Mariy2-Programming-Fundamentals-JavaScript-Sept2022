function ascii(firstCharacter, secondCharacter) {

    let rangeStart = firstCharacter.charCodeAt();
    let rangeStop = secondCharacter.charCodeAt();

    let arrOfChars = [];

    if (rangeStart < rangeStop) {

        for (let i = rangeStart + 1; i < rangeStop; i++) {


            let char = String.fromCharCode(i);
            arrOfChars.push(char);

        }

    }else{
        for (let i = rangeStop + 1; i < rangeStart; i++) {


            let char = String.fromCharCode(i);
            arrOfChars.push(char);

        }

    }
    console.log(arrOfChars.join(' '));


}
ascii('C', '#')
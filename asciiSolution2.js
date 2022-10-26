function ascii(firstChar, secondChar) {

    let rangeStart = firstChar.charCodeAt();
    let rangeStop = secondChar.charCodeAt();

    function firstCharIsBigger(rangeStart, rangeStop) {
        let arrOfChars = [];

        for (let i = rangeStop + 1; i < rangeStart; i++) {


            let char = String.fromCharCode(i);
            arrOfChars.push(char);

        }
        return arrOfChars;
    }

    console.log(firstCharIsBigger(rangeStart, rangeStop));

}
ascii('C', '#');
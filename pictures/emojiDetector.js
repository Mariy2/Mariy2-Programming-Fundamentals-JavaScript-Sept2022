function emojiDetector(text) {

    const patternForNumbers = /[0-9]/g;
    const namePattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let allNumbers = text[0].match(patternForNumbers);
    let stringToMatch = text[0];

    let coolTreshold = Number(allNumbers.shift());

    for (i = 0; i < allNumbers.length; i++) {
        coolTreshold *= Number(allNumbers[i]);
    }

    const emojyNames = [...stringToMatch.matchAll(namePattern)];

    let emojyObject = {};
    let emojyCounter = 0;

    emojyNames.forEach(emojy => {

        let emojyName = emojy.groups['name'];
        let coolnessSum = 0;

        for (let i = 0; i < emojyName.length; i++){

            let toSum = Number(emojyName.charCodeAt(i));
            coolnessSum+=toSum;
        }
        if(coolnessSum >= coolTreshold){
        emojyObject[emojy[0]] = coolnessSum;
        
        }
        emojyCounter+=1;
    });

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojyCounter} emojis found in the text. The cool ones are:`);

    for(emojy in emojyObject){
        console.log(emojy);
    }


}
emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana- eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));
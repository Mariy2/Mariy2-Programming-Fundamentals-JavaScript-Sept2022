// // //indexoOf and lastIndexOf

// // let msg = "I am writing this text so I can test text string prototype methods text on it";

// // let textIndex = msg.indexOf('text');
// // let lastIndexOfText = msg.lastIndexOf('text');
// // let middleIndexOfTest = msg.indexOf('text', textIndex + 1);
// // let missingWord = msg.indexOf('Ivan');

// // //first text
// // console.log(textIndex)
// // //last text
// // console.log(lastIndexOfText)
// // //middle text
// // console.log(middleIndexOfTest);
// // //missing word
// // console.log(missingWord);

// // let index = msg.indexOf('text');

// // // while(index >= 0){
// // //     console.log(`Dolor found on ${index} position`);
// // //     index = msg.indexOf("text", index + 1);
// // // }

// // // subString();

// // let textToManupulate = "Ivan otide za banichki do banicharnicata";
// // let cutted = textToManupulate.substring(textToManupulate.indexOf('otide'), textToManupulate.indexOf('za') - 1);
// // console.log(cutted)

// // //replace();

// // let toReplace = "Testvam da vidq dali moga da izpolzva replace vidq kato horata";
// // let replacedSentence = toReplace.replaceAll('vidq', 'razbera');
// // console.log(replacedSentence)

// // //split & includes

// // let lorem = "Pak nqkakvo shano izrechenie, za da testvam vurhu nego";
// // let splittedLorem = lorem.split(', ');
// // console.log(splittedLorem);
// // console.log(lorem.includes('Pak'));
// // console.log(splittedLorem[0].includes('Pak'));

// // //repeat

// // let char = "*";

// // console.log(char.repeat(3));

// // //trimming Strings

// // let name = "Ivan Mihaylov ";

// // let trimmedUsername = name.trim();
// // console.log(trimmedUsername);
// // // I can use trimStart and trimEnd to trim the respective side of the string.

// // //startsWith and endsWith

// // let random = 'S kakvo zapochva tova';

// // console.log(random.startsWith("S"));
// // console.log(random.endsWith("a"));


// // // padStart and padEnd can add something to the begining or the end of the string

// // //testing only

// // let sentence = 'Ivan otiva do magazina';
// // console.log(sentence.indexOf('magazina'));

// // let cut = sentence.substring(sentence.indexOf('magazina'), 'test');
// // console.log(cut)


// // let toSee = 'dasddsadsasa'; //3 , 6
// // let toSlice = toSee.slice(3, 6);
// // let toUpper = toSlice.toUpperCase();

// // let finalString = toSee.replace(toSlice, toUpper);
// // toSee = finalString;
// // console.log(toSee)



// let cycle = [1, 2, 3, 4, 150, 5, 6, 'command'];

// let cycleTest = cycle.shift();

// while(cycleTest != 'command'){
//     console.log(cycleTest)
//     if(cycleTest === 150){
//         console.log('error');
        
//     }
//     cycleTest = cycle.shift();
// }

// let word = 'Ivan';
// let newWord = word.slice(0, 1) + "Hi" + word.slice(2);
// console.log(newWord)





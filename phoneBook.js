function phoneBook(input) {

    let phoneBook = {};

    for (let line of input) {

        let dataArr = line.split(' ');

        phoneBook[dataArr[0]] = dataArr[1];

    }

    for(person in phoneBook){
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']);
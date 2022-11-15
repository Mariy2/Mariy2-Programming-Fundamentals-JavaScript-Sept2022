let obj = {Tim: 1,

    Peter: 5,

    Bill: 3,

    };
   
    let entries = Object.entries(obj);
   
    entries.sort((keyA, keyB) => keyA[1] - keyB[1]);

    entries.reverse()

    let sortedObj = Object.fromEntries(entries);
    console.log(sortedObj)
// function palindrom(arr){

  
//     for(let i = 0; i < arr.length; i++){

//         let num = arr[i];
//         let numToString = arr[i].toString();
//         let newString = '';

//        for(let y = numToString.length - 1; y >= 0; y--){   

//         newString+=numToString[y];
        
//        }

//        if(numToString === newString){
//         console.log('true')
//        }else{
//         console.log('false')
//        }
        
//     }
    
// }
// palindrom([123,323,421,121])

let word = 'Text'
let reversedWord = word.split('').reverse().join('');
console.log(reversedWord)
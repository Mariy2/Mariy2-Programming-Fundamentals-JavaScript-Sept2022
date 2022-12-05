function reverseString(text){

    let revsedString = [...text].reverse().join("");
    
    let lengthOfString = revsedString.length;

    let firstHalf = revsedString.substring(0, lengthOfString/2);
    let secondHalf = revsedString.substring(lengthOfString/2);
    console.log(secondHalf);
    console.log(firstHalf);

}
reverseString('tluciffiDsIsihTgnizamAoSsIsihT');
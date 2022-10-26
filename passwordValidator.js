function passwordValidator(str) {

    let specialCharsCount = false;
    let digitCount = 0;


    for (let i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() === str[i].toUpperCase() && isNaN(str[i])) {
            specialCharsCount = true;
        } if (!isNaN(str[i])) {
            digitCount += 1;
        }


    }

    if (str.length >= 6 && str.length <= 10 && specialCharsCount === false && digitCount >= 2){
        console.log(`Password is valid`)
    }else{

        if(str.length < 6 || str.length > 10){
            console.log(`Password must be between 6 and 10 characters`)
        }if(specialCharsCount === true){
            console.log(`Password must consist only of letters and digits`)
        }if(digitCount < 2){
            console.log(`Password must have at least 2 digits`)
        }
    }
    

}
passwordValidator('Pa$s$s');
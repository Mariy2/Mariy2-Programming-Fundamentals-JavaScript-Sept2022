function matchPhoneNumber(numbers) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let text = numbers.shift();
    let resultArr = text.match(pattern);
    console.log(resultArr.join(', '));

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
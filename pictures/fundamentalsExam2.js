function fundamentalsExam2(input) {

    let passwordCount = Number(input.shift());
    const pattern = /(\w+|\W+)>(?<numbers>[\d]+)\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symbols>[^<>]{3})<\1/g;


    for (let i = 0; i < passwordCount; i++) {
        let text = input[i];
        let finalPassword = '';

        if (text.match(pattern)) {

            let allMatches = [...text.matchAll(pattern)];

            let numbers = '';
            let lower = '';
            let upper = '';
            let symbols = '';

            allMatches.forEach(element => {

                numbers = element.groups['numbers'];
                lower = element.groups['lower'];
                upper = element.groups['upper'];
                symbols = element.groups['symbols'];

            });

            let finalPassword = numbers + lower + upper + symbols;
            console.log(`Password: ${finalPassword}`);


        } else {
            console.log("Try another password!")
        }
    }


}
// fundamentalsExam2((["3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"])
// );
fundamentalsExam2([5, "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"]);
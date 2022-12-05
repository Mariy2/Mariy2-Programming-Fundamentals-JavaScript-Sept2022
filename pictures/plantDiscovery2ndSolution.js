function plantDiscovery2ndSolution(input) {

    let plantCount = Number(input.shift());

    const plantBook = {};

    for (let i = 0; i < plantCount; i++) {
        let currentRow = input.shift();
        let [plantName, rarity] = currentRow.split('<->');

        plantBook[plantName] = {
            rarity: rarity,
            rating: [],
        };
    }


    let command = input.shift();

    while (command !== 'Exhibition') {

        let [action, plantNumber] = command.split(": ");
        let [name, number] = plantNumber.split(" - ");

        if (!plantBook[name]) {
            console.log("error");
            command = input.shift();
            continue;
        }

        switch (action) {
            case "Rate":
                plantBook[name].rating.push(Number(number));

                break;

            case "Update":
                plantBook[name].rarity = number;
                break;

            case "Reset":
                plantBook[name].rating = [];
                break;
            default:
                break;
        }


        command = input.shift();
    }




    for (plant in plantBook) {

        let ratingSum = 0;
        let ratingCounter = 0;

        if (plantBook[plant].rating.length === 0) {
            plantBook[plant].rating = 0;
        } else {

            for (rating of plantBook[plant].rating) {

                ratingCounter++;
                ratingSum += Number(rating);
            }

            plantBook[plant].rating = ratingSum / ratingCounter;

        }


    }


    console.log("Plants for the exhibition:");
    for (plant in plantBook) {
        console.log(`- ${plant}; Rarity: ${plantBook[plant].rarity}; Rating: ${plantBook[plant].rating.toFixed(2)}`)
    }



}
plantDiscovery2ndSolution((["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]))
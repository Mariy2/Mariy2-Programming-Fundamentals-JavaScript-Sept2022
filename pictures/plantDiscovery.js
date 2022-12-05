function plantDiscovery(input) {

    let plantCount = Number(input.shift());
    let plantObject = {};

    for (let i = 0; i < plantCount; i++) {
        let currentPlant = input.shift();
        let [name, rarity] = currentPlant.split('<->');

        plantObject[name] = [rarity];
    }


    let command = input.shift();

    while (command !== 'Exhibition') {


        let [action, nameAndRating] = command.split(': ');
        let [name, rating] = nameAndRating.split(' - ');

        if(!plantObject[name]){
            console.log("error");
            command = input.shift();
            continue;

        }

        switch (action) {
            case "Rate":
                plantObject[`${name}`].push(Number(rating));

                break;

            case "Update":
                plantObject[`${name}`].shift();
                plantObject[`${name}`].unshift(rating);

                break;

            case "Reset":

                plantObject[`${name}`].splice(1);

                break;

            default:
                break;
        }

        command = input.shift();
    }



    let plantArr = Object.entries(plantObject);

    for (plant of plantArr) {

        if (plant[1].length <= 1) {
            plant[1].push(0);
        } else {
            let allRatings = plant[1].splice(1);
            let totalRating = 0;
            let ratingCounter = 0;

            for (rating of allRatings) {
                ratingCounter++;
                totalRating += Number(rating);
            }

            plant[1].push(totalRating/ratingCounter);
        }

    }
    console.log("Plants for the exhibition:")

    for(plant of plantArr){
        let plantName = plant[0];
        let plantScores = plant[1];
        let plantRarity = plantScores[0];
        let plantRating = plantScores[1].toFixed(2);

       console.log(`- ${plantName}; Rarity: ${plantRarity}; Rating: ${plantRating}`);
        
    }

}
plantDiscovery((["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]));
// plantDiscovery((["2",

//     "Candelabra<->10",

//     "Oahu<->10",

//     "Rate: Oahu - 7",

//     "Rate: Candelabra - 6",

//     "Exhibition"]))
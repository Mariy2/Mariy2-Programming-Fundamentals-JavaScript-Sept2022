function pirates(input) {

    const infoObject = {};

    let command = input.shift();

    while (command != "Sail") {

        let [cityName, population, gold] = command.split("||");

        if (!infoObject[cityName]) {
            infoObject[cityName] = {
                population: Number(population),
                gold: Number(gold),
            }

        } else {
            infoObject[cityName].population += Number(population);
            infoObject[cityName].gold += Number(gold);
        }


        command = input.shift();
    }

    command = input.shift();

    while (command != 'End') {

        let [action, town, peopleOrGold, gold] = command.split("=>");

        switch (action) {
            case "Plunder":

                infoObject[town].population -= Number(peopleOrGold);
                infoObject[town].gold -= Number(gold);
                console.log(`${town} plundered! ${gold} gold stolen, ${peopleOrGold} citizens killed.`);

                if (infoObject[town].population <= 0 || infoObject[town].gold <= 0) {
                    delete infoObject[town];
                    console.log(`${town} has been wiped off the map!`)
                }

                break;

            case "Prosper":

                if (Number(peopleOrGold) > 0) {
                    infoObject[town].gold += Number(peopleOrGold);
                    console.log(`${peopleOrGold} gold added to the city treasury. ${town} now has ${infoObject[town].gold} gold.`)
                } else {
                    console.log("Gold added cannot be a negative number!")
                    command = input.shift();
                    continue;
                }


                break;

            default:
                break;
        }


        command = input.shift();
    }

    if (Object.keys(infoObject).length > 0) {
        let cityCount = Object.keys(infoObject).length;
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);
        for (town in infoObject) {
            console.log(`${town} -> Population: ${infoObject[town].population} citizens, Gold: ${infoObject[town].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }



}
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]));
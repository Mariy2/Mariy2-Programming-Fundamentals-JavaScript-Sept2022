function fundamentalsExam3(input) {

    const guestsAndMeals = {};

    let command = input.shift();
    let badMealCounter = 0;

    while (command != 'Stop') {

        let [preference, name, meal] = command.split("-");

        switch (preference) {
            case "Like":

               if(guestsAndMeals[name] && !guestsAndMeals[name].includes(meal)){
                guestsAndMeals[name].push(meal);
                
               }else if(!guestsAndMeals[name]){
                guestsAndMeals[name] = [meal];
               }
                break;

            case "Dislike":

                
                if(!guestsAndMeals[name]){
                    console.log(`${name} is not at the party.`)
                }else if(guestsAndMeals[name].includes(meal)){
                    let indexOfMeal = guestsAndMeals[name].indexOf(meal);
                    guestsAndMeals[name].splice(indexOfMeal, 1);
                    console.log(`${name} doesn't like the ${meal}.`); 
                    badMealCounter+=1;
                }else if(!guestsAndMeals[name].includes(meal)){
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`)
                }

                break;

            default:
                break;
        }


        command = input.shift();
    }


    for(guest in guestsAndMeals){
        console.log(`${guest}: ${guestsAndMeals[guest].join(", ")}`);
    }
    console.log(`Unliked meals: ${badMealCounter}`);

}
fundamentalsExam3((["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])
);
// fundamentalsExam3((["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"])
// );
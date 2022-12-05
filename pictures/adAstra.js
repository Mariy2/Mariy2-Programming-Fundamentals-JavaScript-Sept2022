function adAstra(text) {

    const pattern = /(?<p>((#{1}|\|{1})))(?<name>[A-Z\sa-z]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d+)\1/g;
    const inputString = text[0];
    

    const foodArr = [...inputString.matchAll(pattern)];

    let totalCalories = 0;
    let caloriesPerDay = 2000;

    foodArr.forEach(food => {

        let foodCalories = food.groups['calories'];
        totalCalories += Number(foodCalories);
    })

    const daysLasted = totalCalories / caloriesPerDay;

    console.log(`You have food to last you for: ${Math.floor(daysLasted)} days!`);



    foodArr.forEach(food => {



        let foodName = food.groups['name'];
        let expirtionDate = food.groups['date'];
        let calories = food.groups['calories'];

        console.log(`Item: ${foodName}, Best before: ${expirtionDate}, Nutrition: ${calories}`);

    });


}
 adAstra([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500000||Not right|6.8.20|5|'

 ])
// adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
// adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
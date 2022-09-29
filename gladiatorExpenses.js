function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {


    let helmetTrashed = 0;
    let swordTrashed = 0;
    let shieldTrashed = 0;
    let armorTrashed = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        let isHelmetTrashed = false;
        let isSwordTrashed = false;

        if (i % 2 === 0) {
            isHelmetTrashed = true;
            helmetTrashed += 1;
        } if (i % 3 === 0) {
            isSwordTrashed = true;
            swordTrashed += 1;
        } if(isHelmetTrashed && isSwordTrashed){
            shieldTrashed +=1;
            if(shieldTrashed % 2 === 0){
                armorTrashed +=1;
            }
        }
    }

    console.log(`Gladiator expenses: ${((helmetPrice * helmetTrashed) + (swordPrice * swordTrashed) + (shieldPrice * shieldTrashed) + (armorPrice * armorTrashed)).toFixed(2)} aureus`)

}
gladiatorExpenses(23,

    12.50,
    
    21.50,
    
    40,
    
    200);
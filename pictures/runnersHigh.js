function runnersHigh(input) {

    let patternName = /[^A-Za-z]+/g;
    let patternDistance = /[\D]/g;
    let text = 'G4e@55or%6g6!68e!!@ ';

    let objOfRacers = {};
    let racers = input.shift().split(', ');

    for (let i = 0; i < racers.length; i++) {

        let currentRacer = racers[i];
        objOfRacers[currentRacer] = 0;
    }


    let index = 0;

    while (input[index] !== 'end of race') {
        let command = input[index];

        let racerName = command.replace(patternName, "");
        let racerDistanceSplitted = command.replace(patternDistance, "");
        let totalDistance = 0;

        for (let i = 0; i < racerDistanceSplitted.length; i++) {

            totalDistance+=Number(racerDistanceSplitted[i]);

        }
        
       
        if(objOfRacers.hasOwnProperty(`${racerName}`)){
            objOfRacers[racerName] += totalDistance;
        }

        index++
    }

    let arrOfRacers = Object.entries(objOfRacers);
    arrOfRacers.sort((a, b) => b[1] - a[1]).splice(3);
    let onlyNamesOfRacers = [];

    for(racer of arrOfRacers){
        onlyNamesOfRacers.push(racer[0]);
    }
    
    console.log(`1st place: ${onlyNamesOfRacers[0]}`);
    console.log(`2nd place: ${onlyNamesOfRacers[1]}`);
    console.log(`3rd place: ${onlyNamesOfRacers[2]}`);




 }
// runnersHigh(['George, Peter, Bill, Tom',

//     'G4e@55or%6g6!68e!!@ ',

//     'R1@!3a$y4456@',

//     'B5@i@#123ll',

//     'G@e54o$r6ge#',

//     '7P%et^#e5346r',

//     'T$o553m&6',

//     'end of race'])

runnersHigh(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])

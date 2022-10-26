function movingTarget(arr) {

    let targets = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {

        let shootingComands = arr[i].split(' ');
        let command = shootingComands[0];
        let index = Number(shootingComands[1]);
        let change = Number(shootingComands[2]);

        switch (command) {
            case "Shoot":
                if (targets[index]) {
                    targets[index] -= change;
                } if (targets[index] <= 0) {

                    targets.splice(index, 1);
                }

                break;

            case 'Add':

                if (targets[index] > 0) {
                    targets.splice(index,0 , change);
                } else {
                    console.log(`Invalid placement!`)
                }
                break;

                case 'Strike': 
                let radius = change;

                let lowerIndex = index - radius;
                let upperIndex = index + radius;

                if(targets[lowerIndex] && targets[upperIndex]){
                    targets.splice(lowerIndex, radius * 2 + 1)
                }else{
                    console.log('Strike missed!')
                }
            
                break;

                case 'End': break;

            default:
                break;
        }



    }
    console.log(targets.join('|'))



}
movingTarget((["52 74 23 44 96 110",

    "Shoot 5 10",

    "Shoot 1 80",

    "Strike 2 1",

    "Add 22 3",

    "End"]))
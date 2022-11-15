function town (input){

    class Town {
        constructor(name, langitude, longitude){
            this.name = name;
            this.latitude = langitude;
            this.longitude = longitude;
        }
    }

    let townsList = [];
    let newTown ={};

    for(line of input){
        let splitted = line.split(' | ');
        let townName = splitted[0];
        let latitudeTown = Number(splitted[1]);
        let longitudeTown = Number(splitted[2]);

        // let newTown = new Town(townName,latitudeTown.toFixed(2),longitudeTown.toFixed(2));
        // townsList.push(newTown);
        newTown.town = townName;
        newTown.latitude = latitudeTown.toFixed(2);
        newTown.longitude = longitudeTown.toFixed(2);

        console.log(newTown)
        
    }

    

 
   
    

}
town(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);
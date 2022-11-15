function songs(input) {

    class Songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let numberSongs = input[0];
    let arrSongs = [];

    for (let i = 1; i <= numberSongs; i++) {

        let currentSong = input[i].split('_');
        
        let type = currentSong[0];
        let name = currentSong[1];
        let time = currentSong[2];
        let song = new Songs(type,name,time)
        arrSongs.push(song);       

    }
    
    let lastInput = input[input.length - 1];

    if(lastInput === 'all'){
        arrSongs.forEach(i => console.log(i.name));
    }else{
        let filtered = arrSongs.filter(i => i.type === lastInput);
        filtered.forEach(i => console.log(i.name));
    }


}
songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite']);
function inventory(arr){

    
    class Hero{
        constructor(name, level, items){
            this.Hero = name;
            this.level = level;
            this.items = items;
        }
    }
    let allHeroes = [];

    arr.forEach(line => {
        
        let info = line.split(' / ');
        allHeroes.push(new Hero(info[0], info[1], info[2]))
        
    });

    allHeroes.sort((a, b) => a.level - b.level)

    for(hero of allHeroes){
        console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items} `)
    }
    
    
}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);
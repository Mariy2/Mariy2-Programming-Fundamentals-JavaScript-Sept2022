function classCat(input) {

   class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
   }

   for(let line of input){
    
    let commands = line.split(' ');
    let name = commands[0];
    let age = commands[1];

    let cat =new Cat(name, age);
    
    cat.meow()
   }
    

}

classCat(['Mellow 2', 'Tom 5'])
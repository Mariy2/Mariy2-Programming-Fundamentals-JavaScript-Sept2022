function meetings(input){

    let appointments = {};

    for (let line of input) {

        let [day,name] = line.split(' ');

        if(!appointments.hasOwnProperty(day)){
            appointments[day] = name;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
        }
        
    }
    
    for(let [name, day] of Object.entries(appointments)){
        console.log(`${name} -> ${day}`)
    }
    
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])
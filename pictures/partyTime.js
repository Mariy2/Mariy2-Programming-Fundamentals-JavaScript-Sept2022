function partyTime(allGuests) {

    let vipGuests = [];
    let normalGuests = [];

    let index = 0;
    let currentGuest = allGuests[index];

    while (currentGuest != 'PARTY') {

        if (isNaN(currentGuest[0])) {
            
            normalGuests.push(currentGuest);
            
        } else if(!isNaN(currentGuest[0])) {
            
            vipGuests.push(currentGuest);
            
        }
        index++;
        currentGuest = allGuests[index];

    }

    let finalGuestList = vipGuests.concat(normalGuests);
    let guestsThatCame = allGuests.slice(allGuests.indexOf('PARTY') + 1);
    
    for(guest of guestsThatCame){
        finalGuestList.splice(finalGuestList.indexOf(guest), 1);
    }
    
    console.log(finalGuestList.length);
    for (guest of finalGuestList){
        console.log(guest)
    }
    
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
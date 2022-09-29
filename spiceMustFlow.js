function spiceMustFlow(yield) {


    let operatingDays = 0;
    let spiceFarmed = 0;

    while (yield >= 100) {

        operatingDays += 1;
        spiceFarmed += yield;

        yield -= 10;

        if (spiceFarmed >= 26) {
            spiceFarmed -= 26;
        }

    }
    if (spiceFarmed >= 26) {
        spiceFarmed -= 26;
    }
    console.log(operatingDays)

    console.log(spiceFarmed)

}
spiceMustFlow(450);
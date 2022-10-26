function blackFlag(arr) {

    let daysPlundering = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let goalPlunder = Number(arr[2]);

    let plundered = 0;
    let daysCount = 0;

    for (let i = 1; i <= daysPlundering; i++) {
        daysCount += 1;
        plundered += dailyPlunder;

        if (daysCount % 3 === 0) {
            plundered += dailyPlunder / 2;

        }  if (daysCount % 5 === 0) {
            plundered -= plundered * 0.3;
        }
    }

    if (plundered >= goalPlunder) {
        console.log(`Ahoy! ${plundered.toFixed(2)} plunder gained.`)
    } else {

        let percentageLeft = (plundered / goalPlunder) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`)
    }


}

blackFlag((["10", "20", "380"]));


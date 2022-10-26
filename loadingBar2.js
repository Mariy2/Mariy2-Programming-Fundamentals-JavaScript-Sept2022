function loadingBar(number){

    let percentToAdd = '%'.repeat(number/10);
    let dotsToAdd = '.'.repeat(10 - (number/10));

    if(number === 100){
        console.log(`[${percentToAdd}${dotsToAdd}]`)
    }else{
        console.log(`[${percentToAdd}${dotsToAdd}]`)
    }
}
loadingBar(30);
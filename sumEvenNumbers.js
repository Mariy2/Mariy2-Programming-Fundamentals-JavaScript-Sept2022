function sum(numbers){
    let sum = 0;


    for (let number of numbers){

        if(Number(number) % 2 === 0){
            sum+=Number(number);
        }

    }
    console.log(sum);

}
sum(['1','2','3','4','5','6']);
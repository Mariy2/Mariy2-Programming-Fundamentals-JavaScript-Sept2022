function solve(a, b, c) {


    function add(a, b) {
        return a + b;
    }
    let resultAdd = add(a, b);

    function subtract(resultAdd, c){
        return resultAdd - c;
    }

    console.log(subtract(resultAdd, c))



}
solve(23,

    6,

    10)
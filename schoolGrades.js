function schoolGrades(input) {

    let studentsGradesArr = {};
    let studentsGradesCount = {};

    for (line of input) {
        let arr = line.split(' ');
        let name = arr.shift();
        let sumScore = 0;
        let gradesCount = 0;

        for (let i = 0; i < arr.length; i++) {
            sumScore += Number(arr[i]);
            gradesCount += 1;

        }

        if (!studentsGradesArr.hasOwnProperty(name)) {
            studentsGradesArr[name] = sumScore;
            studentsGradesCount[name] = gradesCount;

        } else {
            studentsGradesArr[name] += sumScore;
            studentsGradesCount[name] += gradesCount;
        }
    }

    for (line in studentsGradesArr) {

        studentsGradesArr[line] /= studentsGradesCount[line];

    }

    let arrToSort = Object.entries(studentsGradesArr);
    arrToSort.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for([name, grade] of arrToSort){
        console.log(`${name}: ${grade.toFixed(2)}`)
    }


}
schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])
function certificate(grade, names){

    
    checkGrade(grade);

}
function checkGrade(grade){

    let gradeAnnonation = '';

    if(grade < 3){
        gradeAnnonation = 'Fail'
    }else if(grade < 3.50){
        gradeAnnonation = 'Poor'
    }else if(grade < 4.50){
        gradeAnnonation = 'Good'
    }else if(grade < 5.50){
        gradeAnnonation = 'Very good'
    }else if(grade >= 5.50){
        gradeAnnonation = 'Excellent'
    }

    if(gradeAnnonation === 'Fail'){
        grade = 2;
        console.log(`${gradeAnnonation} (${grade})`)
    }else{
        console.log(`${gradeAnnonation} (${grade.toFixed(2)})`);
    }

}



certificate(5, ['Pesho', 'Goshev']);


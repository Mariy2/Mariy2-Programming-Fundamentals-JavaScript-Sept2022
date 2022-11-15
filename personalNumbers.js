function personalNumbers(employesArr){

    class Employees{
        constructor(name, numberLength){
            this.name=name;
            this.numberLength = numberLength;
        }
    }

    let employeeList = [];

    for(let i = 0; i < employesArr.length; i++){
        let name = employesArr[i];
        let number = employesArr[i].length;

        let newEmployee = new Employees(name,number);
        employeeList.push(newEmployee);
    }

    
    for(employee of employeeList){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.numberLength}`)
    }

}
personalNumbers([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])
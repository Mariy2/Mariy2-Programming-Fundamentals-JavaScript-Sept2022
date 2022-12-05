function company(inputArr){

    let obj = {};


    for(kvp of inputArr){
        let [company, employee] = kvp.split(' -> ');
        
        if(!obj.hasOwnProperty(company)){
            obj[company] = `${employee} `
        }else if(obj.hasOwnProperty(company) && !obj[company].includes(`${employee}`)){
            obj[company] += `${employee} `
        }
    }

    
    let sortedArr = Object.entries(obj).sort();
    
    for(i of sortedArr){
        
        let [company, emp] = [i[0], i[1]];
        let employees = emp.split(' ');
        employees.pop();
        
        console.log(company);

        employees.forEach(empl => {

            console.log(`-- ${empl}`)
            
        });
        
    }

   

}
company(['SoftUni -> AA12345',
 'SoftUni -> CC12344',
  'Lenovo -> XX23456',
   'SoftUni -> AA12345',
    'Movement -> DD11111']);
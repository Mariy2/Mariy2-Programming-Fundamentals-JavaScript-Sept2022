function matFullName(names){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let namesArr = names.match(pattern);
    
    console.log(namesArr.join(' '));

}
matFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
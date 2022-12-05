function extractFile(fullFileName){

    let allWords = fullFileName.split('\\');
    
    let fileName = [];

    for(file of allWords){

        if(file.includes(".")){
            fileName.push(file);
        }
    }
    
        let endIndex = fileName[0].lastIndexOf(".");
       
        let nameFile = fileName[0].slice(0, endIndex);
        let extensionName = fileName[0].slice(endIndex + 1);
        
        console.log(`File name: ${nameFile}`);
        console.log(`File extension: ${extensionName}`);


}
extractFile('C:\\Internal\\training-internal\\Template.pptx.alo');
const testFolder = './data';
const fs = require('fs');

fs.readdir(testFolder, function(error,filetest){
    console.log(filetest);
})
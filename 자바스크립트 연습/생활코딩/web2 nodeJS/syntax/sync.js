var fs = require('fs');

//readFileSync 동기적
// console.log('A')
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C')

// 비동기적으로 처리할거임
console.log('A')
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err,result){
    console.log(result);
});
console.log('C')
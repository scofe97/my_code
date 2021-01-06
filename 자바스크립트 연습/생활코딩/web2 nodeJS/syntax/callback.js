// function a(){
//     console.log('A');
// }

// 자바스크립트에서는 함수가 값으로 될수도 있음
var a = function(){
    console.log('A');
}

// 오래걸린다 가정
function slowfunc(callback){
    callback();
}

// 콜백형태 (함수를 인자로가짐)
slowfunc(a);
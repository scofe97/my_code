'use strict';

// var 안쓰는이유
// 선언하기도 전에 정의될수 있기 때문
// var hoistion -> 어디에 선언하든 상관없이 가장위로 올려줌

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// 서로 다르다 나옴

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// 같다고 나옴

console.log(`value:${symbol1.description}, type${typeof symbol}`)
// description으로 문자열로 바꿔서 출력해줘야함
// 바로출력하면 에러발생

// 다이나믹 타이핑

//3. Default parameters
function showMessage(message, from){
    if(from === underfined){
        from = "unknown";
    }
    console.log(`${message} by ${from}`)
}

function showMessage(message, from = 'unknown'){
    if(from === underfined){
        from = "unknown";
    }
    console.log(`${message} by ${from}`)
}

const array = [1,2,3,4,5]

// Rest Parameter
for (let i=0; i<array.length; i++){
    console.log(array[i])
}

for(const arg of array){
    console.log(arg)
}

array.forEach((arg) => console.log(arg))


function randomQuiz(answer, printYes, printNo){
    if ( answer == 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes');
}

const printNo = function(){
    console.log('no');
}

randomQuiz('wrong',printYes,printNo)
randomQuiz('love you',printYes,printNo)

// arrow function
const simplePrint =  () => console.group('simplePirnt!')
const add = (a, b) => a+b;

//IIFE
(function hello(){
    console.log('IIFE')
})()
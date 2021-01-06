// html 태그 추가하는 부분
// const body = document.body;
// const node = document.createElement('div');
// node.textContent = '응애';
// document.body.append(node);
// const form = document.createElement('form');
// document.body.append(form);

// const inputSpace = document.createElement('input');
// form.append(inputSpace);

// const button = document.createElement('button');
// button.textContent = "입력";
// form.append(button);

// const result = document.createElement('div');
// form.append(result);



// 콜백함수 ( function부분 )
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     // 기존의 이벤트형식을 막음
//     // 새로고침을 막기위해 넣어줌 ( submit의 기본은 페이지 이동이라 새로고침됨 )
//     let count = node.textContent.length;
//     if (node.textContent[count - 1] === inputSpace.value[0]){
//         result.textContent = '딩동댕';
//         node.textContent = inputSpace.value;
//         inputSpace.value ='';
//         inputSpace.focus();
//     }else{
//         result.textContent = '땡';
//     }
// })

// 끝말잇기 
// while(true){
//     let answer = prompt(word);
//     count = word.length
//     if (word[count -1] === answer[0]){
//         alert('딩동댕');
//         word = answer;
//     }else{
//         alert("땡");
//     }
// }

// 구구단
let number1 = Math.ceil(Math.random()*9);
let number2 = Math.ceil(Math.random()*9);
let resultNumber = number1 * number2;

const body = document.body;
const text = document.createElement('div');
text.textContent = `${number1} 곱하기 ${number2} 는?`;
document.body.append(text);

const form = document.createElement('form');
document.body.append(form);

const inputSpace = document.createElement('input');
form.append(inputSpace);

const button = document.createElement('button');
button.textContent = "입력";
form.append(button);

const result = document.createElement('div');
form.append(result);

function init(){
    number1 = Math.ceil(Math.random()*9);
    number2 = Math.ceil(Math.random()*9);
    resultNumber = number1 * number2;
    text.textContent = `${number1} 곱하기 ${number2} 는?`;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    if (resultNumber === parseInt(inputSpace.value)){
        result.textContent = '딩동댕';
        inputSpace.value ='';
        init();
        inputSpace.focus();


    }else{
        result.textContent = '땡';
    }
})
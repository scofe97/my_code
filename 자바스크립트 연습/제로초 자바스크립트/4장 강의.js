// 콜백함수 (비동기) -> 순서대로 실행되는게 아님
// 숫자야구
const body = document.body;

let numberA = [1,2,3,4,5,6,7,8,9]
let numberArray = [];

// psuh, pop (마지막 뽑기 , 넣기)
// shift, unshift ( 처음에 추가, 뽑기)


for(let i = 0; i<4; i++){
    //let number = numberA.pop();
    let count = Math.floor(Math.random()*(9-i));
    let number = numberA.splice(count,1)[0]
    numberArray.push(number);
}


console.log(numberArray);

const result = document.createElement('h1');
body.append(result);

const form = document.createElement('form');
body.append(form);

const inputSpace = document.createElement('input');
inputSpace.type = 'number';
form.append(inputSpace)

const button = document.createElement('button')
button.textContent = '입력';
form.append(button)


form.addEventListener('submit', function(event){
    event.preventDefault();
    let answer = inputSpace.value;
    if ( answer === numberArray.join('')){
        result.textContent = '홈런';
        inputSpace.value ='';
        inputSpace.focus();

    }else{
        const resultArray = answer.split('');
        let strike = 0;
        let ball = 0;
        for (let i=0; i<4; i +=1){
            if(resultArray[i] === String(numberArray[i])){
                strike++;
            }else if(String(numberArray).indexOf(resultArray[i]) > -1){
                ball++;
            }
        }
        result.textContent = `스트라이크${strike} 볼${ball}`;
        inputSpace.value ='';
        inputSpace.focus();
    }
} )





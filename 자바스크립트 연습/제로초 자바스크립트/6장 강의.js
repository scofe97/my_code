const body = document.body;

// 45개의 empty생성 (fill안하면 반복문안됨)
let number = Array(45)
.fill()
.map(function(value,index){
    return index + 1;
})
console.log(number)

let shuffle = [];
while(number.length > 0){
    let count = Math.floor(Math.random() * number.length)
    // 실제 로또같은거에 math쓰지말고 제대로된 알고리즘 써라
    let move = number.splice(count,1)[0]
    shuffle.push(move);
}
console.log(shuffle);

let bonus = shuffle[shuffle.length -1];
let answer_number = shuffle.slice(0,6).sort(function(p,c){ return p-c;});
// sort 7 3
// 7-3 = 4 (0보다큼 -> 순서를 바꿈)
// 반대로하면 반대로 정렬됨 (p-c -> c-p)
console.log(`${answer_number} 당첨숫자, ${bonus} 보너스`)

const result = document.getElementById('결과창');
// 요즘은 querySelector로 다함 (.아이디, #클래스)

function ballStyle(number, rs){
    let ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '30px';
    ball.style.width = '40px';
    ball.style.height = '40px';
    ball.style.textAlign = 'center';
    ball.style.marginRight ="10px"
    ball.style.fontSize = '20px';
    //ball.className
    //ball.ID

    let bgColor;
    if(number <= 10){
        bgColor = 'red';
    }else if(number <= 20){
        bgColor = 'orange';
    }else if(number <= 30){
        bgColor = 'yellow';
    }else if(number <= 40){
        bgColor = 'blue';
    }else {
        bgColor = 'green';
    }
    ball.style.backgroundColor = bgColor;
    rs.appendChild(ball);
}

setTimeout(function(){
    ballStyle(answer_number[0],result);
},1000);
setTimeout(function(){
    ballStyle(answer_number[1],result);
},2000);
setTimeout(function(){
    ballStyle(answer_number[2],result);
},3000);
setTimeout(function(){
    ballStyle(answer_number[3],result);
},4000);
setTimeout(function(){
    ballStyle(answer_number[4],result);
},5000);
setTimeout(function(){
    ballStyle(answer_number[5],result);
},6000);

setTimeout(function(){
    const bonusSpace = document.getElementsByClassName('보너스')[0];
    ballStyle(bonus,bonusSpace)

},7000)


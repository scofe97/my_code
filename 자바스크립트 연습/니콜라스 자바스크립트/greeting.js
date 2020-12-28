const form = document.querySelector(".js-form"),
input = document.querySelector("input"),
greeting = document.querySelector(".js-greeting");
// querySelectorAll하면 다 가져옴 querySelect를 하면 첫번째로 찾은걸 가져옴

const USER_LS = "currentUser",
SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(evnet){
    event.preventDefault();
    // 기본동작을 막아버림 (엔터키 눌려도 반응 안함)
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        askForName();
        // he is not
    }else{
        // he is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init()
const toDoForm = document.querySelector(".js-toDoForm"),
toDOInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"

let toDos= [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
        // 모든 toDos가 li의 id와 같지 않을때
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // 로컬스토리지에서는 자바스크립트 타입 데이터 저장 불가 스트링만 가능
    // 그래서 리스트 넣으면 이상하게 나옴
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo)
    
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDOInput.value;
    paintToDo(currentValue);
    toDOInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // console.log(loadedToDos)
        // const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos)
        // //JSON JavaScript Object Notation
        // //데이터 전달시, 자바스크립트가 다룰수 있도록 object로 바꿔주는 기능
        
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
           paintToDo(toDo.text);
        })


    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
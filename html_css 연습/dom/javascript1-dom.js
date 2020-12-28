
// EX6 : 엘리먼트 노드의 속성 변경 & CSS 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){

        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        var liNode = document.createElement("li");
        
        menuListDiv.appendChild(txtNode);

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);
    };

    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0];
        menuListDiv.removeChild(txtNode);
    };
});

// EX5 : 엘리먼트 노드의 속성 변경 & CSS 변경
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input")

    changeButton.onclick = function(){
        img.src = "images/"+srcInput.value;
        //img.src = "images/"+imgSelect.value;

        //img.getElementsByClassName.border-color = ?;
        //img.style["border-color"] = colorInput.value
        img.style.borderColor = colorInput.value
        console.log(img.className)
        // img.className class는 예약어라 사용불가
    };
});

// EX4 :childNodes를 이용한 노드 선택
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0]//childNodes[0];
    var input2 = box.children[1];
    // 생각과 다르게 나옴
    // 주석도 자식으로본다? text도 자식으로 본다?
    //   공백들이 노드로 포함됨
    // childeren -> 태그형태만 자식으로 담음


    input1.value = "hello";
    input2.value = "okay";
});

// EX3 :Selectors API LEVEL1
window.addEventListener("load", function(){

    var section3 = document.getElementById("section3");
    // 태그 , 클래스 input[name='x'] 이런식 검색도 가능
    // css 선택자 표현법이 풍부하므로 j쿼리가 유용했음
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector("input[name='y']");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    };
});

// EX2 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){

    var section2 = document.getElementById("section2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];


    /*
    var inputs = section2.getElementsByTagName("input")

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    };
});

// EX1 엘리먼트 선택방법 개선하기
window.addEventListener("load", function(){

    var txtX = document.getElementById("txt-X");
    var txtY = document.getElementById("txt-Y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    };
});

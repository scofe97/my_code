window.addEventListener("load", function(){

    var btnPrint = document.getElementById("btn-print");
    // 이런식으로 하나의 함수에 묶어서 하면 여러번 불러올 필요가 없음

    var add = function(x,y){
        return x+y;
    };

    btnPrint.onclick = function(){

        var x, y;
        var x = prompt("x의 값을 입력하세요", 0);
        y = prompt("y의 값을 입력하세요", 0);

        x = parseInt(x);
        y = parseInt(y);

        //alert(x+y);
        btnPrint.value = x+y;
        //span1.innerText = x+y;
        //btnPrint.type = "text";
    };
})

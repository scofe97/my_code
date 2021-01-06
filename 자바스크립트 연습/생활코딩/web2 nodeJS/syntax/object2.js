//함수는 값이 될수없음
// if(true){console.log(1)}
// while(true){console.log}


// 함수이면서 값(변수에 넣을수 있는)
var f = function(){
    console.log(1+1);
    console.log(2+2);
}

var a = [f];
a[0]();

var o = {func:f}
o.func();
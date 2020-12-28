'use strict'

// 자바스크립트는 동기적임 (synchronous)
// 호이스팅이 된이후부터 동기적으로 실행이 된다
// 호이스팅 : var변수, function 선언이 가장위로 자동으로 가는 것
console.log('1');
setTimeout(function(){
    console.log(2);
}, 1000) // callBack 함수 1초뒤에 실행
console.log('2');
console.log('3');

// 동기적 콜백
function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello'));
// 함수 선언은 가장위로감 (호이스팅)
// 그다음 순서대로 실행됨


// 비동기적 콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
    // 2초 대기뒤 실행함
}

printWithDelay(() => console.log('async callback'), 2000)


// 콜백지옥
class UserStorage{
    loginUser(id, password, onSucess, onError){
        setTimeout(() =>{
            if(
                (id === 'bo' &&  password === 'hy') ||
                (id === 'code' && password === 'academy')
            ){
                onSucess(id);
            }else{
                onError(new Error('not found'))
            }
        },2000);
    }

    getRoles(user, onSucess, onError){
        setTimeout(() =>{
            if(user ==='bo'){
                onSucess({name: 'bo', role: 'admin'});
            }
            else{
            onError(new Error('no access'));
        }
    }, 1000);
    }
}

// 사용자에게 id와 pw를 받을거고 로그인할거임
// 로그인 한뒤 id를 이용해 role 요청

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your password');
console.log(id, pw)

userStorage.loginUser(
    id,
    pw,
    function(user){
        userStorage.getRoles(
            user, 
            function(userWithRoles) {
                alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`);
            },
            function(error){
                console.log(error)
                console.log('권환이없습니다.')
            }
        )
    },
    function(error){
        console.log(error)
        console.log('로그인에 실패했습니다.')
    }
);

// 콜백지옥 -> 읽기가 너무 힘듬
// 에러발생, 디버깅와중에도 문제분석이 너무 어려움
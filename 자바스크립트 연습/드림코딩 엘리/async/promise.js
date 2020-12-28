'use strict'

// Promise is a JavaScript object for asynchronous operation.
// 1. 상태 -> 수행중인지 완료하고 성공인지 실패인지
// 2. 데이터를 제공하는사람과 쓰는사람 구분
// state : pending -> fulfilled or rejected
// Producer vs Consumer

//1. Promise()
// when new Promise is created, the executor runs autobatically
const promise = new Promise((resolve, reject) => {
    // doing some heavy work ( new work, read files)
    console.log('doing something..');
    setTimeout(()=>{
        resolve('ellie');
        // 제대로 완료했고 ellie를 전달함

        //reject(new Error('no network'))
        // Error()는 에러발생시 보내는 것
    },2000)
});

//2. Consumer : then, catch, finally
// 제대로 프로미스가 동작되면 resolve로 보낸 값이 value로옴
promise
.then((value) => {
    console.log(value);
}) // then이 promise를 다시 리턴함 그걸 이용한 catch
.catch(error =>{
    console.log(error)
})
// 성공 실패 상관없이 출력됨
.finally(()=>{
    console.log('finally');
})

//3. Promise chaining
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num *2) // 2
.then(num => num *3) // 6
.then(num =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(num-1),1000); // 1초뒤 6-1 = 5
    });
})
.then(num => console.log(num)); // 다하면 출력 (총 2초)

//4. Error Handling
const getHen = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve('암탉'),1000);
    });
}

const getEgg = hen =>
    new Promise((resolve, reject) =>{
        setTimeout(() => reject(new Error(`error ${hen} => 계란`)), 1000)
    })


const cook = egg =>
    new Promise((resolve,reject) =>{
        setTimeout(() => resolve(`${egg}=> 계란후라이`),1000);
    })


getHen()
.then(hen => getEgg(hen))
.catch(error=>{
    return '빵'
})
.then(egg => cook(egg))
.then(meal => console.log(meal))

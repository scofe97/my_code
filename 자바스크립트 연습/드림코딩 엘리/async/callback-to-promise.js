// async & await
// clear style of using promise :)

//1. async (붙이면 promise를 사용한것과 동일함)
async function fetchUser() {
    // 10초 동안 동작한다.
    return 'ellie'
}

const user = fetchUser();
user.then(console.log)
console.log(user);
// 비동기처리하지 않으면 이것의 출력은 10초가 걸림

//2. await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(2000);
    return '사과';
}

async function getBanana(){
    await delay(3000);
    return '바나나';
}

// function getBanana(){
//     return delay(3000).then(()=>'banana')
// }

// function pickFruit(){
//     return getApple().then(apple => {
//         return getBanana().then( banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruit(){
    const applePromise = getApple();
    const bannaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bannaPromise;
    return `${apple} + ${banana}`;
}
pickFruit().then(console.log);

//3 useful Promise APIs
// promise.all -> 모든 프로미스를 병렬적으로 받을때까지 기다림
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(` + `)
    );
}

pickAllFruits().then(console.log)

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);




class UserStorage{
    loginUser(id, password){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                if(
                    (id === 'bo' &&  password === 'hy') ||
                    (id === 'code' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'))
                }
            },2000);
        })
    }

    getRoles(user){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                if(user ==='bo'){
                    resolve({name: 'bo', role: 'admin'});
                }
                else{
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter youbr password');
userStorage
.loginUser(id,pw)
.then(user => userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
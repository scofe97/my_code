'use strict'
// 콜백지옥 수정본
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                if(
                    (id === 'bo' &&  password === 'hy') ||
                    (id === 'code' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'))
                    console.log('로그인 실패')
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
                    console.log('권한없음')
            }
        }, 1000);
        })
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
    pw
).then(user => userStorage.getRoles(user)
).then(userWithRoles => alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`)
).catch(console.log("응애"));

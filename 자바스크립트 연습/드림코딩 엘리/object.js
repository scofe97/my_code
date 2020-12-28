'use strict'

const bo = {name:'bo', age:20}
const dn = 20
function print(person){
    console.log(person.name)
    console.log(person.age)
}
print(bo,dn)

const obj1 = {};
const obj2 = new Object();

bo.hasJob = true;
// 이렇게 없는것도 만들어냄

delete bo.hasJob
console.log(bo.hasJob)

console.log(bo['name'])
// 이런식으로도 출력가능


// 생성자 함수
function makePerson(name, age){
    // this = {}
    this.age= age
    this.name = name
    //return this
}

console.log('name'in bo);
console.log('hasJob'in bo);

// for in for of
console.clear()
for (let key in bo){
    console.log(key);
}

for(let value of array){
    console.log(value)
}

const mixed = Object.assign({}, bo)

console.log(bo.name)

// forEach
array.forEach(function(ar,index,array){
    console.log(ar, index);
})
// ctrl 누르면 함수에대한 자세한 정보 볼수 있음
// callback함수 value하나하나 호출해준다

array.push();
array.pop();
// 앞에서 부터 데이터 넣음
// shift 함수들은 phsh pop보다 매우 느림
array.unshift();
array.shift();
// 1부터 끝가지 지움
//array.splice(1)
// 1~1까지 지움
array.splice(1,1);
// 1~1까지 지우고 2 3 4 넣음
array.splice(1,1,2,3,4);

const ar1 = [1,2,3];
const ar2 =[3,4,5];
const arr = ar1.concat(ar2);
console.log(arr)

console.clear()
console.log(arr.indexOf(3));
console.log(arr.includes(3));

console.log(arr.lastIndexOf(3))

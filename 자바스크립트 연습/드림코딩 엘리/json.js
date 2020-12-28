// JSON

// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit ={
    name : 'tori',
    color :'white',
    size : null,
    birtDate : new Date(),
    jump : () => {console.log(`${name} can jump!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json);
// 함수는 여기서 포함안됨
// symbol도 마찬가지

json = JSON.stringify(rabbit, ['name']);
console.log(json);
// 이름만 json으로 바꿈

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value} `);
    return key === 'name' ? 'bo' : value;
});
console.log(json);
// key value값을 출력함 (최초는 감싸는걸 내보내므로 object로 나옴)
// 세밀한 통제를 통해 위와 같이 할수 있음 name이 키이면 bo로 값을 바꿈

// 2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump();
// 변환한 오브젝트는 함수가 없으므로 오류가 나옴

console.log(rabbit.birtDate.getDate());
//console.log(obj.birtDate.getDate());
// 에러발생 new Date로 생성된 객체가 문자로 바뀌어서 그럼
// 그래서 getDate()를 사용하지 못함

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key:${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value
})
// 위와 같이 변형해주어야 getDate() 사용가능
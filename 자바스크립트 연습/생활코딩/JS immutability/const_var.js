// var o1 = {name:'kim'}
// var o2 = Object.assign({}, o1);
// o2.name = 'lee';
// //console.log(o1,o2,o1===o2);

// var o3 = {name:'kim', score:[1,2]}
// var o4 = Object.assign({}, o3);

// //console.log(03,04,03===04,03.score === 04.score);
// //마지막 값들 false, true
// //push하면 둘다 3이 축가됨

// o4.score = o4.score.concat();
// o4.score.push(4);
// console.log(o3,o4,o3===o4,o3.score === o4.score);



// 불변의 함수 만들기
// function fn(person){
//     person = Object.assign({},person)l
//     person.name ='lee';
//     return person // 복제복을 던져주면 원본은 그대로임

// }
// var o1 = {name:'kim'};
// var o2 = Object.assign({},o1) // 혹은 이렇게 주어지게해줌
// fn(o1); // lee로 변형됨
// console.log(o1)

// var score = [1,2,3]
// var score2 = score.concat(4); // 원본을 유지한채 변형
// score가 다른데서 많이 참조되는경우 유용함

// Object Freeze
// var o1 = {name:'kim', score:[1,2]}
// Object.freeze(o1);
// // 해동하는 방법은없고 복제해서 바꿔야함
// o1.name = 'lee';
// o1.city = 'seoul';
// o1.score.push(3); // 이거는 변형됨 ( 배열이기 때문에 다른곳에 저장되있기 때문 )
// Object.freeze(o1.score); // 이렇게 얼려야함
// console.log(o1)



// const vs freeze
// feeze : 값자체를 변경불가
// const 가리키는 값을 바꾸지못하게함
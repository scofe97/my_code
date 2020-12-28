const fruits = ['apple','banana', 'orange']
console.log(`${fruits[0]} ${fruits[1]} ${fruits[2]}`)

const result = fruits.join()
console.log(result)

const fruits2 = '1,2,3,4'
const result2 = fruits2.split(',', 2);
console.log(result2)

const ar3 = [1,2,3,4]
const rs3 = ar3.reverse();
console.log(rs3);

const ar4 =[1,2,3,4]
const rs4 = ar4.splice(0,2);
console.log(rs4);

const ar5 =[1,2,3,4]
const rs5 = ar5.slice(0,2);
console.log(rs5);
console.log(ar5);

class Student{
    constructor(name, age,enrolled, score){
        this.name=name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
];

for(const arg of student){
    if (arg['score']>=90){
        console.log(arg)
    }
}

// 특정 조건을 찾는다
const rs6 = student.find(function(student){
    return student.score === 90;
})
console.log(rs6)
// 배열의 모든요소마다 호출됨 (callback) true를 리턴해야 멈춤

const rs7 = student.filter((student) => student.enrolled);
console.log(rs7)

// map 배열에 있는값들을 변형시켜 뽑아냄
const rs8 = student.map(function(student){
    return student.score;
});
console.log(rs8);

// 50점보다 낮은 학생이 있는가?
// some 이용 (누군가라도)
console.clear();
const rs9 = student.some((student) => student.score < 50);
console.log(rs9);

// every도 이용가능
// 모든학생기준
const rs10 = student.every((student) => student.score >= 50);
console.log(rs10);

// 평균구하기
// reduce curr에 하나하나 전달됨 -> 다음실행때 prev에 이전 curr이 들어감
const rs11 = student.reduce((prev, curr)=>{
    return prev + curr.score;
}, 0)
// 0부터 시작하도록 설정함
console.log(rs11 / student.length);

const rs12 = student
.map((student) => student.score)
.filter((score) => score >=50)
.join();
console.log(rs12)

const rs13 = student.map((student) => student.score)
.sort((a,b) => a-b)
.join();
console.log(rs13)

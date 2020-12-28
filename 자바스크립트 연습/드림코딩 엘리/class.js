// 1. Class declarations
class Person{
    //constructor
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    get age(){
        return this._age
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }

    speak(){
        console.log(`${this.name}hello`);
    }
}

const elite = new Person('응애', 20);
console.log(elite.name);
console.log(elite.age);
elite.speak();



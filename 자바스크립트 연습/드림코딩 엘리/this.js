function foo(something) {
    this.a = something;
  }
  
  var obj1 = {
    foo: foo
  };
  
  obj1.foo(2); // 암시
  console.log(obj1.a); // 2
  
  var obj2 = {};
  
  foo.call(obj2, 3); // 암시 속에서 obj2라고 명시
  console.log(obj1.a); // 2
  console.log(obj2.a); // 3
  
  var obj3 = new obj1.foo(10);
  console.log(obj1.a); // 2
  console.log(obj2.a); // 3
  console.log(obj3.a); // 10

  // call 메소드는 다른 객체 대신 메소드를 호출하는데 사용
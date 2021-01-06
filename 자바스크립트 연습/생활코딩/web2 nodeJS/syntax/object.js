var member =['egoing', 'k8805', 'hoya'];
console.log(member[1]);



// 각각의 데이터마다 이름을줌
var roles = {
    'programmer' : 'eggoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}
console.log(roles.designer); // k8805

for( var name in roles){
    console.log(`object =>${name} value => ${roles[name]}`)
}
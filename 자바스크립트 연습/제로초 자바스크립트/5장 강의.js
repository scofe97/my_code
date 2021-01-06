let body = document.body;
let array_space = []
let array_line = []
let turn = 'X';
let async = function (event) {
    console.log(event.target)
    console.log(event.target.parentNode)
    console.log(event.target.parentNode.parentNode)
    // 클릭한게 나옴

    let lines = array_line.indexOf(event.target.parentNode);
    console.log(`몆줄 ${lines}`);
    let spaces = array_space[lines].indexOf(event.target)
    console.log(`몇칸 ${spaces}`);

    if (array_space[lines][spaces].textContent !== '') {
        console.log("빈칸아님")
    } else {
        console.log("빈칸")
        array_space[lines][spaces].textContent = turn;

        let full_space = false;
        if (
            array_space[lines][0].textContent === turn &&
            array_space[lines][1].textContent === turn &&
            array_space[lines][2].textContent === turn
        ) { full_space = true; }
        if (
            array_space[0][spaces].textContent === turn &&
            array_space[1][spaces].textContent === turn &&
            array_space[2][spaces].textContent === turn
        ) { full_space = true; }
        if (lines === spaces) {
            if (
                array_space[0][0].textContent === turn &&
                array_space[1][1].textContent === turn &&
                array_space[2][2].textContent === turn
            ) { full_space = true; }
        }
        if (Math.abs(lines - spaces) === 2) {
            if (
                array_space[0][2].textContent === turn &&
                array_space[1][1].textContent === turn &&
                array_space[2][0].textContent === turn
            ) { full_space = true; }
        }


        if (full_space) {
            console.log(`${turn}승`);
            node.textContent = `${turn}의 승리`;
            turn = 'X';
            array_space.forEach(function(array_line){
                array_line.forEach(function(space){
                    space.textContent='';
                })

            })
        }else{
            turn = turn === 'X' ? 'O' : 'X';
        }
    }


};

const table = document.createElement('table');
for (let i = 0; i < 3; i += 1) {
    let line = document.createElement('tr');
    array_line.push(line)
    array_space.push([]);
    for (let j = 0; j < 3; j += 1) {
        let space = document.createElement('td');
        space.addEventListener('click', async)
        array_space[i].push(space)
        line.appendChild(space);
    }
    table.appendChild(line);
}
const node = document.createElement('div')
body.appendChild(table);
body.appendChild(node)
console.log(array_line, array_space)


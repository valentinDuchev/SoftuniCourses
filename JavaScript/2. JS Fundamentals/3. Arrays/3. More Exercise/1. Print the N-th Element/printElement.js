function solve (input) {
    let step = Number(input.pop());
    let newArr = [];
    for (let i = 0; i<input.length; i+=step) {
        newArr.push(input[i])
    }
    console.log(newArr.join(' '))
}
solve (['5', '20', '31', '4', '20', '2'])
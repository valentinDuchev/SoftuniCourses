function solve(input) {

    let newArr = [];
    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            newArr.push(input[i])
        }
    }
    console.log(newArr.join(' '))
}
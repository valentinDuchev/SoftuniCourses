//Solve by using Set 

function solve(input) {

    let nonRepeating = new Set();

    for (let element of input) {
        nonRepeating.add(element)
    }

    console.log([...nonRepeating].join(' '))

}
console.log('Solution by using Set')
solve([7, 8, 9, 2, 3, 4, 1])
console.log('-----------')

function solveTwo(input) {
    let newArr = [];
    for (let element of input) {
        if (newArr.includes(element) == false) {
            newArr.push(element)
        }
    }
    console.log(newArr.join(' '))

}
console.log('Solution by using normal Arr')
solve([1, 2, 3, 4])
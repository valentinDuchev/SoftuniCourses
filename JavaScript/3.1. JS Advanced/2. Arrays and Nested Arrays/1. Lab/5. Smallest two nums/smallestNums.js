function solve(input) {

    let arr = [];
    let sortedArr = input.sort(compare)
    arr.push(sortedArr[0])
    arr.push(sortedArr[1])
    console.log(arr.join(' '))

    function compare(a, b) {
        return a - b;
    }
}
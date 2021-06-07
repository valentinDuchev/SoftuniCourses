function solve (input) {
    let currentArr = [];
    let newArr =  [];

    for (let element of input) {
        currentArr.push(element);
        if (Number(element) >= Number(Math.max(...currentArr))) {
            newArr.push(element)
        }
    }
    console.log(newArr.join(' '))
}
solve ([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
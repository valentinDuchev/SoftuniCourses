function solve (input) {
    let sum = 0;
    let inversedSum = 0;
    let concat = '';
    for (let element of input) {
        sum += Number(element)
    }
    for (let element of input) {
        inversedSum += 1/Number(element)
    }
    for (let element of input) {
        element = element.toString();
        concat += element;
    }
    console.log(sum)
    console.log(inversedSum)
    console.log(concat)
}
solve ([1, 2, 3])
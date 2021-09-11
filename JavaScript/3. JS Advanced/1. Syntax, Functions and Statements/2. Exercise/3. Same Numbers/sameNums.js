function solve(input) {

    input = input.toString();
    let inputArr = input.split('');
    let newArr = [];
    let sum = 0;
    for (let element of inputArr) {
        sum += Number(element);
    }

    for (let element of inputArr) {
        newArr.push(element)

        for (let newElement of newArr) {
            if (element !== newElement) {
                console.log('false');
                console.log(sum)
                return;
            }
        }
    }
    console.log('true')
    console.log(sum)
    return;

}
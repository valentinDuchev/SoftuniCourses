function solve(input) {

    let newArr = [];
    let counter = 1;

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (current === 'add') {
            newArr.push(counter);
        } else if (current === 'remove') {
            newArr.pop();
        }
        counter += 1;
    }
    if (newArr.length > 0) {
        console.log (newArr.join('\n'))
    } else {
        console.log ('Empty')
    }
}
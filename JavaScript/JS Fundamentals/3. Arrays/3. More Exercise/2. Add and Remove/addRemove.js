function solve (input) {
    let counter = 1;
    let newArr = [];

    for (let element of input) {
        if (element == 'add') {
            newArr.push(counter);
            counter++;
        } else if (element == 'remove') {
            newArr.pop();
            counter++;
        }
    }
    if (newArr.length > 0) {
        console.log(newArr.join(' '))
    } else {
        console.log('Empty')
    }
    

}
solve (['add', 'add', 'remove', 'add', 'add'])
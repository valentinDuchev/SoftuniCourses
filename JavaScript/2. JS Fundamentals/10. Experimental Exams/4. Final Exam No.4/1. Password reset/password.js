function solve(input) {

    let first = input.shift();
    let actions = {
        'TakeOdd': takeOdd,
        'Cut': cut,
        'Substitute': substitute
    }
    while (input[0] != 'Done') {
        let token = input.shift().split(' ');
        let command = token[0];
        let action = actions[command];
        action(token);
    }

    function takeOdd(token) {
        let newArr = [];
        let firstAsArr = first.split('')
        let firstAsArrLength = firstAsArr.length;
        for (let i = 0; i < firstAsArrLength; i++) {
            if (i % 2 === 1) {
                newArr.push(firstAsArr[i]);
            }
        }
        first = newArr.join('')
        console.log(first)
    }

    function cut(token) {
        let index = Number(token[1]);
        let length = Number(token[2]);
        let firstAsArr = first.split('');
        firstAsArr.splice(index, length)
        first = firstAsArr.join('')
        console.log(first)
    }

    function substitute(token) {
        let itemForSubstitute = token[1];
        let substitution = token[2];
        if (first.includes(itemForSubstitute)) {
            let firstAsArr = first.split(itemForSubstitute);
            first = firstAsArr.join(substitution);
            console.log(first)
        } else {
            console.log("Nothing to replace!");
        }
    }
    console.log(`Your password is: ${first}`)


}
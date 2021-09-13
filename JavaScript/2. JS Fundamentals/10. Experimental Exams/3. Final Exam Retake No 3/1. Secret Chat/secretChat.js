function solve(input) {
    let message = input.shift();


    while (input[0] != 'Reveal') {
        let token = input.shift().split(':|:')

        let command = token[0];

        if (command === 'ChangeAll') {
            let messageArr = message.split(token[1]);
            messageArr = messageArr.join(token[2]);
            message = messageArr;
            console.log(message)
        } else if (command === 'Reverse') {
            if (message.includes(token[1])) {
                let left = message.substring(0, message.indexOf(token[1]));
                let reversed = token[1].split('').reverse().join('');
                message = left + reversed;
                console.log(message)
            } else {
                console.log('error')
            }
        }
        else if (command === 'InsertSpace') {
            let left = message.substring(0, token[1]);
            let right = message.substring(token[1]);
            message = left + " " + right;
            console.log(message)
        }
    }
    if (input[0] === 'Reveal') {
        console.log(`You have a new text message: ${message}`)
    }
}
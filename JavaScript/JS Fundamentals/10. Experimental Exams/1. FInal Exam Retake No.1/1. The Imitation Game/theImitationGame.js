function solve(input) {

    let message = input.shift();

    while (input[0] !== 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens[0];

        if (command === 'ChangeAll') {
            message = message.split(tokens[1]).join(tokens[2]);
        } else if (command === 'Insert') {
            let left = message.substring(0, tokens[1]);
            let right = message.substring(tokens[1]);
            message = left + tokens[2] + right;

        } else if (command === 'Move') {
            let left = message.substring(0, tokens[1]);
            let right = message.substring(tokens[1]);

            message = right + left;
        }
    }
    console.log('The decrypted message is: ' + message)


}
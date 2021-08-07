function solve (input) {

    let activationKey = input.shift();
    let actions = {
        'Contains': contains,
        'Slice': slice,
        'Flip': flip 
    }
    while (input[0]!='Generate'){
        let token = input.shift().split('>>>');
        let command = token[0];
        let action = actions[command];
        action(token);
    }
    if (input[0] === 'Generate') {
        console.log(`Your activation key is: ${activationKey}`)
    }
    function contains (token) {
        if (activationKey.includes(token[1])){
            console.log(`${activationKey} contains ${token[1]}`)
        } else {
            console.log(`Substring not found!`);
        }
    }
    function flip (token) {
        if (token[1] === 'Upper') {
            let first = activationKey.substring(0, Number(token[2]));
            let second = activationKey.substring(Number(token[2]), Number(token[3]));
            let third = activationKey.substring(Number(token[3]));
            let secondNew = second.toUpperCase();
            activationKey = first + secondNew + third;
            console.log(activationKey)
        } else if (token[1] === 'Lower') {
            let first = activationKey.substring(0, Number(token[2]));
            let second = activationKey.substring(Number(token[2]), Number(token[3]));
            let third = activationKey.substring(Number(token[3]));
            let secondNew = second.toLowerCase();
            activationKey = first + secondNew + third;
            console.log(activationKey)
        }

    }
    function slice (token) {
        let first = activationKey.substring(0, token[1]);
        let second = activationKey.substring(token[1], token[2]);
        let third = activationKey.substring(token[2]);
        activationKey = first + third;
        console.log(activationKey)
    }
}
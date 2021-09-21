function solve (input, amount) {

    for (let i = 0; i<amount; i++) {
        let current = input.pop();
        input.splice(0, 0, current)
    }

    console.log(input.join(' '))

}
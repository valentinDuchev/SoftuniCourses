function test(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let correctPassword = input[index];
    index++;
    let command = input[index];
    index++;
    
    while (command !== correctPassword) {
        command = input[index];
        index++;
    } if (command === correctPassword) {
        console.log(`Welcome ${userName}!`)
    }
}
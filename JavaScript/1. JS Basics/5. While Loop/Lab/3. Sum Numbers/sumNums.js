function test(input) {
    let index = 0;
    let sumNeeded = input[index];
    index++;
    let command = Number(input[index]);
    let sum = 0;
    index++;
    while (sum < sumNeeded) {
        sum += command;
        command = Number(input[index]);
        index++;
    }
    if (sum >= sumNeeded) {
        console.log(sum);
    }

}
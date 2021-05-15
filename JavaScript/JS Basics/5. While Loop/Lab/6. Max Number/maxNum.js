function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    let smallest = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let number = Number(command);
        if (number > smallest) {
            smallest = number;
        }
        command = input[index];
        index++;

    }
    console.log(smallest)

}
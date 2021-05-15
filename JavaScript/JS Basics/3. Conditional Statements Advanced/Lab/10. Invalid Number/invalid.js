function number(input) {
    let number = Number(input[0]);
    if (number != 0 && (number <= 99 || number >= 201)) {
        console.log("invalid");
    }
}
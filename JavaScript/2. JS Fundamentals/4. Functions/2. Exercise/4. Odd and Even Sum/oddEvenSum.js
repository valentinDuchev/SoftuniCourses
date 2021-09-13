function solve(input) {
    let oddSum = 0;
    let evenSum = 0;
    let stringInput = input.toString();

    for (let i = 0; i < stringInput.length; i++) {
        if (Number(stringInput[i]) % 2 == 0) {
            evenSum += Number(stringInput[i])
        } else {
            oddSum += Number(stringInput[i])
        }
    }

    console.log(`Odd sum = ${oddSum}, Even Sum = ${evenSum}`)

}
solve(1000435)
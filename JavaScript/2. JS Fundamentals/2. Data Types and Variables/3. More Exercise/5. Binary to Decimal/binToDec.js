function cone(num1) {
    let numAsString = num1.toString();
    let end = 0;
    let currentPower = numAsString.length - 1;

    for (let i = 0; i < numAsString.length; i += 1) {
        let result = (Number(numAsString[i])) * Math.pow(2, currentPower);
        end += result;
        currentPower -= 1;
    }
    console.log(end)


}
function amazingNumber(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let newNum = numAsString[i];
        sum += Number(newNum);
    }
    let finalSum = sum.toString().includes('9');
    if (finalSum == true) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }





}
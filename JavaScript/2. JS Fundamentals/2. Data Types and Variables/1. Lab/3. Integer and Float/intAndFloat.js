function IntOrFloat(Num1, Num2, Num3) {

    let sum = Num1 + Num2 + Num3;
    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
}
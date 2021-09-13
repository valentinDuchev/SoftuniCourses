function substraction(arr) {

    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current % 2 == 0) {
            sumEven += current;
        } else if (current % 2 != 0) {
            sumOdd += current;
        }
    }
    console.log(sumEven - sumOdd)

}
function power(num1, num2, num3) {

    let arr = [];
    let negatives = [];
    arr.push(num1, num2, num3);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        }
    }
    if (negatives.length == 1 || negatives.length == 3) {
        console.log('Negative');
    } else {
        console.log("Positive")
    }
}
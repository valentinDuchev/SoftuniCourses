function sumOfNums(num1, num2) {
    return num1 + num2;
}

function sum (arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
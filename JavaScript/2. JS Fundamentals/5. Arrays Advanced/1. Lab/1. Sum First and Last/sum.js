function popandShift(arr) {
    let newArr = [];
    let first = Number(arr.pop());
    let last = Number(arr.shift());
    console.log(first + last)
}
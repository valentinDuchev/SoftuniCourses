function demo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] = arr[i] * 2;
            newArr.unshift(arr[i]);
        }
    }
    console.log(newArr.join(' '))
}
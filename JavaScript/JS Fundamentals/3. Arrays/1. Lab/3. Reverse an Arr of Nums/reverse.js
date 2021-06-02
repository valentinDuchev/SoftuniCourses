function reverse(num, arr1) {
    let arr2 = [];
    for (let i = num - 1; i >= 0; --i) {
        arr2.push(arr1[i]);
    }
    let arr2String = arr2.join(" ");
    console.log(arr2String)

}
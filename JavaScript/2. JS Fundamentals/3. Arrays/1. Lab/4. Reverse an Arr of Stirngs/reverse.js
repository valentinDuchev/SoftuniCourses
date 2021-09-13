function reverseString (arr){
    let arr2 = [];
    for (let i = arr.length-1; i>=0; --i){
        arr2.push(arr[i]);
    }
    let arr2asString = arr2.join(' ')
    console.log(arr2asString)

}
function unshiftAndPush(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum < 0) {
            newArr.unshift(currentNum);
        } else {
            newArr.push(currentNum);
        }
    }
    for (let i = 0; i <newArr.length; i++){
        console.log(newArr[i])
    }
    
}
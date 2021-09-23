function solve (input) {

    let newArr = [];
    
    for (let element of input) {
        if (element >= Math.max(...newArr)){
            newArr.push(element)
        }
        
    }
    return newArr;
}
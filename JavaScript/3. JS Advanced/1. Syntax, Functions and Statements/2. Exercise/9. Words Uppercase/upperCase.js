function solve (input) {
    let pattern = /\w+/g;
    let match = pattern.exec(input) 
    let arr = [];
    while (match != null) {
        let current = match[0];
        let newElem = current.toUpperCase();
        arr.push(newElem);
        match = pattern.exec(input)
    }

    console.log(arr.join(', '))
}
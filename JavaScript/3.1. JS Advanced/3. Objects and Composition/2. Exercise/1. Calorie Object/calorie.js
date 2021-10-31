function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            obj[input[i]] = Number(input[i+1]);
        } 
    }
    console.log(obj)


}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
function solve(x, y) {

    while (y) {
        let t = y;
        y = x % t;
        x = t;
    }
    console.log(x)

}
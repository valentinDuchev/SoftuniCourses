function triangle(a, b, c) {
    let p = (a + b + c) / 2;
    let sPow2 = p * (p - a) * (p - b) * (p - c);

    let s = Math.pow(sPow2, 1 / 2)
    console.log(s)
}
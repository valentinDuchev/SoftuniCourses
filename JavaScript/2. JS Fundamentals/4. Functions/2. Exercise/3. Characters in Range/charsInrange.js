function solve (charOne, charTwo) {
    let codeOne = charOne.codePointAt(0)
    let codeTwo = charTwo.codePointAt(0)
    let newArr = [];

    if (codeOne < codeTwo) {
        for (let i = codeOne + 1; i < codeTwo; i++) {
            newArr.push(String.fromCodePoint(i));
        }
    } else {
        for (let i = codeTwo + 1; i < codeOne; i++) {
            newArr.push(String.fromCodePoint(i));
        }
    }

    console.log(newArr.join(' '))
}
solve ('c', 'k')
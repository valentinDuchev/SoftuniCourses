function solve(input) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
    let match = pattern.exec(input);
    let newArr = [];
    let points = 0;

    while (match !== null) {
        newArr.push(match[2]);
        match = pattern.exec(input)
    }
    for (let element of newArr) {
        points += Number(element.length);
    }
    console.log(`Destinations: ${newArr.join(', ')}`)
    console.log(`Travel Points: ${points}`)
}
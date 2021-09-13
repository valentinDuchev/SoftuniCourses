function solve(arr) {

    let phoneBook = {};

    for (let line of arr) {
        let tokens = line.split(' ');
        phoneBook[tokens[0]] = tokens[1];
    }

    for (let element in phoneBook) {
        console.log(`${element} -> ${phoneBook[element]}`)
    }
}
function solve(arr) {

    let obj = {};
    for (let line of arr) {
        let [name, address] = line.split(':');
        obj[name] = address;
    }

    let sorted = Object.entries(obj);
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    })
    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`)
    }

}
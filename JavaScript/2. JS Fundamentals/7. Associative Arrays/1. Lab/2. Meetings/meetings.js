function solve(arr) {

    let obj = {};

    for (let line of arr) {
        let [day, name] = line.split(' ');
        if (!obj.hasOwnProperty(day)) {
            console.log(`Scheduled for ${day}`);
            obj[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let element in obj) {
        console.log(`${element} -> ${obj[element]}`)
    }
}
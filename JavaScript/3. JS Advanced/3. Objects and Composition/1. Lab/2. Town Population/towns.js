function solve (input) {
    let obj = {};
    for (let element of input) {
        let [town, population] = element.split(' <-> ');
        if (obj.hasOwnProperty(town) == false) {
            obj[town] = Number(population);
        } else {
            obj[town] += Number(population)
        }
    }

    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`)
    }

}
solve (['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Las Vegas <-> 100'
]
)
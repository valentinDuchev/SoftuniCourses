function solve (input1, input2) {
    let obj = {};
    for (let i = 0; i < input1.length; i++) {
        if (i % 2 == 0) {
            obj[input1[i]] = 0;
        } else {
            obj[input1[i-1]] += Number(input1[i])
        }
    }
    for (let i = 0; i < input2.length; i++) {
        if (i % 2 == 0) {
            if (obj.hasOwnProperty(input2[i])) {
                obj[input2[i]] += Number(input2[i+1])  
            } else {
                obj[input2[i]] = 0
                obj[input2[i]] += Number([input2[i+1]])
            }
        }

    }
    //console.log(obj)

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }


}
solve ([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
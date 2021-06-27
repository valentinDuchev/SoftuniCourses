function solve (input) {
    let newInput = JSON.parse(input);
    for (let key in newInput) {
        console.log(`${key}: ${newInput[key]}`)
    }

}
solve ('{"name": "George", "age": 40, "town": "Sofia"}'	
)
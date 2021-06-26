function solve (input) {
    for (let key in input) {
        console.log(`${key} -> ${input[key]}`)
    }

}
solve ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
function solve (input) {
    let cleaned = 0;
    for (let element of input) {
        if (element == 'soap') {
            cleaned += 10;
        } 
        if (element == 'water') {
            cleaned += cleaned/5;
        } 
        if (element == 'vacuum cleaner') {
            cleaned += cleaned/4;
        }
        if (element == 'mud') {
            cleaned -= cleaned/10;
        }
    }
    console.log(`The car is ${cleaned.toFixed(2)} clean.`)


}
solve (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])

solve (["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
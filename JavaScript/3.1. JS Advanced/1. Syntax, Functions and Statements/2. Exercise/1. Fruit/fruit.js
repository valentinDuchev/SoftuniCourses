function solve (fruit, grams, pricePerKg) {
    let kgS = Number(grams)/1000;
    let price = pricePerKg*kgS;
    console.log(`I need $${price.toFixed(2)} to buy ${kgS.toFixed(2)} kilograms ${fruit}.`)
}
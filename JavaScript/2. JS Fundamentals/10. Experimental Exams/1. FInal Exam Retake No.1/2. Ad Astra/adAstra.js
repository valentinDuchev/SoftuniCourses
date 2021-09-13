function solve(input) {

    let pattern = /(#|\|)(?<product>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;

    let match = pattern.exec(input)

    let result = [];
    let totalCalorie = 0;



    while (match != null) {

        let product = match[2];
        let date = match[3];
        let calorieForProduct = Number(match[4]);

        result.push(`Item: ${product}, Best before: ${date}, Nutrition: ${calorieForProduct}`);

        totalCalorie += calorieForProduct;
        match = pattern.exec(input)
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalorie / 2000)} days!`);


    for (let element of result) {
        console.log(element)
    }


}
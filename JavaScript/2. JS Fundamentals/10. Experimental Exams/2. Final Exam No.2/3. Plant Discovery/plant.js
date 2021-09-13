function solve(input) {

    let obj = {};
    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }
    let plantsNum = Number(input.shift());
    for (let i = 0; i < plantsNum; i++) {
        let token = input.shift().split('<->');
        let [plant, rarity] = token;
        let rating = 0;
        obj[plant] = { rarity, rating };
    }
    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(': ')
        let command = tokens.shift();
        let action = actions[command];
        action(tokens)
    }

    function rate(tokens) {
        let [currentPlant, currentNum] = tokens[0].split(' - ')
        currentNum = Number(currentNum)
        if (obj[currentPlant] != undefined) {


            if (obj[currentPlant].rating === 0) {
                obj[currentPlant].rating = currentNum;
            } else {
                obj[currentPlant].rating += currentNum;
                obj[currentPlant].rating /= 2;

            }
        } else {
            console.log('error')
        }
    }
    function update(tokens) {

        let [currentPlant, currentNum] = tokens[0].split(' - ')
        if (obj[currentPlant] != undefined) {
            currentNum = Number(currentNum);
            obj[currentPlant].rarity = currentNum;
        } else {
            console.log('error')
        }
    }
    function reset(tokens) {
        let currentPlant = tokens[0];
        if (obj[currentPlant] != undefined) {
            obj[currentPlant].rating = 0;
        } else {
            console.log('error')
        }
    }

    let objArr = Object.entries(obj).sort(compare);


    function compare(a, b) {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let ratingA = a[1].rating;
        let ratingB = b[1].rating;

        return rarityB - rarityA || ratingB - ratingA;
    }
    console.log('Plants for the exhibition:')
    for (let element of objArr) {
        console.log(`- ${element[0]}; Rarity: ${element[1].rarity}; Rating: ${element[1].rating.toFixed(2)}`)
    }
}
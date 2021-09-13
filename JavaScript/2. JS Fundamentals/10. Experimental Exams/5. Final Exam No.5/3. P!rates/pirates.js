function solve(input) {

    let obj = {};
    let actions = {
        'Plunder': plunder,
        'Prosper': prosper,
    }
    while (input[0] != 'Sail') {
        let token = input.shift().split('||');
        let [city, population, gold] = token;
        population = Number(population);
        gold = Number(gold);
        if (obj.hasOwnProperty(city) === false) {
            obj[city] = { population, gold };
        } else {
            obj[city].population += population;
            obj[city].gold += gold;
        }
    }
    if (input[0] == 'Sail') {
        input.shift();
    }

    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let action = actions[command];
        action(tokens);
    }

    let sorted = Object.entries(obj).sort(compare);

    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

    for (let [element, others] of sorted) {
        console.log(`${element} -> Population: ${others.population} citizens, Gold: ${others.gold} kg`)
    }

    function compare(a, b) {
        let goldA = a[1].gold;
        let goldB = b[1].gold;

        let nameA = a[0];
        let nameB = b[0];

        return goldB - goldA || nameA.localeCompare(nameB);
    }
    function plunder(token) {
        let currentCity = token[1];
        let populationKilled = Number(token[2]);
        let goldPlundered = Number(token[3]);
        obj[currentCity].population -= populationKilled;
        obj[currentCity].gold -= goldPlundered;
        console.log(`${currentCity} plundered! ${goldPlundered} gold stolen, ${populationKilled} citizens killed.`)
        if (obj[currentCity].population === 0 || obj[currentCity].gold === 0) {
            console.log(`${currentCity} has been wiped off the map!`)
            delete obj[currentCity];
        }
    }
    function prosper(token) {
        let currentCity = token[1];
        let goldIncrease = Number(token[2]);
        if (goldIncrease < 0) {
            console.log("Gold added cannot be a negative number!")
        } else {
            obj[currentCity].gold += goldIncrease;
            console.log(`${goldIncrease} gold added to the city treasury. ${currentCity} now has ${obj[currentCity].gold} gold.`)
        }
    }
}
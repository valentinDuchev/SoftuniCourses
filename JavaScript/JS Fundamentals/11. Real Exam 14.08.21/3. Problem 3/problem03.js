function solve(input) {
    let zoo = {};
    let areas = {};
    let actions = {
        "Add": add,
        "Feed": feed
    }

    while (input[0] != 'EndDay') {
        let tokens = input.shift().split(': ');
        let command = tokens.shift();
        let action = actions[command];
        action(tokens);
    }

    let sorted = Object.entries(zoo).sort(compareAnimals);
    console.log('Animals:');
    for (let [animalName, animalDetails] of sorted) {
        console.log(` ${animalName} -> ${animalDetails.neededFoodQuantity}g`);
    }

    console.log('Areas with hungry animals:');
    let sortedAreas = Object.entries(areas).sort(comapreAreas);
    for (let [area, animals] of sortedAreas) {
        if (animals.length > 0) {
            console.log(` ${area}: ${animals.length}`);
        }
    }

    function comapreAreas(a, b) {
        let areaAlength = a[1].length;
        let areaBlength = b[1].length;

        return (areaBlength - areaAlength) || (a[0].localeCompare(b[0]));
    }

    function compareAnimals(a, b) {
        let animalANeededFood = a[1].neededFoodQuantity;
        let animalBNeededFood = b[1].neededFoodQuantity;

        return (animalBNeededFood - animalANeededFood) || (a[0].localeCompare(b[0]));
    }

    function add(tokens) {
        let [name, neededFoodQuantity, area] = tokens[0].split('-');
        neededFoodQuantity = Number(neededFoodQuantity);

        if (zoo[name] == undefined) {
            zoo[name] = {
                neededFoodQuantity,
                area
            }
        } else {
            zoo[name].neededFoodQuantity += neededFoodQuantity;
        }

        if (areas[area] == undefined) {
            areas[area] = [];
        }

        if (!areas[area].includes(name)) {
            areas[area].push(name);
        }

    }

    function feed(tokens) {
        let [name, food] = tokens[0].split('-');
        food = Number(food);

        if (zoo[name] != undefined) {
            zoo[name].neededFoodQuantity -= food

            if (zoo[name].neededFoodQuantity <= 0) {
                delete zoo[name];
                let entries = Object.entries(areas);
                for (let [animal, details] of entries) {
                    if (details.includes(name)) {
                        let idx = details.indexOf(name);
                        details.splice(idx, 1);
                    }
                }
                console.log(`${name} was successfully fed`);
            }
        }
    }
}
solve (["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])
console.log('---')
solve (["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])
console.log('---') 
solve (["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
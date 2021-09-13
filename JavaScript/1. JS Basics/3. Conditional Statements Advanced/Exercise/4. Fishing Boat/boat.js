function fishing(input) {
    let budget = Number(input[0]);
    let season = String(input[1]);
    let fishermenNumber = Number(input[2]);

    let rentPrice = Number();

    switch (season) {
        case "Spring": rentPrice = 3000.00;
            if (fishermenNumber % 2 === 0) {
                rentPrice = rentPrice - (rentPrice / 20);
            } break;
        case "Summer": rentPrice = 4200.00;
            if (fishermenNumber % 2 === 0) {
                rentPrice = rentPrice - (rentPrice / 20);
            } break;
        case "Autumn": rentPrice = 4200.00; break;
        case "Winter": rentPrice = 2600.00;
            if (fishermenNumber % 2 === 0) {
                rentPrice = rentPrice - (rentPrice / 20);
            } break;
        default: console.log("error");
    }
    if (fishermenNumber <= 6) {
        rentPrice = rentPrice - (rentPrice / 10);
    } else if (fishermenNumber >= 7 && fishermenNumber <= 11) {
        rentPrice = rentPrice - ((15 / 100) * rentPrice);
    } else if (fishermenNumber >= 12) {
        rentPrice = rentPrice - (rentPrice / 4);
    }
    if (budget >= rentPrice) {
        let moneyLeft = budget - rentPrice;
        console.log("Yes! You have " + moneyLeft.toFixed(2) + " leva left.");
    } else if (rentPrice > budget) {
        let moneyNeeded = rentPrice - budget;
        console.log("Not enough money! You need " + moneyNeeded.toFixed(2) + " leva.")
    }
}
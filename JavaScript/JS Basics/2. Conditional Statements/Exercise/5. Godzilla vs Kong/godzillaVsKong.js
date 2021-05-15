function movie(input) {

    let budget = Number(input[0]);
    let statistsNumber = Number(input[1]);
    let dressForStatistsPrice = Number(input[2]);

    let dekor = budget / 10;

    if (statistsNumber > 150) {
        dressForStatistsPrice = dressForStatistsPrice - dressForStatistsPrice / 10;
    }

    let razhodi = dekor + (statistsNumber * dressForStatistsPrice);

    if (budget >= razhodi) {
        let moneyLeft = budget - razhodi;
        console.log("Action!");
        console.log("Wingard starts filming with" + " " + moneyLeft.toFixed(2) + " " + "leva left.");
    }
    else {
        let moneyNeeded = razhodi - budget;
        console.log("Not enough money!");
        console.log("Wingard needs" + " " + moneyNeeded.toFixed(2) + " " + "leva more.");
    }
}
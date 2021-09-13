function power(something, quantity) {

    let price = Number();
    if (something === "coffee") {
        price = 1.50;
    } else if (something === 'water') {
        price = 1.00;
    } else if (something === 'coke') {
        price = 1.40;
    } else if (something === 'snacks') {
        price = 2.00;
    }

    console.log((quantity * price).toFixed(2));
}
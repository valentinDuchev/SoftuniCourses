function shop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let productPrice = Number();



    if (product === "coffee" && city === "Varna") {
        productPrice = 0.45;
    } else if (product === "water" && city === "Varna") {
        productPrice = 0.70;
    } else if (product === "beer" && city === "Varna") {
        productPrice = 1.10;
    } else if (product === "sweets" && city === "Varna") {
        productPrice = 1.35;
    } else if (product === "peanuts" && city === "Varna") {
        productPrice = 1.55;
    }


    if (product === "coffee" && city === "Plovdiv") {
        productPrice = 0.40;
    } else if (product === "water" && city === "Plovdiv") {
        productPrice = 0.70;
    } else if (product === "beer" && city === "Plovdiv") {
        productPrice = 1.15;
    } else if (product === "sweets" && city === "Plovdiv") {
        productPrice = 1.30;
    } else if (product === "peanuts" && city === "Plovdiv") {
        productPrice = 1.50;
    }


    if (product === "coffee" && city === "Sofia") {
        productPrice = 0.50;
    } else if (product === "water" && city === "Sofia") {
        productPrice = 0.80;
    } else if (product === "beer" && city === "Sofia") {
        productPrice = 1.20;
    } else if (product === "sweets" && city === "Sofia") {
        productPrice = 1.45;
    } else if (product === "peanuts" && city === "Sofia") {
        productPrice = 1.60;
    }
    let all = productPrice * quantity;
    console.log(all.toFixed(2));
}
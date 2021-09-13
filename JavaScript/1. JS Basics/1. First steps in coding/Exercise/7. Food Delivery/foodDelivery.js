function solve (input) {
    let [chicken, fish, vegetarian] = (input);
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;
    let overallPrice = 0;
    overallPrice += Number(chicken) * chickenPrice;
    overallPrice += Number(fish) * fishPrice;
    overallPrice += Number(vegetarian) * vegetarianPrice;
    let dessertPrice = overallPrice / 5;
    let deliveryCost = 2.50;
    overallPrice += deliveryCost;
    overallPrice += dessertPrice;

    console.log(overallPrice)


}
solve (['2', '4', '3']);
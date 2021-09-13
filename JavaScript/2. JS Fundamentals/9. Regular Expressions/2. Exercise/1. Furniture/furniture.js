function solve (input) {

    let pattern = />>([A-Z]*[a-z]*)<<(\d+(?:\.\d+)?)!(\d+)/g;
    let nameArray = [];
    let overallPrice = Number();
    for (let element of input) {
        let match = pattern.exec(element);
        while (match != null) {
            let name = match[1];
            let price = match[2];
            let qty = match[3];
            price = Number(price);
            qty = Number(qty);
            overallPrice+=price*qty;

            nameArray.push(name);
            match = pattern.exec(element)
        }
    }
    console.log(`Bought furniture:`)
    for (let element of nameArray) {
        console.log(element)
    }
    console.log(`Total money spend: ${overallPrice.toFixed(2)}`)
}
solve ([">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"])
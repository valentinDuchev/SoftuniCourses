function solve(arr) {

    let map = new Map();

    for (let line of arr) {
        let [product, qty] = line.split(' ');
        qty = Number(qty);

        if (map.has(product)) {
            qty += map.get(product)
        }

        map.set(product, qty)

    }
    for (let [product, qty] of map) {
        console.log(`${product} -> ${qty}`)
    }

}
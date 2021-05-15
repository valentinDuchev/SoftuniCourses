function sum(input) {
    let sumNeeded = Number(input[2]);
    let x1 = Number(input[0]);
    let x2 = Number(input[1]);
    let isFound = false;
    let counter = 0;
    for (let i = x1; i <= x2; i++) {
        for (let z = x1; z <= x2; z++) {
            counter++;
            if (i + z === sumNeeded) {
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${z} = ${i + z})`);
                break;
            } else {
                isFound === false;
            }
        } if (isFound === true) {
            break;
        }
    } if (isFound === false) {
        console.log(`${counter} combinations - neither equals ${sumNeeded}`)
    }
}
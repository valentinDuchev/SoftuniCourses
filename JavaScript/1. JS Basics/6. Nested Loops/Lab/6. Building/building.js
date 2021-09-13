function building(input) {
    let etages = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = etages; i > 0; i--) {
        let result = "";
        for (let z = 0; z < rooms; z++) {
            if (i % 2 === 0 && i !== etages) {
                result += "O" + i + z + " ";
            } if (i % 2 === 1 && i !== etages) {
                result += "A" + i + z + " ";
            } if (i === etages) {
                result += "L" + i + z + " ";
            }
        } console.log(result)
    }

}
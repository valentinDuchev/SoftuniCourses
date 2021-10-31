function solve(input) {
    let arr = [];
    let card;
    let suit;
    for (let element of input) {
        if (element.length == 2) {
            [card, suit] = element.split('')


        } else {
            card = element[0] + element[1];
            suit = element[2];
        }
        try {
            arr.push(solve1(card, suit));
        } catch (err) {
            console.log(`Invalid card: ${card}${suit}`)
        }
    }



    function solve1(card, suit) {
        let suitObj = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (Object.keys(suitObj).includes(suit) === false) {
            throw new Error(`Invalid card! ${card}${suit} `)
        }
        if (validFaces.includes(card) === false) {
            throw new Error(`Invalid card!: ${card}${suit}`)
        }
        return {
            card,
            suit: suitObj[suit],
            toString() {
                return this.card + this.suit;
            }
        }


    }

    let newArr = [];
    for (let element of arr) {
        newArr.push(Object.values(element)[0] + Object.values(element)[1])

    }
    console.log(newArr.join(' '))

}
function solve(card, suit) {
    let suitObj = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (Object.keys(suitObj).includes(suit) === false) {
        throw new Error('Invalid suit!')
    }
    if (validFaces.includes(card) === false) {
        throw new Error('Invalid face!')
    }
    return {
        card,
        suit: suitObj[suit],
        toString() {
            return this.card + this.suit;
        }
    }
}
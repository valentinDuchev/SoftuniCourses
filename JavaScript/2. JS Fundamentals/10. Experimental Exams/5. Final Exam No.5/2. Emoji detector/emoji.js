function solve(input) {

    let patternNum = /\d/g;
    let matchNum = patternNum.exec(input)
    let coolness = 1;
    while (matchNum != null) {
        coolness *= Number(matchNum[0])
        matchNum = patternNum.exec(input)
    }
    console.log(`Cool threshold: ${coolness}`)

    let pattern = /(::|\*\*)([A-Z]{1}[a-z]{2,})\1/g;
    let match = pattern.exec(input);
    let counter = 0;
    let emojiArr = [];
    let coolArr = [];

    while (match != null) {
        counter = 0;
        let currentEmoji = match[2];
        for (let i = 0; i < match[2].length; i++) {
            counter += (match[2].charCodeAt(i))
        }
        if (Number(counter) >= Number(coolness)) {
            coolArr.push(match[0]);
            emojiArr.push(currentEmoji);
        } else {
            emojiArr.push(currentEmoji);
        }
        match = pattern.exec(input)
    }
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are: `)

    for (let element of coolArr) {
        console.log(element + ' ')
    }
}
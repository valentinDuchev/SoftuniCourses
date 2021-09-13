function solve(sentence, word) {

    let counter = 0;
    let newSentence = sentence.split(' ');

    for (let element of newSentence) {
        if (element === word) {
            counter += 1;
        }
    }
    console.log(counter)
}
function solve(input) {

    let word = input.shift();


    while (input[0] !== 'Play') {
        let token = input.shift().split(' ')
        let command = token[0];

        if (command === 'Move') {
            let index = token[1];
            let wordAsArr = word.split('')
            let toMove = wordAsArr.splice(index, 1);
            wordAsArr.push(toMove[0]);
            word = wordAsArr.join('')

        }

        else if (command === 'Insert') {
            let index = token[2];
            let left = word.substring(0, index);
            let right = word.substring(index)
            word = left + ' ' + right;

        }

        else if (command === 'Reverse') {
            let toReverse = token[1];
            if (word.includes(toReverse)) {
                let newWord = word.replace(toReverse, '');
                let toReverseArr = toReverse.split('').reverse()
                word = newWord + toReverseArr.join('')
            }

        }

        else if (command === 'Exchange') {
            let newLetters = token[2];
            let newLettersLength = Number(newLetters.length);
            let first = word.substring(0, newLettersLength);
            let second = word.substring(newLettersLength);
            word = newLetters + second;
            let wordAsArr = word.split('');
            let newArr = [];
            for (let i = 0; i < wordAsArr.length; i++) {
                newArr.push(wordAsArr[i])
                newArr.push(' ')
            }
            console.log(newArr.join(''))
            return;
        }

        else if (command === 'Pass') {
            
                let wordAsArr = word.split('')
                let newArr = [];
                for (let i = 0; i < wordAsArr.length; i++) {
                    newArr.push(wordAsArr[i])
                    newArr.push(' ')
                }
                console.log(newArr.join(''))
                return;
            }
        
    }
    if (input[0] === 'Play') {
        let wordAsArr = word.split(' ');
        console.log(`You are playing with the word ${wordAsArr[0]}.`)
    }


}
solve(['XCOBEKA',
    'Move 1',
    'Reverse EKAC',
    'Reverse XOB',
    'Insert Space 4',
    'Pass it',
    'Play'])

console.log('--')
solve(['BNGOOGG',
    'Move 2',
    'Reverse NG',
    'Insert Space 5',
    'Exchange Tiles REA',
    'Play'])

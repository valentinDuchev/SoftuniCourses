function solve (input) {
    
    let message = input.shift();
    let messageLength = Number(message.length);
    
    while (input[0] != 'Finish' ) {
        let token = input.shift().split(' ');
        let command = token[0];
        

        if (command === 'Replace') {
            let toReplace = token[1];
            let replacement = token[2];
            let messageArr = message.split(toReplace)
            message = messageArr.join(replacement)
            console.log(message)
        } else if (command === 'Make') {
            if (token[1] === 'Upper') {
                let messageArr = message.toUpperCase();
                message = messageArr;
                console.log(message)
            } else if (token[1] === 'Lower') {
                let messageArr = message.toLowerCase();
                message = messageArr;
                console.log(message)
            }
        } else if (command === 'Check') {
            if (message.includes(token[1])){
                console.log(`Message contains ${token[1]}`);
            } else {
                console.log(`Message doesn't contain ${token[1]}`);
            }
        } else if (command === 'Sum') {
            if (Number(token[1])>=0 && Number(token[1]<=messageLength)) {
                if (Number(token[2])>=0 && Number(token[2])<=messageLength) {
                    let messageArr = message.substring(Number(token[1]), Number(token[2])).split('');
                    let result = 0;
                    for (let element of messageArr) {
                        result += messageArr.join('').charCodeAt(element)
                    } console.log(result)
                    
                } else {
                    console.log('Invalid indeces!')
                }
            } else {
                console.log('Invalid indeces!')
            }
        } else if (command === 'Cut') {
            if (Number(token[1])>=0 && Number(token[1]<=messageLength)) {
                if (Number(token[2])>=0 && Number(token[2])<=messageLength) {
                    let left = message.substring(0, Number(token[1]));
                    let rigth = message.substring(Number([token[2]])+1);
                    message = left + rigth;
                    //message = messageArr;
                    console.log(message)
                } else {
                    console.log('Invalid indeces!')
                }
            } else {
                console.log('Invalid indeces!')
            }
        }
        
    }



}
solve ((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]))

console.log('---')

solve((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
)
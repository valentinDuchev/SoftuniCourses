function solve(number, command1, command2, command3, command4, command5) {

    let commandArr = [];
    commandArr.push(command1)
    commandArr.push(command2)
    commandArr.push(command3)
    commandArr.push(command4)
    commandArr.push(command5)

    for (let element of commandArr) {
        if (element === 'chop') {
            number /= 2;
            console.log(number)
        } else if (element === 'dice') {
            number = Math.sqrt(number);
            console.log(number)
        } else if (element === 'spice') {
            number += 1;
            console.log(number)
        } else if (element === 'bake') {
            number = number * 3;
            console.log(number)
        } else if (element === 'fillet') {
            number = 0.8 * number;
            console.log(number.toFixed(1))
        }
    }
}
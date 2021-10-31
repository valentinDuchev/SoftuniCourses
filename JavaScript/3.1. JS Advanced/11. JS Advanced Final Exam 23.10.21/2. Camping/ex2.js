class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500
        }
        this.listOfParticipians = [];
        this.nameArr = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.nameArr.includes(name)) {
            return (`The ${name} is already registered at the camp.`)
        }
        if (Number(money) < Number(this.priceForTheCamp[condition])) {
            return (`The money is not enough to pay the stay at the camp.`)
        }
        this.listOfParticipians.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        this.nameArr.push(name)
        return (`The ${name} was successfully registered.`)
    }

    unregisterParticipant(name) {
        let arr = [];
        for (let element of this.listOfParticipians) {
            arr.push(element.name)
            if (element.name == name) {
                this.listOfParticipians.splice(this.listOfParticipians.indexOf(element), 1);
                this.nameArr.splice(this.nameArr.indexOf(name), 1)
                return (`The ${name} removed successfully.`)
            }

        }
        if (arr.includes(name) == false) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let conditionArr = [];
        let powerArr = [];
        if (typeOfGame == 'WaterBalloonFights') {
            if (this.nameArr.includes(participant1) == false || this.nameArr.includes(participant2) == false) {
                throw Error(`Invalid entered name/s.`) ////////////
            }
            if (participant1 == participant2) {
                throw new Error ('Invalid entered name/s.')
            }

            for (let element of this.listOfParticipians) {
                if (element.name == participant1) {
                    conditionArr.push(element.condition)
                }
                if (element.name == participant2) {
                    conditionArr.push(element.condition)
                }
            }
            if (conditionArr[0] != conditionArr[1]) {
                throw new Error (`Choose players with equal condition.`)
            }
            for (let element of this.listOfParticipians) {
                if (element.name == participant1) {
                    powerArr.push(element.name);
                    powerArr.push(element.power)
                }
                if (element.name == participant2) {
                    powerArr.push(element.name);
                    powerArr.push(element.power)
                }
            }
            if (powerArr[1] > powerArr[3]){
                for (let element of this.listOfParticipians) {
                    if (element.name == powerArr[0]) {
                        element.wins += 1;
                    }
                }
                return (`The ${powerArr[0]} is winner in the game ${typeOfGame}.`)
            } 
            else if (powerArr[1] < powerArr[3]) {
                for (let element of this.listOfParticipians) {
                    if (element.name == powerArr[2]) {
                        element.wins += 1;
                    }
                }
                return (`The ${powerArr[2]} is winner in the game ${typeOfGame}.`)
            } else {
                return (`There is no winner.`)
            }
        }


        if (typeOfGame == 'Battleship') {
            let powerArr = [];
            if (this.nameArr.includes(participant1) == false) {
                throw Error(`Invalid entered name/s.`) ////////////
            }
            for (let element of this.listOfParticipians) {
                if (element.name == participant1) {
                    element.power += 20;
                }
            }
            return ( `The ${participant1} successfully completed the game ${typeOfGame}.`)

        }
    }

    toString() {
        let toReturn = [];
        toReturn.push(`${this.organizer} will take ${this.listOfParticipians.length} participants on camping to ${this.location}`)
        let sorted = this.listOfParticipians.sort((a, b) => {
            return b.wins - a.wins;
        })
        for (let element of sorted) {
            toReturn.push(`${element.name} - ${element.condition} - ${element.power} - ${element.wins}`)
        }
        return toReturn.join('\n')


    }

}

let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(camp.registerParticipant('Petar Petarson', 'collegian', 700));
console.log(camp.registerParticipant('Sara Dickinson', 'collegian', 700));
console.log(camp.registerParticipant('Pesho', 'student', 700)) ///////////
console.log(camp.registerParticipant('Gosho', 'collegian', 700)) /////////
console.log(camp.registerParticipant('Sasho', 'collegian', 700))
console.log(camp.registerParticipant('Misho', 'student', 700))

console.log(camp.unregisterParticipant('Pesho'))
console.log(camp.unregisterParticipant('Gosho'))

//console.log(camp.timeToPlay('Battleship', 'Sasho'))
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'))
console.log(camp.timeToPlay('Battleship', 'Petar Petarson'))

console.log(camp.timeToPlay('WaterBalloonFights', 'Sasho', 'Sara Dickinson'))
console.log(camp.timeToPlay('WaterBalloonFights', 'Sasho', 'Petar Petarson'))

console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson'))
//console.log(camp.timeToPlay('WaterBalloonFights', 'Sasho', 'Sasho'))

console.log(camp.toString())








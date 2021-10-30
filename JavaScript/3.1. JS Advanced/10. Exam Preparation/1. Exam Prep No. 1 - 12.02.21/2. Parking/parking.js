class Parking {

    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.emptySlots = capacity;
        this.numberArr = [];
    }

    addCar(carModel, carNumber) {
        if (this.currentCars > this.capacity) {
            throw new Error("Not enough parking space.");
        } else {
            this.vehicles.push({
                carModel,
                carNumber,
                payed: false
            });
            this.numberArr.push(carNumber);
            this.emptySlots -= 1;
            return (`The ${carModel}, with a registration number ${carNumber}, parked.`)
        }
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);
        if (car) {
            if (car.payed == false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            } else {
                this.vehicles.splice(this.vehicles.indexOf(car), 1);
                this.emptySlots++;
                return (`${carNumber} left the parking lot.`)
            }
        } else {
            throw new Error(`The car, you're looking for, is not found.`);
        }
    }

    pay(carNumber) {
        let car = this.vehicles.find(x => x.carNumber === carNumber);

        if (car) {
            if (car.payed == true) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            } else {
                car.payed = true;
                return (`${carNumber}'s driver successfully payed for his stay.`)
            }
        } else {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            let modelsArr = [];
            let numsArr = [];
            let payedArr = [];
            for (let element of this.vehicles) {
                if (element.payed == false) {
                    modelsArr.push(`${element.carModel} == ${element.carNumber} - Not payed`)
                } else {
                    modelsArr.push(`${element.carModel} == ${element.carNumber} - Has payed`)
                }

            }
            modelsArr.sort((a, b) => a.localeCompare(b))
            return (`The Parking Lot has ${this.emptySlots} empty spots left.\n${modelsArr.join('\n')}`)
        } else {
            for (let element of this.vehicles) {
                if (element.carNumber == carNumber) {
                    if (element.payed == false) {
                        return (`${element.carModel} == ${element.carNumber} - Not payed`)
                    } else {
                        return (`${element.carModel} == ${element.carNumber} - Has payed`)
                    }
                }
            }

        }
    }
}
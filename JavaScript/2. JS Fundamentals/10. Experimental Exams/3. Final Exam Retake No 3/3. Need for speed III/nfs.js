function solve(input) {
    let carNumber = Number(input.shift());
    let obj = {};
    for (let i = 0; i < carNumber; i++) {
        let currentCar = input.shift().split('|')
        let car = currentCar[0];
        obj[car] = { mileage: Number(currentCar[1]), fuel: Number(currentCar[2]) }
    }
    while (input[0] != 'Stop') {
        let token = input.shift().split(' : ');
        let command = token[0];
        let currCar = token[1];
        if (command === 'Drive') {
            let distanceToDrive = Number(token[2]);
            let fuelNeeded = Number(token[3]);
            if (fuelNeeded > Number(obj[currCar].fuel)) {
                console.log("Not enough fuel to make that ride");
            } else {
                obj[currCar].fuel -= fuelNeeded;
                obj[currCar].mileage += distanceToDrive;
                console.log(`${currCar} driven for ${distanceToDrive} kilometers. ${fuelNeeded} liters of fuel consumed.`)
            }
            if (obj[currCar].mileage >= 100000) {
                console.log(`Time to sell the ${currCar}!`)
                delete obj[currCar];
            }
        } else if (command === 'Refuel') {
            let fuelToRefill = token[2];
            if (((obj[currCar].fuel) + fuelToRefill) > 75) {
                fuelToRefill = 75 - Number(obj[currCar].fuel);
                obj[currCar].fuel = 75;
            } else {
                obj[currCar].fuel += fuelToRefill;
            }
            console.log(`${currCar} refueled with ${fuelToRefill} liters`)

        } else if (command === 'Revert') {
            let kilometersToDecrease = token[2];
            if ((obj[currCar].mileage - Number(kilometersToDecrease)) < 10000) {
                obj[currCar].mileage = 10000;
            } else {
                obj[currCar].mileage -= kilometersToDecrease;
                console.log(`${currCar} mileage decreased by ${kilometersToDecrease} kilometers`)
            }

        }


    }


    let sorted = Object.entries(obj).sort(compare);

    for (element of sorted) {
        console.log(`${element[0]} -> Mileage: ${element[1].mileage} kms, Fuel in the tank: ${element[1].fuel} lt.`)
    }

    function compare(a, b) {
        let mileageA = a[1].mileage;
        let mileageB = b[1].mileage;

        let alphabeticalA = a[0];
        let alphabeticalB = b[0];
        return mileageB - mileageA || alphabeticalA.localeCompare(alphabeticalB);
    }


}
function solve(speed, place) {

    let speedLimit = 0;

    if (place === 'city') {
        speedLimit = 50;
    } else if (place === 'residential') {
        speedLimit = 20;
    } else if (place === 'motorway') {
        speedLimit = 130;
    } else if (place === 'interstate') {
        speedLimit = 90;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        if (speed - speedLimit <= 20) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        } else if (speed - speedLimit >= 21 && speed - speedLimit <= 40) {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
        } else {
            console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    }
}
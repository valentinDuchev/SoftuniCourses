function solve (input) {
    let newTowns = [];
    class Town {
        constructor (town, latitude, longitude) {
            this.town = town; 
            this.latitude = latitude;
            this.longitude = longitude
        }
    }

    for (let element of input) {
        let [town, latitude, longitude] = element.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2)
        newTowns.push(new Town(town, latitude, longitude))
    }

    for (let element of newTowns) {
        console.log(element)
    }
 

}
solve (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.soldTickets = 0;
        this.profit = 0;
        this.lastArr = [];
    }

    newScreening(date, hall, description) {
        let obj = {
            date: date
        }    
        obj[date] = {
            hall: hall, 
            description: description
        }    
        //return(obj.date + ' ' + obj[date].hall)

        //this.screenings.push(`${obj.date} -> ${obj[date].hall}`);
        if (this.screenings.includes(`${obj.date} -> ${obj[date].hall}`)) {
            throw new Error (`Sorry, ${obj[date].hall} hall is not available on ${obj.date}`)
        } else {
            this.screenings.push(`${obj.date} -> ${obj[date].hall}`);
            this.lastArr.push(`${obj[date].hall} -> ${obj.date} -> ${obj[date].description}`)
            return `New screening of ${this.movieName} is added.`
        }
    }

endScreening(date, hall, soldTickets) {
    let toCheck = `${date} -> ${hall}`;
    
    if (this.screenings.includes(toCheck) == false) {
        throw new Error ( `Sorry, there is no such screening for ${this.movieName} movie.`);
    } else {
        this.soldTickets += Number(soldTickets);
        this.profit += Number(this.ticketPrice * soldTickets);
        this.screenings.splice(this.screenings.indexOf(toCheck), 1);
        this.lastArr.splice(this.screenings.indexOf(toCheck), 1)
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${(soldTickets*this.ticketPrice)}`
    }


}

toString() {
    let finalArr = [];
    finalArr.push(`${this.movieName} full information:`)
    finalArr.push(`Total profit: ${this.profit}`);
    finalArr.push(`Sold tickets: ${this.soldTickets}`)
    if (this.screenings.length == 0) {
        finalArr.push('No more screenings!')
    } else {
        finalArr.push('Remaining film screenings:')
        for (let element of this.lastArr) {
            let [date, hall, description] = element.split(' -> ');
            //return this.lastArr[0].indexOf(hall)
            //return hall[0]
            this.lastArr.sort((a, b) => {
                return a[0].localeCompare(b[0])
                //a.hall.localeCompare(b.hall);
                //return a.indexOf(hall[0]).localeCompare(b.indexOf(hall[0]))
               // return this.lastArr[a]
            })
            for (let element of this.lastArr) {
                let [hall, date, description] = element.split(' -> ');
                finalArr.push(`${hall} - ${date} - ${description}`);
            }
            return finalArr.join('\n')
        }
        
    }
    

}
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());
console.log('---')
m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

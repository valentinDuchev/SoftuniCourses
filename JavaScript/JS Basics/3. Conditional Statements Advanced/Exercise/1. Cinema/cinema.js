function movies (input) {
    let movieType = String(input[0]);
    let rowsNumber = Number(input[1]);
    let columnsNumber = Number(input[2]);
 
    let ticketPrice = Number();
 
    if (movieType==="Premiere") {
       ticketPrice = 12.00;
    } else if (movieType === "Normal") {
       ticketPrice = 7.50;
    } else if (movieType === "Discount") {
       ticketPrice= 5.00;
    } else {
       console.log("error");
    }
 
    let allProfit = ticketPrice*(rowsNumber*columnsNumber);
    console.log(allProfit.toFixed(2)+" leva");
 
 }
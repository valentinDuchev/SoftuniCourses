function trip (input) {

    let budget=Number(input[0]);
    let season = String(input[1]);
    let moneySpend = Number();
    let placeToSleep = String();
 
 
    if (budget<=100) {
       console.log("Somewhere in Bulgaria");
       switch (season){
          case "summer": moneySpend=(budget)*(3/10); placeToSleep="Camp"; break;
          case "winter": moneySpend=budget*(7/10); placeToSleep="Hotel"; break;
          default: console.log("error"); break;
       }
    } else if (budget>100 && budget <=1000) {
       console.log("Somewhere in Balkans");
       switch (season){
          case "summer": moneySpend=(budget)*(4/10); placeToSleep="Camp"; break;
          case "winter": moneySpend=budget*(8/10); placeToSleep="Hotel"; break; 
          default: console.log("error"); break;
       }
    } else if (budget >1000) {
       console.log("Somewhere in Europe");
       switch (season){
          case "summer": moneySpend=(budget)*(9/10); placeToSleep="Hotel"; break; 
          case "winter": moneySpend=budget*(9/10); placeToSleep="Hotel"; break;
          default: console.log("error"); break;
       }
    }
 
    console.log(placeToSleep+" - "+moneySpend.toFixed(2));
 
 }
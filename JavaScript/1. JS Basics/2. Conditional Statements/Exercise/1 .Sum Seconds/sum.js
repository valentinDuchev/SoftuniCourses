function seconds(input) {

    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
 
    let totalTime = firstTime+secondTime+thirdTime;
 
    let mins=Math.floor(totalTime/60);
    let ostTime = totalTime%60;
 
    if (ostTime <10) {
       console.log(`${mins}:0${ostTime}`);
 
    }
    else {
       console.log(`${mins}:${ostTime}`);
    }
 } 
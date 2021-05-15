function worldRecord(input) {

    let worldRecord = Number(input[0]);
    let rangeMeter = Number(input[1]);
    let oneMeterTime = Number(input[2]);

    let slowering = Math.floor(rangeMeter / 15) * 12.5;

    let overallTime = (rangeMeter * oneMeterTime) + slowering;

    if (worldRecord > overallTime) {
        console.log("Yes, he succeeded! The new world record is" + " " + `${overallTime.toFixed(2)}` + " " + "seconds.")
    }
    else {
        let razlika = overallTime - worldRecord;
        console.log("No, he failed! He was" + " " + razlika.toFixed(2) + " " + "seconds slower.")
    }

}
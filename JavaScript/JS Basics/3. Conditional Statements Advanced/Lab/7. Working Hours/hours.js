function workHours(input) {
    let hours = Number(input[0]);
    let day = String(input[1]);

    if (hours <= 18 && hours >= 10 && day === "Monday") {
        console.log("open");
    } else if (hours <= 18 && hours >= 10 && day === "Tuesday") {
        console.log("open");
    } else if (hours <= 18 && hours >= 10 && day === "Wednesday") {
        console.log("open");
    } else if (hours <= 18 && hours >= 10 && day === "Thursday") {
        console.log("open");
    } else if (hours <= 18 && hours >= 10 && day === "Friday") {
        console.log("open");
    } else if (hours <= 18 && hours >= 10 && day === "Saturday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}
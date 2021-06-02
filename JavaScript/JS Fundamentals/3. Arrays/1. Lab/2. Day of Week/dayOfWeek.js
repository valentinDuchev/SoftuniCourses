function sum(number) {

    let daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (number >= 8 || number <= 0) {
        console.log("Invalid day!")

    } else {
        console.log(daysArr[number - 1])
    }

}
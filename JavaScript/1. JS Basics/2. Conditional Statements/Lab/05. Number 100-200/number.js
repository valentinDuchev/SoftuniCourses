function number(input) {

    let numberOne = Number(input[0]);

    if (numberOne < 100) {
        console.log("Less than 100");
    }
    else if (numberOne >= 100 && numberOne <= 200) {
        console.log("Between 100 and 200");
    }
    else {
        console.log("Greater than 200");
    }
}
number([200])
function number(input) {

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);

    if (numberOne > numberTwo) {
        console.log(numberOne);
    }
    else {
        console.log(numberTwo);
    }



}

number([2, 5])
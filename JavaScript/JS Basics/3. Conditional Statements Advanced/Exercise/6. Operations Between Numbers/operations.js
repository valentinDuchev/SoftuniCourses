function math(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = String(input[2]);
 
    let result = String();
 
    switch (operator) {
       case "+": result = number1 + number2;
          if (result % 2 === 0) {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "even")
          } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "odd");
          } break;
 
       case "-": result = number1 - number2;
          if (result % 2 === 0) {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "even")
          } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "odd");
          } break;
 
       case "/": result = number1 / number2;
          if (result % 2 === 0) {
             if (number2 === 0) {
                console.log("Cannot divide " + number1 + " by zero");
             } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result.toFixed(2))
             }
          } else {
             if (number2 === 0) {
                console.log("Cannot divide " + number1 + " by zero");
             } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result.toFixed(2)); }
          } break;
 
       case "*": result = number1 * number2;
          if (result % 2 === 0) {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "even")
          } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result + " - " + "odd");
          } break;
 
       case "%": result = number1 % number2;
          if (result % 2 === 0) {
             if (number2 === 0) {
                console.log("Cannot divide " + number1 + " by zero");
             } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result) }
          } else {
             if (number2 === 0) {
                console.log("Cannot divide " + number1 + " by zero");
             } else {
             console.log(number1 + " " + operator + " " + number2 + " = " + result); }
          } break;
       default: console.log("error"); break;
    }
 
 
 
 }
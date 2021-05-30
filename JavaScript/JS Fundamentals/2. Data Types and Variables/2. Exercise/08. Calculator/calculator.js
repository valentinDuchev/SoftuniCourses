function calc (num1, operator, num2) { 
    switch (operator) {
        case ('-'): console.log(num1 - num2); break;
        case ('+'): console.log(num1 + num2); break;
        case ('*'): console.log(num1 * num2); break;
        case ('/'): console.log(num1 / num2); break;

    }
}
calc (5, '-', 2)
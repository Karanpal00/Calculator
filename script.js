function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide() {
    if (num2 == 0) {
        return "Divide by zero error.";
    }
    return num1/num2;
}

function operate(num1, num2, opr) {
    switch(opr) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        default:
            return divide(num1, num2);
    }
}
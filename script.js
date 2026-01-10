let prevNum = "", curNum = "", operation = "";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => setEventListener(button));
const display = document.querySelector(".display");

function addNumbers(button) {
    if (curNum.length == 10) return alert("Numeber length exceeded. Enter shorter number");
    let tempVar = button.target.id;
    curNum += tempVar;
    display.textContent = `${prevNum} ${operation} ${curNum}`;
}

function addOperation(button) {
    if (curNum == '') return;
    if (prevNum != '') {
        calculate();
    }

    let tempVar = button.target.id;
    operation = tempVar;
    prevNum = curNum;
    curNum = '';

    display.textContent = `${prevNum} ${operation}`; 
    
}

function calculate() {
    if (prevNum == '' || curNum == '') return;
    prevNum = parseFloat(prevNum);
    curNum = parseFloat(curNum);
    let result;

    switch(operation) {
        case '+':
            result = prevNum+curNum;
            break;
        case '-':
            result = prevNum-curNum;
            break;
        case '*':
            result = prevNum*curNum;
            break;
        case '/':
            if (curNum == 0) return alaert(`Divide by zero erro.`);
            result = Math.round(prevNum/curNum);
            break;
        default:
            result = "Invalid";
    }

    prevNum = '';
    operation = '';
    curNum = result.toString();
    display.textContent = `${curNum}`;
}

function clearDisplay() {
    prevNum = '';
    curNum = '';
    operation = '';
    display.textContent = '0';
}

function setEventListener(button) {
    const operators = ['+', '-', '*', '/'];
    if (button.id == "clear") {
        button.addEventListener("click", clearDisplay);
    } else if (operators.includes(button.id)) {
        button.addEventListener("click", addOperation);
    } else if (button.id == '=') {
        button.addEventListener("click", calculate);
    }else {
        button.addEventListener("click", addNumbers);
    }
}

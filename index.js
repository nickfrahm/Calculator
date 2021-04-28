const Calculator = {
    input: "",
    decimal: false,
    operationValue: 0,
    operation: ""
};

//allow input from clicking numbers
const numbers = document.querySelectorAll("div.num");
numbers.forEach((number) => number.addEventListener("click", () => setNumInput(number.innerHTML)));

//allow for backspace of last input
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => deleteLastEntry());

//allow for clear of everything
const clear = document.getElementById("clear");
clear.addEventListener("click", () => clearAll());

//giving operation buttons event handlers
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

addBtn.addEventListener("click", () => add());
subtractBtn.addEventListener("click", () => subtract());
multiplyBtn.addEventListener("click", () => multiply());
divideBtn.addEventListener("click", () => divide());

//calculate button
const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => calculate());

//set the input to output box
function displayInput() {
    const outputText = document.querySelector("div.display-box");
    outputText.innerHTML = Calculator.input;
}

function add() {
    
};

function subtract() {
    
};

function multiply() {
    
};

function divide() {
    
};

function calculate() {
    return;
}

function clearAll() {
    Calculator.input = "0";
    Calculator.decimal = false; 
    Calculator.operationValue = 0;
    Calculator.operation = "";
    displayInput();
};

function deleteLastEntry() {
    let inputLength = Calculator.input.length;
    let newInput = Calculator.input.slice(0, -1);
    //console.log(newInput);

    if (inputLength > 1 && parseFloat(Calculator.input) > 0) {
        console.log("positive backspace")
        Calculator.input = newInput;
        displayInput();
    } else if (inputLength > 2 && parseFloat(Calculator.input) < 0) {
        console.log("negative backspace")
        Calculator.input = newInput;
        displayInput();
    } else {
        console.log("only one digit")
        Calculator.input = "0";
        console.log(Calculator.input);
        displayInput();
    }
};

function setNumInput(num) {
    if (Calculator.input !== "0") {
        Calculator.input += num;
        //console.log(Calculator.input);
        displayInput();
    } else {
        Calculator.input = num;
        //console.log(Calculator.input);
        displayInput();
    }
};
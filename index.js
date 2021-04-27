const Calculator = {
    input: "",
    output: "0",
    decimal: false,
    operationValue: ""
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
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

add.addEventListener("click", () => add());
subtract.addEventListener("click", () => subtract());
multiply.addEventListener("click", () => multiply());
divide.addEventListener("click", () => divide());

//set the input as output
function displayOutput() {
    const outputText = document.querySelector("div.display-box");
    Calculator.output = Calculator.input;
    outputText.innerHTML = Calculator.output;
}

function add() {
    Calculator.operationValue = 
    Calculator.input = "0";
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function calculate(a,b) {
    
};

function clearAll() {
    Calculator.input = "0";
    Calculator.output = "0";
    Calculator.decimal = false; 
    Calculator.operationValue = "";
    displayOutput();
};

function deleteLastEntry() {
    let inputLength = Calculator.input.length;
    let newInput = Calculator.input.slice(0, -1);
    console.log(newInput);

    if (inputLength > 1 && parseFloat(Calculator.input) > 0) {
        console.log("positive backspace")
        Calculator.input = newInput;
        displayOutput();
    } else if (inputLength > 2 && parseFloat(Calculator.input) < 0) {
        console.log("negative backspace")
        Calculator.input = newInput;
        displayOutput();
    } else {
        console.log("only one digit")
        Calculator.input = "0";
        console.log(Calculator.input);
        displayOutput();
    }
};

function setNumInput(num) {
    if (Calculator.input !== "0") {
        Calculator.input += num;
        console.log(Calculator.input);
        displayOutput();
    } else {
        Calculator.input = num;
        console.log(Calculator.input);
        displayOutput();
    }
};
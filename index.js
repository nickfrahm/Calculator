let input = "";
let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let output = document.getElementById("display");

//allow input from clicking numbers
const numbers = document.querySelectorAll("div.num");
numbers.forEach((number) =>
  number.addEventListener("click", () => {
    setNumInput(number.innerHTML);
    console.log(
      `num1: ${num1} num2: ${num2} op1: ${operator1} op2: ${operator2} output: ${output.innerHTML}`
    );
  })
);

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

addBtn.addEventListener("click", () => {
  prepareCalculation("+");
});
subtractBtn.addEventListener("click", () => {
  prepareCalculation("-");
});
multiplyBtn.addEventListener("click", () => {
  prepareCalculation("x");
});
divideBtn.addEventListener("click", () => {
  prepareCalculation("/");
});

//calculate button
const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () =>
  prepareCalculation("")
);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clearAll() {
  input = "0";
  output.innerHTML = "0";
  num1 = null;
  num2 = null;
  operator1 = null;
  operator2 = null;
  displayInput();
  console.log(
    `num1: ${num1} num2: ${num2} op1: ${operator1} op2: ${operator2} output: ${output.innerHTML}`
  );
}

function deleteLastEntry() {
  let inputLength = input.length;
  let newInput = input.slice(0, -1);

  if (inputLength > 1 && parseFloat(input) > 0) {
    console.log("positive backspace");
    input = newInput;
    displayInput();
  } else if (inputLength > 2 && parseFloat(input) < 0) {
    console.log("negative backspace");
    input = newInput;
    displayInput();
  } else {
    console.log("only one digit");
    input = "0";
    console.log(input);
    displayInput();
  }
}

function setNumInput(num) {
  if (input !== "0") {
    input += num;
    //console.log(input);
  } else {
    input = num;
    //console.log(input);
  }
  displayInput();
}

function displayInput() {
  const outputText = document.getElementById("display");
  outputText.innerHTML = parseFloat(input);
}

function operate(op, a, b) {
  console.log(a, op, b);
  switch (op) {
    case "+":
      output.innerHTML = add(a, b).toString();
      break;
    case "-":
      output.innerHTML = subtract(a, b);
      break;
    case "x":
      output.innerHTML = multiply(a, b);
      break;
    case "/":
      output.innerHTML = divide(a, b);
      break;
    default:
      console.log("no operator");
      break;
  }
  input = "0";
}

function prepareCalculation(op) {
  if (num1 === null) {
    //Prepare First Operation
    num1 = parseFloat(input);
    input = "";
    operator1 = op;
  } else if (num2 === null) {
    //Store Second Operation, Calculate First Op, prepare next Operation
    if (operator2 === null) operator2 = op;
    num2 = parseFloat(input);
    input = "0";
    operate(operator1, num1, num2);
    num1 = parseFloat(output.innerHTML);
    num2 = null;
    operator1 = operator2;
    operator2 = null;
  }
  console.log(
    `num1: ${num1} num2: ${num2} op1: ${operator1} op2: ${operator2} output: ${output.innerHTML}`
  );
}

const Calculator = {
  input: "",
  values: [],
  decimal: false,
  operation: "",
};

//allow input from clicking numbers
const numbers = document.querySelectorAll("div.num");
numbers.forEach((number) =>
  number.addEventListener("click", () => setNumInput(number.innerHTML))
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
  if (Calculator.operation !== "+") {
    performLastOperation();
  }
  if (Calculator.values.length < 1) {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.input = "0";
  } else {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.values[0] = Calculator.values[0] + Calculator.values[1];
    Calculator.values.pop();
    const outputText = document.querySelector("div.display-box");
    outputText.innerHTML = Calculator.values[0];
    Calculator.input = "0";
  }
  Calculator.operation = "+";
  console.log(`input: ${Calculator.input}, values ${Calculator.values}`);
}

function subtract() {
  if (Calculator.operation !== "-") {
    performLastOperation();
  }
  if (Calculator.values.length < 1) {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.input = "0";
  } else {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.values[0] = Calculator.values[0] - Calculator.values[1];
    Calculator.values.pop();
    const outputText = document.querySelector("div.display-box");
    outputText.innerHTML = Calculator.values[0];
    Calculator.input = "0";
  }
  Calculator.operation = "-";
  console.log(`input: ${Calculator.input}, values ${Calculator.values}`);
}

function multiply() {
  if (Calculator.operation !== "x") {
    performLastOperation();
    Calculator.operation = "x";
    return console.log("Prevent multiplying by phantom 0.");
  }
  if (Calculator.values.length < 1) {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.input = "0";
  } else {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.values[0] = Calculator.values[0] * Calculator.values[1];
    Calculator.values.pop();
    const outputText = document.querySelector("div.display-box");
    outputText.innerHTML = Calculator.values[0];
    Calculator.input = "0";
  }
  Calculator.operation = "x";
  console.log(`input: ${Calculator.input}, values ${Calculator.values}`);
}

function divide() {
  if (Calculator.operation !== "/") {
    performLastOperation();
    Calculator.operation = "/";
    return console.log("Prevent dividing by phantom 0.");
  }
  if (Calculator.values.length < 1) {
    Calculator.values.push(parseFloat(Calculator.input));
    Calculator.input = "0";
  } else {
    Calculator.values.push(parseFloat(Calculator.input));
    if(Calculator.values[1] === 0) {
      return alert("You can't divide by zero.");
    } else {
      Calculator.values[0] = Calculator.values[0] / Calculator.values[1];
    }
    Calculator.values.pop();
    const outputText = document.querySelector("div.display-box");
    outputText.innerHTML = Calculator.values[0];
    Calculator.input = "0";
  }
  Calculator.operation = "/";
  console.log(`input: ${Calculator.input}, values ${Calculator.values}`);
}

function clearAll() {
  Calculator.input = "0";
  Calculator.decimal = false;
  Calculator.values = [];
  Calculator.operation = "";
  displayInput();
}

function deleteLastEntry() {
  let inputLength = Calculator.input.length;
  let newInput = Calculator.input.slice(0, -1);
  //console.log(newInput);

  if (inputLength > 1 && parseFloat(Calculator.input) > 0) {
    console.log("positive backspace");
    Calculator.input = newInput;
    displayInput();
  } else if (inputLength > 2 && parseFloat(Calculator.input) < 0) {
    console.log("negative backspace");
    Calculator.input = newInput;
    displayInput();
  } else {
    console.log("only one digit");
    Calculator.input = "0";
    console.log(Calculator.input);
    displayInput();
  }
}

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
  console.log(`input: ${Calculator.input}, values ${Calculator.values}`);
}

function performLastOperation() {
  switch (Calculator.operation) {
    case "+":
      add();
      Calculator.operation = "";
      break;
    case "-":
      subtract();
      Calculator.operation = "";
      break;
    case "x":
      multiply();
      Calculator.operation = "";
      break;
    case "/":
      divide();
      Calculator.operation = "";
      break;
    default:
      console.log("No Operation.");
  }
}

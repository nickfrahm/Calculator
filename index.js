let input = "";
let output = parseFloat(document.getElementById("display").innerHTML);
let operator = "";
console.log(input, output, operator)

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

addBtn.addEventListener("click", () => operate("+", parseFloat(input),output));
subtractBtn.addEventListener("click", () => operate("-", parseFloat(input),output));
multiplyBtn.addEventListener("click", () => operate("x", parseFloat(input),output));
divideBtn.addEventListener("click", () => operate("/", parseFloat(input),output));

//calculate button
const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", () => calculate());

//set the input to output box
function displayInput() {
  const outputText = document.getElementById("display");
  outputText.innerHTML = input;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a,b) {
	return a / b;
}

function clearAll() {
  input = "0";
  operation = "";
  displayInput();
}

function deleteLastEntry() {
  let inputLength = input.length;
  let newInput = input.slice(0, -1);
  //console.log(newInput);

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
    displayInput();
  } else {
    input = num;
    //console.log(input);
    displayInput();
  }
}


function operate(op, a, b) {
	const outputText = document.getElementById("display");
  console.log(a,op,b)
	switch(op) {
		case "":
      console.log('no operator');
			outputText.innerHTML = parseFloat(input);
			break;
		case "+":
      console.log('add');
      output = add(a,b);
			outputText.innerHTML = output.toString();
			break;
		case "-":
      console.log('subtract');
			output = subtract(a,b);
			outputText.innerHTML = output.toString();
			break;
		case "x":
      console.log('multiply');
			output = multiply(a,b);
			outputText.innerHTML = output.toString();
			break;
		case "/":
      console.log('divide');
			output = divide(a,b);
			outputText.innerHTML = output.toString();
			break;
	}
}
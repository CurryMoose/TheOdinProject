    
const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const screen = document.querySelector("[data-screen]");

let firstOperand = "";
let secondOperand = "";
let operator = null;
let result = 0;

numButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

opButtons.forEach((button) => 
    button.addEventListener("click", () => setOperator(button.textContent), resetScreen()));

clearButton.addEventListener("click", () => clear());

equalsButton.addEventListener("click", () => equate(firstOperand, secondOperand, operator));

function appendNumber(number) {
      
      document.getElementById("compresult").value += number.trim();


  }

function setOperator(operatorSel)
{
    return operatorSel;
    
}

function equate(firstOperand, secondOperand, operator)
{
    if(firstOperand == "" || secondOperand == "" || setOperator(operator) == null)
    {
        alert("Invalid input!");
        clear();
    }
    else
    {
        operate(firstOperand, secondOperand, operator);
        document.getElementById("compresult").value = result.trim();
    }
     

}


function clear()
{
    document.getElement(screen).value = "";
    firstOperand = "";
    secondOperand = "";
    result = 0;
}

function resetScreen()
{
  document.getElement(screen).value = "";
}





function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      result = add(a, b);
    case "−":
      result = substract(a, b);
    case "×":
      result = multiply(a, b);
    case "÷":
      if 
        (b === 0) return null;
      else 
        result = divide(a, b);
    default:
      return null;
  }
}


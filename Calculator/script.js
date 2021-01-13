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
    button.addEventListener("click", () => setOperator(button.textContent)));
opButtons.forEach((button) => 
    button.addEventListener("click", () => resetScreen()));

clearButton.addEventListener("click", () => clear());

equalsButton.addEventListener("click", () => equate(firstOperand, secondOperand, operator));

function appendNumber(number) {
      
      
      if(operator!=null)
      {
        document.getElementById("compresult").value += number.trim();
        secondOperand = document.getElementById("compresult").value;
        console.log("Second operand = " +secondOperand);
      }
      else
      {
        document.getElementById("compresult").value += number.trim();
        firstOperand = document.getElementById("compresult").value;
        console.log("First operand = " + firstOperand);
        
      }

  }

function setOperator(operatorSel)
{
    
    operator =  operatorSel;
    
}

function equate(firstOperand, secondOperand, operator)
{
  /*
    if(firstOperand == "" || secondOperand == "" || setOperator(operator) == null)
    {
        alert("Invalid input!");
        console.log("Invalid input being: "+ firstOperand, secondOperand, operator);
        clear();
    }
    else
  */
    {
        result = operate(firstOperand, secondOperand, operator);
        console.log(result);
        document.getElementById("compresult").value = result.toString();
    }
     

}


function clear()
{
    document.getElementById('compresult').value = "";
    firstOperand = "";
    secondOperand = "";
    result = 0;
}

function resetScreen()
{
  document.getElementById('compresult').value = "";
}


function add(a, b) {
  return Number(a) + Number(b);
}

function substract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      result = add(a, b);
    case "-":
      result = substract(a, b);
    case "*":
      result = multiply(a, b);
    case "/":
      if 
        (b === 0) return null;
      else 
        result = divide(a, b);
    default:
      return null;
  }

  return result;
}
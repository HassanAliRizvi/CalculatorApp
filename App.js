const equals = document.querySelector(".equals");
const deleteNum = document.getElementsByClassName("delete");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const decimalButton = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
let currentOperandText = "";
let previousOperandText = "";
let operatorText = "";
let operateResult = "";
let firstNum = "";
let secondNum = "";

function add(a,b){
  return (a + b);
}

function subtract(a,b){
  return (a - b);
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function operateFunction(operator, num1, num2){
  switch(operator){
    case "+":
      return add(num1,num2);
    case "-":
      return subtract(num1,num2);
    case "*":
      return multiply(num1,num2);
    case "/":
      return divide(num1,num2);
  }

}


let buttonDecimal = ".";

var fired = false;//to avoid adding operators or call the event once. 


clear.addEventListener('click', () => {
  previousOperand.textContent = " ";
  currentOperand.textContent = " ";
  currentOperandText = " ";
  previousOperandText = " ";
  fired = false;

});


del.addEventListener('click', () => {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
  currentOperandText = " ";
});

function addNums(nums){
  if((nums == ".") && currentOperand.textContent.includes(".")) return;//stops the function
  currentOperandText += nums;
}

numbers.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    addNums(button.id);
    currentOperand.textContent = currentOperandText;
    firstNum = currentOperandText;//stores the first Num
  });
});


operators.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if(!fired) {
      fired = true;
      secondNum = firstNum;
      operatorText += button.id;
      if(currentOperandText == " "){
        secondNum = 0;
        currentOperandText = 0;
      }
      previousOperand.textContent = currentOperandText + operatorText;
      currentOperandText = "";
    }
  });
});




equals.addEventListener('click', function()  {
  //secondNum is put first to take into account the division and subtraction orders
  if(operatorText == "÷"){
    operatorText = "/"
    operateResult = operateFunction(operatorText, parseFloat(secondNum), parseFloat(firstNum));
  }
  operateResult = operateFunction(operatorText, parseFloat(secondNum), parseFloat(firstNum));
  console.log(operateResult);
  let displayNum = operateResult;
  previousOperand.textContent = displayNum;
  firstNum = displayNum;
  currentOperandText = displayNum;
  operatorText = "";
  currentOperand.textContent = "";
  fired = false;
});

//TO-DO: Letting the user press the equals again when fire is done. 

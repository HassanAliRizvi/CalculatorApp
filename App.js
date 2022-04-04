const equals = document.querySelector(".equals");
const deleteNum = document.getElementsByClassName("delete");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const decimalButton = document.querySelector(".decimal");
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

function clear(){


}

function deleteNumber(){

}



let buttonDecimal = ".";

var fired = false;//to avoid adding operators or call the event once. 


function addNums(nums){
  if((nums == ".") && currentOperand.textContent.includes(".")) return;//stops the function
  currentOperandText += nums;
}

numbers.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    addNums(button.id);
    currentOperand.textContent = currentOperandText;
    secondNum = currentOperandText;//stores the first Num
  });
});


operators.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if(!fired) {
      fired = true;
      firstNum = secondNum;
      operatorText += button.id;
      if(currentOperandText == ""){
        firstNum = 0;
        currentOperandText = 0;
      }
      previousOperand.textContent = currentOperandText + operatorText;
      currentOperandText = "";
    }
  });
});




equals.addEventListener('click', function()  {
  operateResult = operateFunction(operatorText, parseFloat(firstNum), parseFloat(secondNum));
  console.log(operateResult);
  let displayNum = operateResult;
  previousOperand.textContent = displayNum;
  currentOperandText = displayNum;
  currentOperand.textContent = "";
  operatorText = "";
  fired = false;
});

//TO-DO: Letting the user press the equals again when fire is done. 

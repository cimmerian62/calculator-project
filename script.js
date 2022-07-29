const add = (num1, num2) => num1+num2;
const divide = (num1, num2) => num1/num2;
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;

const operate = function(num1, num2, op) {
    if (op == '+') {
        return add(num1,num2);
    }
    if (op == '/') {
        return divide(num1,num2);
    }
    if (op == '-') {
        return subtract(num1,num2);
    }
    if (op == '*') {
        return multiply(num1,num2);
    }
}

const addChar = function(bChar) {
    val += bChar;
    calcDisp.value = val;
    
}

let val = "";
const buttons = document.querySelectorAll('button')
const calcDisp = document.querySelector('.bar')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      addChar(button.textContent)
    });
  });
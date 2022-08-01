const add = (num1, num2) => num1+num2;
const divide = (num1, num2) => Math.floor(num1/num2);
const subtract = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;

const operate = function(a, b, op) {
    if (op == '+') {
        num1 = add(a,b) + "";
    }
    else if (op == '/') {
        if (num2 == 0) {
            alert("Cannot divide by zero")
            num2 = "";
        }
        else {
            num1 = divide(a,b) + "";
        }
    }
    else if (op == '-') {
        num1 = subtract(a,b) + "";
    }
    else if (op == '*') {
        num1 = multiply(a,b) + "";
    }
    dispVal = num1;
    calcDisp.value = dispVal;

}

const addChar = function(bChar) {
    if (op == "") {
        num1 += bChar;
    }
    else {
        num2 += bChar;
    }
    dispVal += bChar;
    calcDisp.value = dispVal;
}
const opPressed = function(opChar) {
    if (!num1) {
        return;
    }
    if (!op) {
        op = opChar  
        
    }
    else {
        if (num2) {
            operate(parseInt(num1), parseInt(num2), op);
            op = opChar;
            num2 = "";
        }
        else {
            dispVal = dispVal.slice(0, dispVal.length-1);
        }
        
    }
    dispVal += opChar;
    calcDisp.value = dispVal;

}
const equals = function() {
    if (num1 && num2) {
        operate(parseInt(num1), parseInt(num2), op);
        num2 = "";
        op = "";
    }
}

const clear = function() {
    num1 = "";
    num2 = "";
    op = "";
    dispVal = "";
    calcDisp.value = dispVal;
}

let dispVal = "";
let  num1 = "";
let num2 = "";
let op = "";
const numButtons = document.querySelectorAll('.numBtn')
const calcDisp = document.querySelector('.bar')
const opButtons = document.querySelectorAll('.opBtn')
const eqButton = document.querySelector('#eq')
const clrButton = document.querySelector('#clr')

clrButton.addEventListener('click', () => {
    clear(num1, num2, op);
})

eqButton.addEventListener('click', () => {
    equals(num1, num2, op);
})

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
      opPressed(button.textContent)
    });
  });

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      addChar(button.textContent)
    });
  });
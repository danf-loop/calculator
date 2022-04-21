// main calculator elements

let display = document.querySelector(".result")
let button = document.querySelector(".buttons");
let op = document.querySelectorAll(".operator")
let number = document.querySelectorAll(".numbers")


// store button value when clicked
function storeVar(el) {
    let key = el.getAttribute('value');
    const display = document.querySelector(".result"); // display value of button to display/output
    display.textContent += key;   
}





// memory store: figure out how to store the value of the button clicked



function operate(operator, num1, num2) {

    
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


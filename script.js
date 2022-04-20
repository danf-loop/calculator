const button = document.querySelector(".buttons");
let op = document.querySelectorAll(".operator")
let number = document.querySelectorAll(".numbers")


// store button value when clicked
function storeVar(el) {
    let key = el.getAttribute('value');
    const display = document.querySelector(".result");
    display.textContent = key
}





// function operate(operator, num1, num2) {
    
// }



// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

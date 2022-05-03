// main calculator elements
const calculator = document.querySelector('.grid')

const keys = calculator.querySelector('.buttons')

const display = calculator.querySelector('.result')






// store button value when clicked

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target;
    console.log(key);
    
    const keyValue = key.textContent; // gets the actual value
    console.log(keyValue);
    
    const displayValue = display.textContent; // the content in the display

    const  { type } = key.dataset

    const { previousKeyType } = calculator.dataset


    // Check if it a number key
    if (type == 'numbers') {
      if (displayValue == '0') { // the default display of 0 will be replaced with the value of the number clicked on otherwise join the numbers
        display.textContent = keyValue; // displays the pressed key onto the display
    } else if (previousKeyType == 'operator') {
        display.textContent = keyValue
    } else {
        display.textContent = displayValue + keyValue; // concatenating the number strings together
        }
 
    }
   

    // Check if it is a operator key
    if (type == 'operator') {
        console.log(key);
      }

    calculator.dataset.previousKeyType = type

    
    })



    

    
        
    






// memory store: figure out how to store the value of the button clicked



// function operate() {

    
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


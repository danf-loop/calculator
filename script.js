// main calculator elements

const keys = document.querySelector('.buttons')

const display = document.querySelector('.result')


// store button value when clicked

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent // gets the actual value
    const displayValue = display.textContent // the content in the display


    // the default display of 0 will be replaced with the value of the number clicked on otherwise join the numbers
    if (displayValue == '0') {
        display.textContent = keyValue // displays the pressed key onto the display
    } else {
        display.textContent = displayValue + keyValue // concatenating strings 
    }


})



    

    
        
    






// memory store: figure out how to store the value of the button clicked



function operate() {

    
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


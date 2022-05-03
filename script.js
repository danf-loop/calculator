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

    const  { type } = key.dataset;

    const { previousKeyType } = calculator.dataset;


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

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = keyValue;
      }

   
    if (type == 'negative') {
        if (displayValue > 0)
            negativeNumber = '-' + displayValue
            display.textContent = negativeNumber

    }

            
        
    if (type == 'equal') {
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        console.log(firstNumber, operator, secondNumber)
        display.textContent = operate(firstNumber, operator, secondNumber)

    }

    if (type == 'clear') {
        display.textContent = '0'
    }

    calculator.dataset.previousKeyType = type
    })


function operate(firstNumber, operator, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    let result = ''
    if (operator == '+') {
        result = firstNumber + secondNumber
        display.textContent = result
    } else if (operator == 'x') {
        result = firstNumber * secondNumber
        display.textContent = result
    } else if (operator == '/') {
        result = firstNumber / secondNumber
        display.textContent = result
    } else if (operator == '-') {
        result = firstNumber - secondNumber
        display.textContent = result
    }
    return result
}

    



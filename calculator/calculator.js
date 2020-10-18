// ELEMENTS
const $buttonContainer = document.getElementById('button-container')
const $equals = document.getElementById('equals')
const $formula = document.getElementById('formula')
const $answer = document.getElementById('answer')

// FUNCTION
function insertValue(event) {
    $formula.textContent += event.target.textContent
}

function equals() {

    // VARIABLES
    let leftOperand = ''
    let rightOperand = ''
    let operation = ''
    let operationSet = false

    for (let character of $formula.textContent) {
        
        if(operationSet === false) {
            if (character === '+' || character === '-' || character === '*' || character === '/') {
                operation = character
                operationSet = true // start with the right side of the formula
                continue
            }
        }

        if (operationSet === false) {
            leftOperand += character
        }

        if(operationSet === true) {
            rightOperand += character
        }
    }

    console.log(`leftOperand is: ${rightOperand}`)

    let answer = 0

    if (operation === '+') {
        answer = parseInt(leftOperand) + parseInt(rightOperand)
    }
    else if (operation === '-') {
        answer = parseInt(leftOperand) - parseInt(rightOperand)
    }
    else if (operation === '*') {
        answer = parseInt(leftOperand) * parseInt(rightOperand)
    }
    else if (operation === '/') {
        answer = parseInt(leftOperand) / parseInt(rightOperand)
    }

    $answer.textContent = answer 
    $formula.textCOntent = ''
}

// EVENT LISTENERS
$buttonContainer.addEventListener('cilck', insertValue)
$equals.addEventListener('click', equals)
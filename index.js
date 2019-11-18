class Calculator{
    constructor(previousOperandTxtElement, currentOperandTxtElement) {
        this.previousOperandTxtElement = previousOperandTxtElement;
        this.currentOperandTxtElement = currentOperandTxtElement;
        this.clear();
    }
    //clear different variables
    clear(){
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    }

    //delete a single number
    delete(){
        this.currentOperand = this.currentOperand.slice(0, -1);
        this.updateDisplay();
    }
    //add each number pressed to the output
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand += number;
    }
    //get the operator the user chooses
    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + " " + this.operation;
        this.currentOperand = "";
    }
    //do the computation of based on operand and operator
    compute(){
        let result = 0;
        let operator = this.operation;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand)

        switch(operator){
            case '+': 
                result =  prev + current; 
                break;
            case '-':
                result =  prev - current; 
                break;
            case '*': 
                result =  prev * current; 
                break;
            case '/': 
                result =  prev / current; 
                break;
            default: return;
        }
        this.previousOperand = '';
        this.operation = undefined;
        this.currentOperand = result;
    }
    //update the display
    updateDisplay(){
         this.currentOperandTxtElement.innerText = this.currentOperand;
         this.previousOperandTxtElement.innerText = this.previousOperand;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTxtElement = document.querySelector('[data-previous-operand');
const currentOperandTxtElement = document.querySelector('[data-current-operand');

const calculator = new Calculator(previousOperandTxtElement, currentOperandTxtElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
    })
}) 

deleteButton.addEventListener('click', () => {
    calculator.delete();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})


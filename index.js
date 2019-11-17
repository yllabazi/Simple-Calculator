function addition(a, b){
    return (a + b); 
}

function substraction(a, b){
    return a - b;
}

function devision(a, b){
    return a/b;
}

function multiplication(a, b){
    return a * b;
}

function operate(firstNum, secondNum, operator){
    switch(operator){
        case '+':
            return addition(firstNum, secondNum);
            break;
        case '-':
            return substraction(firstNum, secondNum);
            break;
        case '/':
            return devision(firstNum, secondNum);
            break;
        case '*':
            return multiplication(firstNum, secondNum);
            break;
        default:
            console.log("Enter a 'first number', 'second number' and an operator inside ' '");
            break;
    }
}

let displayPar = document.querySelector("#disPar");
const equals = document.querySelector(".equal");

const buttons = document.querySelectorAll(".number, .operator");

let numbers = new Array();
let operators = new Array();

buttons.forEach(button => button.addEventListener('click', function(e){
    displayPar.textContent += button.value;
    if(!isNaN(button.value)){
        numbers.push(parseInt(button.value));
        
    }else {
        numbers.push(button.value);
        displayPar.textContent = "";
    }
}))

let result = 0;

equals.addEventListener('click', () => {
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == "+"){
            result = operate(numbers[i-1], numbers[i+1], "+");
        }
    }
    
    displayPar.textContent = result;
})







//OBJECT TO KEEP TRACK OF VALUES
const Calculator = {
    Display_Value: '0',     //Initial display value of 0.
    First_Operand: null,    //Hold the first operand for any expressions. Null by default.
    Wait_Second_Operand: false, //Checks wether or not the second operand has been inputted by the user.
    operator: null,         //Hold the operator. Null by default. 
};
//END OBJECT TO KEEP TRACK OF VALUES

//CHANGE VALUES WHEN A BUTTON IS CLICKED
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {     //Check if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked.
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;   //This overwrites Display_Value if the current value is 0. Otherwise it adds onto it.
    }
}
//END CHANGE VALUES WHEN A BUTTON IS CLICKED

//DECIMAL POINTS
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;    //ensure that accidental clicking of the decimal point doesn't cause bugs in the operation.
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;       //If the Display_Value does not contain a decimal point, add a decimal point. 
    }
}
//END DECIMAL POINTS

//OPERATORS
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);   //When an operator key is pressed, convert the current number displayed on the screen to a number and then store the result in Calculator.First_Operad if it doesn't already exist.
    if (operator && Calculator.Wait_Second_Operand) {   //Check if an operator already exists and if Wait_Second_Operand is true, update the operator and exit function.
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }
    else if (operator) {    //Check if an operator already exists.
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //If operator exists, property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed.
        result = Number(result).toFixed (9);    //Add fixed number of digits after the decimal.
        result = (result *1).toString();        //Remove any trailing 0s.
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
//END OPERATORS

//CALCULATIONS
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
//END CALCULATIONS

//ALL CLEAR - CALCULATOR RESET
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//END ALL CLEAR - CALCULATOR RESET

//DISPLAY VALUE
function Update_Display() {
    const display = document.querySelector('.calculator-screen');   //Target the .calculator screen class, ie the HTML element
    display.value = Calculator.Display_Value;
}
Update_Display();
//END DISPLAY VALUE

//BUTTON CLICKS
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;   //Target variable is an object that represents the element that was clicked.
    if (!target.matches('button')) {    //If the element that was clicked on is not a button, exit the function.
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensure that AC clears all the inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
//END BUTTON CLICKS
//WHILE LOOP 
function count_to_ten() {
    var digit = "";             //creates variable "digit" and leaves it's value undefined
    var X = 1;                  //creates variable X and sets value to 1
    while(X < 11) {             //the parameter = X < 11. So this function will runn while that statement is true.
        digit += "<br>" + X;    //the <br> adds a break at each iteration, +X increases digit by the value of X
        X++;                    //the ++ increment operator counts up one step
    }
    document.getElementById("counting_to_ten").innerHTML = digit;
}

function Call_Loop() {
    var digit = "";      //creates variable "digit" and leaves it's value undefined
    var X = 1;           //creates variable X and sets value to 1
    while(X < 6) {       //the parameter = X < 11. So this function will runn while that statement is true.
        digit +=  +X;    //the <br> adds a break at each iteration, +X increases digit by the value of X
        X++;             //the ++ increment operator counts up one step
        document.getElementById("Loopy").innerHTML = "huh?";
    }
    document.getElementById("Loop").innerHTML = digit;
}
//END WHILE LOOP

//STRING LENGTH PROPERTY
function get_length() { //returns the length of a string.
    var lengthme = document.getElementById("lengthme").value;  //Sets the value to whatever the input is
    document.getElementById("lengthnumber").innerHTML = lengthme.length;  //length property
}
//END STRING LENGTH PROPERTY

//FOR LOOP
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; //creates an undefined string variable
var YYY;          //creates an undefined variable, which will later be used to call an index position

function for_Loop() {                   //identify a function and name it
    for (YYY = 0; YYY < Instruments.length; YYY++) {    //defines the parameters: YYY is 0; when the value of YYY is less than the length of objects in the array Instruments; inrement ++ the value of YYY
        Content += Instruments[YYY] + "<br>";           //+= changes the value of the variable Content to whatever value is at Instruments[index position number YYY]
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//END FOR LOOP

//ARRAYS
function cat_pics() {
    var Cat_Picture = [];       //defines the variable as an empty array
    Cat_Picture[0] = "sleeping"; //defines the element at index position [0]
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[Math.floor(Math.random()*4)] + "."; //the index number is a random integer. Math.random()*4 generates a random number between 0 and up to but not including 4. Math.floor() rounds that result down to the nearest whole integer, including 0. As a result, you get a random integer between 0 and 3. 
}
//END ARRAYS

//CONST AND VAR TROUBLESHOOTING
function constant_function() {
    const Mustical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Mustical_Instrument.color ="blue";      //you can change arguments within {}
    Mustical_Instrument.price ="$900";      //you cannot change the identifier "Musical_Instrument"
    document.getElementById("Constant").innerHTML = "The changed cost of the " + Mustical_Instrument.type + " was " + Mustical_Instrument.price;
}
//this code would yield an error:
//const abcde = 10;
//abcde = 2;            //you cannot change the value of the constant with identifier abcde
//document.write(abcde); 
//END CONST AND VAR TROUBLESHOOTING

//RETURN STATEMENT
function myReturnFunction() {
    return Math.PI;     //return is a method stored within properites as a function
}
document.getElementById("myReturnFunction").innerHTML = myReturnFunction();

let cars = {
    make: "Dodge ",             //parameters of the variable car
    model: "Viper ",            
    year: "2021 ", 
    color: "red ", 
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }                           //this indicates the object that is the owner of the code. When used within an object, the value of “this” is the object. When used with a function, the value of “this” is the object that possesses the function.
};
document.getElementById("Car_Object").innerHTML = cars.description();
//END RETURN STATEMENT

//BREAK & CONTINUE STATEMENT
//break statment
let breakstatement = "";
for (let i = 0; i < 10; i++) {  //defines the conditions of the for loop as counting up by one increment on every loop
    if (i === 4) { break; }     //breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
    breakstatement += "The number is " + i + "<br>";
}

function printbreak() {
    document.getElementById("printbreak").innerHTML = breakstatement;
}   

//continue statement
let continuestatement ="";
for (let i = 0; i < 10; i++) {
    if (i === 5) {continue; }
    else if (i===6) {continue;}
    continuestatement += "The number is " + i + "<br>";
}
function printcontinue() {
    document.getElementById("printcontinue").innerHTML = continuestatement;
}
//END BREAK & CONTINUE STATEMENT
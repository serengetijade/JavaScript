//ARROW FUNCTIONS
//basic js functions
myFunction = function() {
    return "This is my function."; }

function myOtherFunction() {
    return "This is my other function."; }

//arrow function syntax example
myArrowFunction = () => "This is my arrow function.";
//Syntax: functionName = (parameters) => statement;

//pass a variable
var car;
car = (val) => "These are my favorite car brands: " + val;
document.getElementById("displayCar").innerHTML = car("Honda, Ford, and Nissan");
//END ARROW FUCTIONS

//ARRAY .SOME METHOD
//SOME Example 1:
var ages = [2, 10, 18, 20, 13, 15, 30];  //an array of numbers

checkAge = (age) => age >= 18;  //arrow function to pass in a parameter of age

function myAgeFunction() {
    document.getElementById("displayAge").innerHTML = ages.some(checkAge); //.some iterates through the array of ages and displays the restult.
}

//SOME Example 2: 
var candies = ["chocolate", "gummies", "jelly beans", "mints", "lolipops", "gum"]; //an array of string values

checkCandy = (candy) => candy == document.getElementById("candyChoice").value;

function someResult() {    
    document.getElementById("candyOutput").innerHTML = candies.some(checkCandy);
}
//END ARRAY .SOME METHOD
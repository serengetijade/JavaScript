//PROJECT1 EXPRESSIONS
alert("Hello again, World");

var A=("This is a string- data that represents text."); //define variables with =

var B=("Variables are a useful way to reference data with JavaScript.");

//CONCATENATION
var BB= "Concatenated" + " strings display on the same line:"; //use + to concatenate strings
var Sent1=("This is the beginning of the string ");  //and or use + in the function
var Sent2=("and this is the end of the string.");
function myfunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course?!"; //concatenate with +=
    document.getElementById("concatenate").innerHTML = sentence; //innerHTML modifies the content of an HTML element.
}

//DEFINE MULTIPLE VARIABLES
var cat="Nemo", dog="Tuesday", fish="Krinklebine";  //define multiple variables

//BASIC FUNCTIONS
function My_First_Function() { //Difine a function and naming it
    var str = "This is the button text that shows onclick!"; //Difine a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //innerHTML modifies the content of an HTML element.
}
function thankyounote() { //Display text after clicking submit in the p element below the submit button.
    var str = "Thank you, your input has been submitted."
    document.getElementById("submitandshow").innerHTML = str;
}

//MATH WITH JS
function addition_function() { //Addition operator +
    var  addition = 2+2;
    document.getElementById("math").innerHTML="2 + 2 = " + addition;
}
function subtraction_function () { //Subtraction operator -
    var subtraction = 5-2;
    document.getElementById("math2").innerHTML="5 - 2 = " + subtraction;
}
function multiplication() { //Multiplication operator *
    var simple_math = 6*8;
    document.getElementById("math3").innerHTML="6 * 8 = " + simple_math;
}
function division() {
    var simple_math2 = 48/6;
    document.getElementById("math4").innerHTML="48 / 6 = " + simple_math2;
}
function multiple_math() {
    var mathiply = (1+5) / 4 * 87 - 11;
    document.getElementById("math5").innerHTML="(1+5) / 4 * 87 - 11 = " + mathiply;
}
function modulus_operator() {
    var simple_math3 = 25%6;
    document.getElementById("math6").innerHTML="When youy divide 25 by 6, you have a remainder of: " + simple_math3 + ". The % is not the same as divide (thats /).";
}
function negation_operator() {
    var x = 10;
    document.getElementById("math7").innerHTML= "The negative of 10 is: " + -x;
}
//END MATH WITH JS

//BASIC DICTIONARY
function my_dictionary() {
	var Animal= {
		Species:"Dog",  //There are NO SPACEs after the :colon.
		Color:"Black",  //String values go within quotes. 
        Breed:"Labrador",
        Age:5,          //Integers do NOT need quotes
        Sound:"Woof!"
    };
    //delete Animal.Sound; //The delete command removes a KVP, would return "undefined" result.
    document.getElementById("Dictionary").innerHTML=Animal.Sound; //JS is case specific, so if variables are upper/lowercase they must be the same EVERYWHERE!
}




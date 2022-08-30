//ADDITION WITH CONCATENATE
function addition_function() {
    var  addition = 2+2;
    document.getElementById("math").innerHTML="2 + 2 = " + addition;
}
function subtraction_function () {
    var subtraction = 5-2;
    document.getElementById("math2").innerHTML="5 - 2 = " + subtraction;
}
function multiplication() {
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

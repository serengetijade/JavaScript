//PROJECT1 EXPRESSIONS
alert("Hello again, World");

//DISPLAY TEXT USING A VARIABLE
var A=("This is a string- data that represents text. "); //define variables with =

var B=("Variables are a useful way to reference data with JavaScript.");

//CONCATENATE
var BB= "Concatenated" + " strings display on the same line:"; //use + to concatenate strings
var Sent1=("This is the beginning of the string ");  //and or use + in the function
var Sent2=("and this is the end of the string.");
function myfunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course?!"; //concatenate with +=
    document.getElementById("concatenate").innerHTML = sentence; //innerHTML modifies the content of an HTML element.
}

//DEFINE MULTIPLE VARIABLES
var cat = "Nemo", dog = "Tuesday", fish = "Krinklebine";  //define multiple variables

//BASIC FUNCTIONS
function My_First_Function() { //Difine a function and naming it
    var str = "This is the button text that shows onclick!"; //Difine a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //innerHTML modifies the content of an HTML element.
}
function thankyounote() { //Display text after clicking submit in the p element below the submit button.
    var str = "Thank you, your input has been submitted."
    document.getElementById("submitandshow").innerHTML = str;
}
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
//END BASIC DICTIONARY

//TYPE COERSION
document.getElementById("coersionresult").innerHTML=("10"+5);

//MATH WITH JS
//MATH WITH CONCATENATE
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

//UNIQUE MATH VALUES
function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
}
//isNAN TEST
function isNaN_function() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}
document.getElementById("Test3").innerHTML = isNaN('007');

//INFINITY

//BOOLEAN LOGIC

//== EQUALITY (DOUBLE EQUAL) SIGNS OPERATOR

//=== VALUE & TYPE (TRIPLE EQUAL SIGNS) OPERATOR

//&& AND OPERATOR

// || OR OPERATOR

//NOT OPERATOR

//END MATH WITH JS

//COMPARISONS & BOOLEAN LOGIC
//TERNARY OPERATORS
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//votebox
function age_function() {
    var age, qualify;
    age = document.getElementById("age").value;
    qualify = (age >= 18)? "Yes! You are old enough":"You are not old enough";
    document.getElementById("voteable").innerHTML = qualify + " to vote.";
}

//CLASS CONSTRUCTORS
//Example 1
function Vehicle(Make, Model, Year, Color) {  //the object constructor - this function determines the default state/template for new instances/objects of the "Vehicle" class name
    this.Vehicle_Make = Make;   //an object property
    this.Vehicle_Model = Model; //an object property
    this.Vehicle_Year = Year;   //an object property
    this.Vehicle_Color = Color; //an object property 
    //the "this." keyword acts as a placeholder (of undetermined value) until objects (here variables) are created below using the object constructor "template" and variable identifiers (aka variable names).
} 
//Object instances: The "new" keyword creates instances of the Vehicle class name
//"Jack", "Emily", and "Erik" are identifiers. 
//Each unique variable identifier creates a new instance
var Jack = new Vehicle("Dodge","Viper", 2020, "Red"); //String values must go within ""
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");

//You can then use those objects within
function myFunctionKC() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + "&nbsp;" + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year + ".";
} //"Erik." replaces "this." to specify which instance to call

//Example 2
function New_and_This(Count, Color, Category) {
    this.New_and_This_Count = Count;
    this.New_and_This_Color = Color;
    this.New_and_This_Category = Category;
}
var Zipper = new New_and_This(2, "White", "Closure");
var Button = new New_and_This(14, "Multi", "Closure");
var Velvet = new New_and_This(7, "Burgundy", "Fabric");

function New_and_This_Fun() {
    document.getElementById("New_and_This").innerHTML = 
    "You have " + Zipper.New_and_This_Count + "&nbsp;" + Zipper.New_and_This_Color + "-colored " + 
    "zippers, which is a tpye of " + Zipper.New_and_This_Category + ".";
}
//NESTED FUNCTIONS
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}

//SOURCES: LOCAL AND GLOBAL VARIABLES
var V = 804;    //This is a global variable because it is loose code - not within a function

function whatwhat() {
    var U = 10;     //This is a local variable becuase it is within a function
    var S = 20;
    document.getElementById("local_global_var").innerHTML = V + U;
}

//erroneous function
function whatnot() {
    var T = 11;
    document.getElementById("erroneous").innerHTML = S + T; //Because U is not defined within this function, its value is not accessible. 
}
//to fix the above error, you would need to move "var S = 20;"" out of the function whatwhat()
var S = 20;

//Locale Date and Time Methods
function whattime() {
    var datelocaletime = new Date().toLocaleTimeString(); //calls local time
    var datelocaledate = new Date().toLocaleDateString(); //calls local date
    document.getElementById("whattime").innerHTML = datelocaletime + " on " + datelocaledate;
}

//if STATEMENTS
function get_Date() {
    if (new Date().getHours() <14) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value; //.value uses the operand from the identified element, in this case the <input>
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are NOT old enough to vote."; //This string shows below the element if the conditional statement is not satisfied.
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function feelings_function() {
    thefeels = document.getElementById("feelings").value;
    if (thefeels == "great") {
        response = "Well good for you! Me too.";
    }
    else if (thefeels == "happy") {     //must use == to equate two values
        response = "Yipee!!!!"
    }
    else if (thefeels == "tired") {
        response = "Well, have a nap."; //you can have multiple else if
    }
    else if (thefeels == "fine") {
        response = "That's never good.";
    }
    else if (thefeels == "bored") {
        response = "Yeah, that happens.";
    }
    else {
        response = "Hmmm...Go on.";
    }
    document.getElementById("responses").innerHTML = response;
}
//END IF STATEMENTS

//CONCAT() METHOD
function full_Sentence() {
    var part_1 = "I have ";     //there are several locally defined variables in this function
    var part_2 = "made this ";  //include spaces because .concat does NOT add them
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //the .concat method joins multiple variables. But it does NOT include spaces automatically.
    document.getElementById("ConcatenateMe").innerHTML = whole_sentence;  //sets the .innerHTML property to the variable whole_sentence
}
//SPLIT() METHOD WITH ELEMENT VALUES
function splitaway() {
    var splitnumber = document.getElementById("splitnumber").value; //uses the value of the input element
    let texttosplit = document.getElementById("presplit").innerHTML; //sets this variable to the value of the object method element
    let resultingsplit = texttosplit.slice(0, splitnumber);
    document.getElementById("postsplit").innerHTML = resultingsplit; 
}
//toUpperCase METHOD
function texttoupper() {
    var splitnumber = document.getElementById("splitnumber").value; //uses the value of the input element
    let texttosplit = document.getElementById("presplit").innerHTML; //sets this variable to the value of the object method element
    let resultingsplit = texttosplit.slice(0, splitnumber).toUpperCase();
    document.getElementById("texttoupper").innerHTML = resultingsplit; 
}
//Or see the entire sentence of id="presplit" in upper case: 
//function texttoupper () {
//    let texttoupper = document.getElementById("presplit").innerHTML;
//    let resultingupper = texttoupper.toUpperCase();
//    document.getElementById("texttoupper").innerHTML = resultingupper;
//}

//SEARCH METHOD
function searchme() {
    var thesearchbegins = document.getElementById("thesearchbegins").value;
    let searchable = document.getElementById("searchable").innerHTML;
    let sherlock = searchable.search(thesearchbegins);
    document.getElementById("sherlock").innerHTML = sherlock;
}
//toString METHOD
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//END STRING METHODS

//NUMBERS METHODS
//toPrecision METHOD
function precision_Method() {
    let X = 1235456.564549;
    document.getElementById("Precision").innerHTML = X.toPrecision(4);
}
//toFixed Method
function fixed_method() {
    let X = 1235456.564549;
    document.getElementById("Fixy").innerHTML = X.toFixed(3);
}
//valueOf Method
function valueOf_function() {
    let X = 1235456.564549;
    document.getElementById("valued").innerHTML = X.valueOf();
}
//END NUMBERS METHODS



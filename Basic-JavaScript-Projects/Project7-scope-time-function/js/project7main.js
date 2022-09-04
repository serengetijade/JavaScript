//Project7 Scope Time Function

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
    else if (thefeels == "") {
        response = "Well...?";
    }
    else {
        response = "Hmmm...Go on.";
    }
    document.getElementById("responses").innerHTML = response;
}
//END IF STATEMENTS

//WHILE LOOP 
function count_to_ten() {
    var digit = "";             //creates variable "digit" and leaves it's value undefined
    var X = 1;                  //creates variable X and sets value to 1
    while(X < 11) {              //the parameter = X < 11. So this function will runn while that statement is true.
        digit += "<br>" + X;    //
        X++;                    //adds one to the value
    }
    document.getElementById("counting_to_ten").innerHTML = digit;
}
//END WHILE LOOP
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
    else {
        response = "Hmmm...Go on.";
    }
    document.getElementById("responses").innerHTML = response;
}
//END IF STATEMENTS

//---------------------------
//CONCAT() METHOD
function full_Sentence() {
    var part_1 = "I have "; //there are several locally defined variables in this function
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //the .concat method joins multiple variables. But it does NOT include spaces automatically.
    document.getElementById("ConcatenateMe").innerHTML = whole_sentence;  //sets the .innerHTML property to the variable whole_sentence
}
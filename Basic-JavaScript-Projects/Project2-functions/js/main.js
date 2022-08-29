//PROJECT2 FUNCTIONS
//BASIC FUNCTIONS
function My_First_Function() { //Difine a function and name it
    var str = "This is the button text!"; //Difine a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Put the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}
//THE HTML: //In this HTML code, we create a button element. We then utilized the ID attribute and assigned the button element the value “Button_Text.”The button element was also given an event handler which is used to call the JavaScript function “My_First_Function().” The onclick event handler is triggered when the user clicks on that element.   -->
//<button onclick="My_First_Function()" id="Button_Text">
//    Click me!
//</button>


//FUNCTION ASSIGNMENT: Write a function that includes asssigning two variables and utilizes the documents.getElementById methond
function buttonstuff() {
    var str= "Oh la la!";
    var more= " It did something!"
    document.getElementById("button1").innerHTML= str + more; //innerHTML modifies the content of an HTML element.
}

function myfunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course?!"; //concatenate with +=
    document.getElementById("concatenate").innerHTML = sentence; //innerHTML modifies the content of an HTML element.
}

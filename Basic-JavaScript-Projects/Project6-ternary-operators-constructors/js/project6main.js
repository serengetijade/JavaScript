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
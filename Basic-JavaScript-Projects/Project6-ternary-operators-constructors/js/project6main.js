//TERNARY OPERATORS
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function age_function() {
    var age, qualify;
    age = document.getElementById("age").value;
    qualify = (age >= 18)? "Yes! You are old enough":"You are not old enough";
    document.getElementById("voteable").innerHTML = qualify + " to vote.";
}
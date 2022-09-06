//INPUT FORM
function validateForm() {
    let x = document.forms["form1"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out.");
        return false;
    }
    let y= document.forms["form1"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out.");
        return false;
    }
}
//END INPUT FORM
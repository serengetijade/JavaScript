//INPUT FORM
function validateForm() {
    let x = document.forms["formName"]["First Name"].value;
    if (x == "") {
        alert("First Name must be filled out.");
        return false;
    }
    let y= document.forms["formName"]["Last Name"].value;
    if (y == "") {
        alert("Last Name must be filled out.");
        return false;
    }
    let z= document.forms["formName"]["Email"].value;
    if (z == "") {
        alert("Email must be filled out.");
        return false;
    }
}
//END INPUT FORM
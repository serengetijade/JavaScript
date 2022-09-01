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
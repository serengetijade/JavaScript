//RECEIPT
function getReceipt() {     
    var text1 = "<h3>You Ordered:</h3>"; //Initialize a string, which will grow as it passes to other functions.
    var runningTotal = 0;
    //SIZE
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //Creates an array of all possible size options based on objects with that class name.
    for (var i = 0; i < sizeArray.length; i++) {        //loop to iterate through numbers, starting at 0 and ending at sizeArray.length.
        if (sizeArray[i].checked) {                     //check each index position [i] (as defined by the above loop) to see if it is .checked.
            var selectedSize = sizeArray[i].value;      //if an index position is .checked, initiate a variable called selectedSize and assign it the value of whatever is at the checked index position.
            text1 = text1+selectedSize+"<br>";          //Add to the text1 string.
        }
    }
    if (selectedSize === "Small Pizza") {               //Change the sizeTotal variable according to 
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Family Pizza") {
        sizeTotal = 16;
    }
    //CRUST
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var c = 0; c < crustArray.length; c++) {       //loop to iterate through numbers, starting at 0 and ending at sizeArray.length.
        if (crustArray[c].checked) {                     //check each index position [c] (as defined by the above loop) to see if it is .checked.
            var selectedCrust = crustArray[c].value;    //if an index position is .checked, initiate a variable called selectedSize and assign it the value of whatever is at the checked index position.
            text1 = text1+selectedCrust+"<br>";         //Add to the text1 string.
        }
    }
    if (selectedCrust === "Regular Crust") {
        crustTotal = 0;
    }
    else if (selectedCrust === "Garlic Crust") {
        crustTotal = 0;
    }
    else if (selectedCrust === "Cheesy Crust") {
        crustTotal = 0;
    }
    else if (selectedCrust === "Gluten-Free Crust") {
        crustTotal = 3;
    }
    runningTotal = sizeTotal + crustTotal;              //sum the size and crust charges
    console.log(selectedSize+" = $"+sizeTotal+crustTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};
//END RECEIPT

//TOPPINGS
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var seletedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            seletedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = seletedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount -1);
    }
    else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+"topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
//END TOPPINGS

//SUBMIT ORDER STATEMENT
function confirmation () {
    document.getElementById("confirmation").innerHTML = "Thank you. Your order has been submitted.<br> It should be ready for pickup in 20 minutes.";
}
//END SUBMIT ORDER STATEMENT
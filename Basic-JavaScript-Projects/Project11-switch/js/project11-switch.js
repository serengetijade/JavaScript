function Craft_Switch_Function() {
    var Craft_Output;
    var Craft_Options= document.getElementById("Craft_Input").value;
    var Craft_String = " is super cool! Get crafting.";
    switch(Craft_Options) {
        case "Sewing":      //provides instructions for when Craft_Options = "Red"
            Craft_Output = "Sewing" + Craft_String;
        break;              //breaks out of the switch block. 
        case "Knitting":
            Craft_Output = "Knitting" + Craft_String;
        break;
        case "Crocheting":
            Craft_Output = "Crocheting" + Craft_String;
        break;
        case "Painting": 
            Craft_Output = "Painting" + Craft_String;
        break;
        case "Woodwork":
            Craft_Output = "Woodwork" + Craft_String;
        break;
        case "Other stuff":
            Craft_Output = "Other stuff" + Craft_String;
        break;
        default:            //specifies code to run if there is no case
            Craft_Output = "That sounds neat too!";      
    }   //End of the switch block
    document.getElementById("Craft_Output").innerHTML = Craft_Output;
}

//GET ELEMENT BY CLASS
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";  //calls the variable A, at the 0 number instance- which is any with class "Click"
}
//END GET ELEMENT BY CLASS
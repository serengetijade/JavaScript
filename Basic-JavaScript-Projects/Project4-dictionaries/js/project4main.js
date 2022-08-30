//BASIC DICTIONARY
function my_dictionary() {
	var Animal= {
		Species:"Dog",  //There are NO SPACEs after the :colon.
		Color:"Black",  //String values go within quotes. 
        Breed:"Labrador",
        Age:5,          //Integers do NOT need quotes
        Sound:"Woof!"
    };
    //delete Animal.Sound; //The delete command removes a KVP, would return "undefined" result.
    document.getElementById("Dictionary").innerHTML=Animal.Sound; //JS is case specific, so if variables are upper/lowercase they must be the same EVERYWHERE!
}
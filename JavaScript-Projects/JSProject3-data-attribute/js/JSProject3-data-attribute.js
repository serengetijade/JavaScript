//DATA-* ATTRIBUTE
function displayType(character) {       //defines (character) as the parameter of the function
    var characterType = character.getAttribute("data-character-type");  //initializes a variable and assigns it's value using the object method .getAttribute()
    alert(characterType + " is in the " + character.innerHTML + " universe.");  //creates a string using variables defined above
}

function olMac(animal) {        //defines (animal) as the parameter of the function
    var animalNoise = animal.getAttribute("data-animal-noise");
    alert("The " + animal.innerHTML + " says " + animalNoise)
}
//END DATA-* ATTRIBUTE
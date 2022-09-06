//DATA-* ATTRIBUTE
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe.");
}

function olMac(animal) {
    var animalNoise = animal.getAttribute("data-animal-noise");
    alert("The " + animal.innerHTML + " says " + animalNoise)
}
//END DATA-* ATTRIBUTE
"use strict";
//Typescript files usually end in .ts
class ClassName {
    constructor(name) {
        this.name = name;
        this.isActive = true;
    }
    methodName() {
        return "Hello, this is a TypeScript method by " + this.name;
    }
}
//Create a new instance
let firstClassObject = new ClassName("Alice"); //TS automatically infers that this is a string type variable. 
let newMessage = firstClassObject.methodName();
//Change the text on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
//Apply inheritance
class NewClass extends ClassName {
}

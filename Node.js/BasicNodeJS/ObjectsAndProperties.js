//Declare an object (a variable). These can then be used as property values in other objects.
const variableName = "value";
const PI = Math.PI;

//Declare an object and its properties: 
const obj = {
  p1: 10,         //Declare a property and assign it a value. 
  p2: 20,
  f1() {},        //Property that defines a function
  f2: () => {},   //Property that defines an arrow function
  [variableName]: 42,         //Object literal- JavaScript will evaluate what's within the square brackets and make the result of that the new property name.
  //Object literals allow programmers to define an object with property names to map values that exist in the current scope with the exact same names. 
  //If you have a variable named PI, and you would like obj to have a property named PI as well, holding the same value as the variable PI,
  PI: PI, 
  PI,             //this is the shorter syntax way of writing PI: PI, 
};

//Object literal: 
//The property of obj called 'variableName' is undefined. Why: because it was defined with dynamic property syntax, 
//meaning JavaScript will evaluate the mystery expression first, and whatever that expression evaluates to will become the object property. 
//In this case, the object will have a property answer with the value of 42. 
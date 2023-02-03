//Ex1: DESTRUCTURING
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

//Destructuring syntax - the above lines are the same as this one:
const { PI, E, SQRT2 }  = Math;

//Ex2: Destructure just the readFile out of the require object: 
const { readFile } = require('fs');

//DESTRUCTURED PROPERTY VALUES
//If the argument passed to a function is an object, instead of using the name of the object every time you want to access its properties, 
//you can use the destructuring syntax within the function parentheses to destructure just the properties that you are interested in 
//and make them local to that function. 
const circle = {        //circle is the object
  label: 'circleX',     //label is a property
  radius: 2,            //radius is a property
};
const circleArea = ({ radius }, {precision = 2} = {}) =>      
  //'radius' is a destructured property of a cirlce object. 
  //{precision = 2} assigns a default value if none is provided
  //={} makes this parameter optional.
  (PI * radius * radius).toFixed(precision);
console.log(
  circleArea(circle)        //Call the circleArea function and pass in a circle object - this makes its radius property available. 
);

//ARRAYS: Destructuring also works for arrays. To extract array values into local variables, use the items' positions:
const [first, second, , fourth] = [10, 20, 30, 40];   //result: first=10, second=20, and so on. 

//REST OPERATOR
const [firstObj, ...restOfItems] = [10, 20, 30, 40];
//... =destructure only one item out of this array 
const newArray = [...restOfItems];
//and then create a new array under the name 'restOfItems' to hold the rest of the items after removing the first one. 

//REST OPERATOR TO CREATE NEW ARRAYS EXCLUDING CERTAIN PROPERTIES
const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};
const { temp1, temp2, ...person } = data; //the new 'person' array will NOT contain temp1 and temp2 parameters

const newObject = {
  ...person,
};
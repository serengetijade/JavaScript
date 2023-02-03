//Arrow functions are a more concise way to write a function: 
const functionName1 = (a) => { a * a };  //Curly braces are not strictly necessary if using a one line function.
const functionName2 = a => a * a; //If a function only has one parameter, can leave off parentheses. 

//Arrow functions and scope: 
const X = function () {
  //a "this" keyword here is bound to the caller of X
};

const Y = () => {
  //a "this" here is NOT the caller of Y, but rather the same "this" found in Y's scope
  //Function Y will close over the value for the this keyword for its scope at the time it was defined, 
  //making it great for delayed execution cases like events and listeners. 
};

//THIS
this.id = 'exports'; //Define "this" as "exports"

const testerObj = {  //Define a method with two functions: a regular and an arrow function
  func1: function () {  
    console.log('func1', this);  //Regular functions define scope from the caller of the function.
  },
  func2: () => {
    console.log('func2', this);  //Arrow functions define scope from the environment.
  },
};

//Call each function of the 'testerObj' object
testerObj.func1();  //Result: { func1: [Functin: func1], func2: [Function: func2]}
testerObj.func2();  //Result: {id: 'exports'}

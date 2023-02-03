//An example module: 
function dynamicArgsFunction() {
  console.log(arguments);
  exports.a = 42;
  module.exports.b = 37;
}

//When the function defined above is called, it passes in the values (3, 7, 5, 4).
//Those values = 'arguments' parameter within that function. 
dynamicArgsFunction(3, 7, 5, 4);

//Result: [Aruguments] {'0':3, '1':7, '2':5, '3':4}

//FROM ANOTHER FILE:::
//Invoke the require function and pass in a path to a module
const moduleApi = require('./pathToModule');

//Result: moduleApi = {a: 42, b: 37} because it is yields the export argument of the module called. 
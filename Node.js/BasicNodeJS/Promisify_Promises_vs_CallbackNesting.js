//Node ships first level support for promises in some modules. The fs module is one of them. 
//That means, the promisify function isn't required syntax. Instead, use the native promises returned by the fs module itself. 
//Below is the same code, first written using promisify, then with promise nesting:

//PROMISIFY
const fs = require('fs');
const util = require('util');

//Use util.promisify method of util to create a new version of readFile
const readFile = util.promisify(fs.readFile);   //Result: return a promise that eill be a function

//Consume the promise using async
async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main(); //call the method

//PROMISE NESTING
//Destructure {} the readFile. Destructuring pulls 'readFiles' out of the fs module, and doesn't import the whole thing.
//Attach the promises object to the top-level API of the fs module. 
const { readFile } = require('fs').promises;   //Result: return a promise

//Consume the promise using async
async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}
//async = keyword to specify that the script is executed asynchronously
//await = use the keyword await before the promise, to get access to the data available after the async action.
//Must call the async method to execute the action. 

main(); //call the method

//////////////////////////////////////////////////////////////////////
//Compare the same code: promise nesting vs callback nesting
//PROMISE NESTING
const fs = require('fs').promises;  //Here, the fs variable is NOT destructured because more than one method are needed from the fs module. 

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  //Syntax: fs.writeFile( file, data, options, callback )
  //More awaits here...
}

main();
console.log('TEST');

//CALLBACK NESTING - confusing, don't use this when coding
const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
  //Syntax: fs.readFile( filename, encoding, callback_function )
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    //Syntax: fs.writeFile( file, data, options, callback )
    //Nest more callbacks here...
  });
});
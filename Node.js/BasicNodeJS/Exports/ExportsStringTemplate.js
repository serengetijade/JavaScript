// Top-level API is a dynamic function (it takes in one argument):

module.exports = title => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${title}</title>
  </head>
  <body>
    <p>Use the argument: ${title}</p>
  </body>
  </html>
`;

//When you require this API (that is a function), which would be done from another document, it returns back a function. 
//Call the API in templateGenerator. It's a function, and you can invoke this function with any argument that you want.
const templateGenerator = require('./ExportsStringTemplate');

//Captured the result of the require call into a variable: 
const myTemplate = templateGenerator('Hello Node!');

//Executing that variable, because it's just a function: 
console.log(myTemplate);

//Restult of executing this function is the template. 
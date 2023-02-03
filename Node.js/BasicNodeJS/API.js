//Create an API. Top-level API is a simple object (no need to use module.exports)
//Declare API properties: 
exports.language = 'English';
exports.direction = 'RTL';
exports.encoding = 'UTF-8';

//To call the API FROM ANOTHER FILE
const api = require('./API');
//Access the APIs properties
console.log(api.language, api.direction, api.encoding); //Result: English RTL UTF-8
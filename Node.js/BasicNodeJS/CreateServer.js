//const http = require('http'); 
  //The require function manages the dependencies of the program
  //This program depends on the built in HTTP module 
//const server = http.createServer((req, res) => {

import { createServer } from 'http';
  //Add a sigle method of an object (http) as a dependency, rather than the entire object. 

const server = createServer((req, res) => {
  res.end('Hello World\n');
  //Apply the built in .createServer function to the HTTP module
  //req = .createServer requires an argument, called a request listener. 
  //res = the second argument required by .createServer. It is the response object. 
  //res.end = .end is a built in method that activates when the ‘res’ response ends. 
});

server.listen(4242, () => {
  //Activates the server created above. 
  //.listen is a built in method that continually runs the process. It is the task that keeps the runtime busy and not exit. 
  //4242 = the port used to run the server
  console.log('Server is running...');
});
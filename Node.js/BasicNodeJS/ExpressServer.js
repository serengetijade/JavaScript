//Use the Express module of Node.js to create a server

const express = require('express');
  //The express package exports its top level API as a function.
  //'express' captures the function. This is named express by popular convention.

const server = express();
  //call the express object to create a server object. This is named server by popular convention.

//For every URL and HTTP operation that we want our server to support, define a listener. 
//Usually, the first url to support is the root url. 
//Syntax: server.get('url', listener function);
server.get('/', (req, res) => {
  res.send("Hello");   //Send anything to the requester (instead of using .write and .end). 
})

server.get('/about', (req, res) => {
  res.send("Do something else for \'about\' page.");   
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
 //Call the .listen method to make the server listen to incoming request from users


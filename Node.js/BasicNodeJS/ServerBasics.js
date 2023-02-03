//Use JavaScript's http module to create a server

//Version 1--------------------------------------
//Capture the API of the http module that is required into the 'http' variable:
const http = require('http');
  //the require call returns the API of the module that we're requiring. 
  //now the variable 'http' has access to all methods of the http module. 

const server = http.createServer((req, res) => {  
  res.end('Hello World\n');     //This is shorthand for res.write('...'); res.end();
});
  //server = the object created by calling the http.createServer request. It is an event emitter. One event that 'server' emits is named request. 
  //createServer is a built in method of the http module.
  //createServer is a function that accepts an argument, and its argument is also a function.
  //req = request object.
  //res = response object
  //These are positional arguments. The first argument represents the request side of a request event and the second argument represents the response side of a request event.
  //res.end = write data back to the requester using the built in .end method
  //.end method indicates that the http request is explicitly over. It is required. 

server.listen(4242, () => {
  console.log('Server is running...');
});
  //Listener functions recieve two objects: the req and res objects defined above. 
  //The listener function is a function that is invoked every time there is a request event. 
  //Calling the .listen function on the server object activates it.
  //console.log is the callback method that will get invoked if the server is successful on the named port. 

//Version 2--------------------------------------
//The above code can be rewritten and the function argument of the .createServer method can be extracted to make it easier to read. 
const requestListener = (req, res) => {  
  res.end('Hello World\n');
}

const server2 = http.createServer(requestListener);
  //Pass in the function reference. It is only a pointer. Do NOT call it - no ().

server2.listen(4242, () => {
  console.log('Server is running...');
});

//Version 3-------------------------------------
const requestListener2 = (req, res) => {  
  res.end('Hello World\n');
}

//Use the eventEmitter API:
const server3 = http.createServer();
server3.on('request', requestListener2);

server3.listen(4242, () => {
  console.log('Server is running...');
});
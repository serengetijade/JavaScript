//READ FROM A STREAM
var fs = require("fs");  //Enable the fs module
const { EventEmitter } = require("stream");
let data = '';

//Create a readable stream instance using createReadStream method: Syntax: fs.createReadStream('path', options)
let readerStream = fs.createReadStream('testFile.txt');
readerStream.setEncoding('UTF8');   // Set the encoding to be utf8. 

//Use event emmiter method .on to handle stream event. Syntax: .on(eventName, listener)
readerStream.on('data', streamData =>   //The 'data' event -from the class: stream.Readable- is emitted whenever the stream is relinquishing ownership of a chunk of data to a consumer. 
   data += streamData   //Add the data from the stream instance 
);

//'end' event -from the class: stream.Readable- is emitted by the stream when there is no more data to be consumed from the stream.
readerStream.on('end',function() { 
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Read Program Ended");


//WRITE TO A STREAM
var fs = require("fs");
var writeData = 'This text was added via a stream!';

//Create a stream instance to which data can be written using createWriteStream method. Syntax: fs.createWriteStream('path', options)
var writerStream = fs.createWriteStream('testFile.txt');

///Stream WRITE options: 
writerStream.write(writeData,'UTF8');  //REWRITE the entire file: Apply the .write method of the fs module to Write the data to stream with encoding utf8.

//Use built in stream method to mark the end of file
writerStream.end();

//'finish' event -from the class: stream.Readable- is emitted after stream.end() is called and all chunks have been processed by stream._transform(). 
writerStream.on('finish', function() { 
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Write Program Ended");
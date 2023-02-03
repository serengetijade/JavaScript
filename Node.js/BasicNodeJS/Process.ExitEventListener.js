setTimeout(() => process.exit(), 2000);
  //setTimeout syntax: setTimeout(() => arrow function to call, delay)

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});
//Syntax: process.on('eventListner', arrow function)
  //.on adds an event listener
  //'exit' defines the event listener

console.log('Hello!');  //This code is executed first.

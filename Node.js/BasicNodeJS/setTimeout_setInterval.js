//SET TIMEOUT - set a MINIMUM delay time. Functions may take longer because they wait for other functions to fire. 
//Syntax: setTimeout(function, delay, arg1, arg2, arg3...)
setTimeout(
  () => {console.log('Hello after 2 seconds');},   //The first arugment is an arrow function whose call is to be delayed. 
  2 * 1000                                         //The second arugment is the delay in miliseconds. Arguments passed to the called function follow, separated by commmas.
);

//Declare a constant that is an arrow function that takes in NO parameters
const func = () => {console.log('Hello after 4 seconds');};
setTimeout(func, 4 * 1000);

//Declare a constant that is a function that takes one parameter: 
const theOneFunc = delay => {console.log('Hello after ' + delay + ' seconds');};
setTimeout(theOneFunc, 6 * 1000, 6); //The third parameter, '6' is passed to the 'delay' function as an argument. 
setTimeout(theOneFunc, 8 * 1000, 8);

//Use clearTimeout to prevent a timout function from occuring. Usually this is attached to an event trigger, like a button click. 
const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0     //Because the timeout is set to 0 milliseconds, it would happen immediately. However, it is also being stopped immediately by the clearTimeout call below. 
);
clearTimeout(timerId);


//SET INTERVAL
// //Function to occur at regular intervals without end
// setInterval(
//   () => console.log('Hello every 3 seconds'),
//   3000
// );
//Function to occur at regular intervals as a variable
const intervalFunction = setInterval(() => {
  console.log('Hello every 3 seconds');
  }, 3000);

//Clear the setInterval after 9 seconds: //or use Ctrl+c to break out of the function
function stopInterval() {
  clearInterval(intervalFunction)
};
setTimeout(stopInterval, 10000);

//Clear/stop setInterval function after x iterations
let counter = 1;
const intervalId = setInterval(() => {
  console.log('Iteration '+ counter);
  counter += 1;
  if (counter === 6) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 250); //delay is 1/4th a second

//Increment the delay
const greeting1 = delay =>
  setTimeout(() => {
    console.log('Hello World. ' + delay);
    greeting1(delay + 1);  //Increment the delay by 1 after every iteration
  }, delay * 1000);
greeting1(1);              //Start at delay = 1

//Run x number of times AND then increment delay, repeat: 
let lastIntervalId, counter2 = 5;
const greeting2 = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ' + delay);
      greeting2(delay + 100);
    }, delay);
    counter2 = 0;
  }
  counter2 += 1;
};
greeting(100);